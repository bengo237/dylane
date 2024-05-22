#!/bin/bash

# Variables
WAZUH_MANAGER="master.wazuh.adorsys.team"
AGENT_NAME="owasp-agent"
OSSEC_CONF="/var/ossec/etc/ossec.conf"

# Update the package list
sudo apt-get update

# Install Wazuh agent
sudo apt-get install -y curl apt-transport-https lsb-release gnupg
curl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | sudo apt-key add -
echo "deb https://packages.wazuh.com/4.x/apt/ stable main" | sudo tee /etc/apt/sources.list.d/wazuh.list
sudo apt-get update
sudo apt-get install -y wazuh-agent

# Stop the Wazuh agent service
sudo systemctl stop wazuh-agent

# Modify ossec.conf
sudo sed -i "s|<address>IP</address>|<address>$WAZUH_MANAGER</address>|" $OSSEC_CONF
sudo sed -i "/<config-profile>/a \ \ \ \ <agent_name>$AGENT_NAME</agent_name>" $OSSEC_CONF
sudo sed -i "s|<frequency>[0-9]*</frequency>|<frequency>50</frequency>|" $OSSEC_CONF
sudo sed -i "s|<directories>.*</directories>|<directories realtime=\"yes\">/home/runner/work/dylane/dylane/report.json</directories>|" $OSSEC_CONF

# Add new localfile entry
sudo sed -i "/<\/localfile>/a \ \ <localfile>\n\ \ \ \ <log_format>json</log_format>\n\ \ \ \ <location>/home/runner/work/dylane/dylane/report.json</location>\n\ \ </localfile>" $OSSEC_CONF

# Start the Wazuh agent service
sudo systemctl start wazuh-agent

# Enable Wazuh agent service to start on boot
sudo systemctl enable wazuh-agent

echo "Wazuh agent installation and configuration completed."
