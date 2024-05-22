#!/bin/bash

# Variables
MANAGER_IP="master.wazuh.adorsys.team"
AGENT_NAME="owasp-agent"
OSSEC_CONF="/var/ossec/etc/ossec.conf"

# Install Wazuh Agent
echo "Installing Wazuh Agent..."
curl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | apt-key add -
echo "deb https://packages.wazuh.com/4.x/apt/ stable main" | tee /etc/apt/sources.list.d/wazuh.list
apt-get update
apt-get install wazuh-agent -y

# Stop the Wazuh agent service to make changes
systemctl stop wazuh-agent

# Backup the original ossec.conf file
cp $OSSEC_CONF $OSSEC_CONF.bak

# Modify ossec.conf
echo "Modifying ossec.conf..."

# Update the server address and agent name
sed -i "s|<address>IP</address>|<address>$MANAGER_IP</address>|" $OSSEC_CONF

# Update frequency and directories entries
sed -i "s|<frequency>43200</frequency>|<frequency>300</frequency>|" $OSSEC_CONF
sed -i "s|<directories>/etc,/usr/bin,/usr/sbin</directories>|<directories realtime=\"yes\">/home/runner/work/dylane/dylane/report.json</directories>\n    <directories>/etc,/usr/bin,/usr/sbin</directories>|" $OSSEC_CONF

# Add new localfile entry
sed -i "/<\/localfile>/a\\
  <localfile>\n    <log_format>json</log_format>\n    <location>/home/runner/work/dylane/dylane/report.json</location>\n  </localfile>" $OSSEC_CONF

# Rename the agent
sed -i "s|<name>.*</name>|<name>$AGENT_NAME</name>|" $OSSEC_CONF

# Restart Wazuh agent service
echo "Restarting Wazuh Agent..."
systemctl start wazuh-agent
systemctl enable wazuh-agent

echo "Wazuh Agent installation and configuration complete."
