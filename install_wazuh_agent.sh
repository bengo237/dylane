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
sudo sed -i "\$a<ossec_config>\n<localfile>\n<log_format>json</log_format>\n<location>/home/runner/work/dylane/dylane/report.json</location>\n</localfile>\n</ossec_config>" "$OSSEC_CONF"


# Start the Wazuh agent service
sudo systemctl start wazuh-agent
cat /var/ossec/etc/ossec.conf

echo "Wazuh agent installation and configuration completed."
# Wait for 5 minutes
sleep 5m