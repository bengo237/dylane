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

# Update the server address
sed -i "s|<address>IP</address>|<address>$MANAGER_IP</address>|" $OSSEC_CONF

## Modifier la fréquence de vérification de syscheck
sed -i "s|<frequency>[0-9]*</frequency>|<frequency>300</frequency>|" $OSSEC_CONF

# Modifier les répertoires vérifiés par syscheck
sed -i "s|<directories>.*/etc,.*/usr/bin,.*/usr/sbin</directories>|<directories realtime=\"yes\">home/runner/work/dylane/dylane/report.json</directories>|" $OSSEC_CONF

# Ajouter la configuration pour le fichier JSON
echo -e "\n<localfile>\n\t<log_format>json</log_format>\n\t<location>/home/runner/work/dylane/dylane/report.json</location>\n</localfile>\n" >> $OSSEC_CONF


# Rename the agent (if the <name> tag exists, otherwise add it)
if grep -q "<name>" $OSSEC_CONF; then
  sed -i "s|<name>.*</name>|<name>$AGENT_NAME</name>|" $OSSEC_CONF
else
  sed -i "/<client>/a\\
    <name>$AGENT_NAME</name>" $OSSEC_CONF
fi

# Restart Wazuh agent service
echo "Restarting Wazuh Agent..."
systemctl start wazuh-agent
systemctl enable wazuh-agent

echo "Wazuh Agent installation and configuration complete."
