#!/bin/bash

# Variable
OSSEC_CONF="/var/ossec/etc/ossec.conf"

# Update the package list
sudo apt-get update

# Install Wazuh agent
curl -so wazuh-agent.deb https://packages.wazuh.com/4.x/apt/pool/main/w/wazuh-agent/wazuh-agent_4.4.4-1_amd64.deb && sudo WAZUH_MANAGER='master.wazuh.adorsys.team' WAZUH_REGISTRATION_PASSWORD='password' WAZUH_AGENT_GROUP='default' WAZUH_AGENT_NAME='owasp-agent' dpkg -i ./wazuh-agent.deb
sudo systemctl daemon-reload
sudo systemctl enable wazuh-agent
sudo systemctl start wazuh-agent

# Stop the Wazuh agent service
sudo systemctl stop wazuh-agent

# Modify ossec.conf
sudo sed -i "s|<frequency>[0-9]*</frequency>|<frequency>50</frequency>|" $OSSEC_CONF
sudo sed -i "/<directories>\/etc,\/usr\/bin,\/usr\/sbin<\/directories>/a <directories realtime=\"yes\">/home/runner/work/dylane/dylane/report.json</directories>" $OSSEC_CONF

# Add new localfile entry
sudo sed -i "/<localfile>\n    <log_format>syslog<\/log_format>\n    <location>\/var\/ossec\/logs\/active-responses.log<\/location>\n  <\/localfile>/a \ \ <localfile>\n\ \ \ \ <log_format>json</log_format>\n\ \ \ \ <location>/home/runner/work/dylane/dylane/report.json</location>\n\ \ </localfile>" $OSSEC_CONF

# Start the Wazuh agent service
sudo systemctl start wazuh-agent

# Enable Wazuh agent service to start on boot

echo "Wazuh agent installation and configuration completed."
# Wait for 5 minutes
sleep 5m