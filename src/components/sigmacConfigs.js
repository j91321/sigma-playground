import configAlaAzureActivitylog from "raw-loader!../assets/configs/ala-azure-activitylogs.yml"
import configAlaAzureAuditlog from "raw-loader!../assets/configs/ala-azure-ad_auditlogs.yml"
import configAlaAzureAwsCloudtrail from "raw-loader!../assets/configs/ala-azure-aws_cloudtrail.yml"
import configAlaSuricata from "raw-loader!../assets/configs/ala-suricata.yml"
import configAla from "raw-loader!../assets/configs/ala.yml"
import configArcSightZeek from "raw-loader!../assets/configs/arcsight-zeek.yml"
import configArcSight from "raw-loader!../assets/configs/arcsight.yml"
import configAthena from "raw-loader!../assets/configs/athena.yml"
import configCarbonBlackEdr from "raw-loader!../assets/configs/carbon-black-eedr.yml"
import configCarbonBlack from "raw-loader!../assets/configs/carbon-black.yml"
import configChronicle from "raw-loader!../assets/configs/chronicle.yml"
import configCrowdstrike from "raw-loader!../assets/configs/crowdstrike.yml"
import configDatadog from "raw-loader!../assets/configs/datadog.yml"
import configDevoNetwork from "raw-loader!../assets/configs/devo-network.yml"
import configEcsAuditbeatModules from "raw-loader!../assets/configs/ecs-auditbeat-modules-enabled.yml"
import configEcsAuditd from "raw-loader!../assets/configs/ecs-auditd.yml"
import configEcsAzureActivitylog from "raw-loader!../assets/configs/ecs-azure-activitylogs.yml"
import configEcsAzureAdAuditlog from "raw-loader!../assets/configs/ecs-azure-ad_auditlogs.yml"
import configEcsAzureAdSigninlog from "raw-loader!../assets/configs/ecs-azure-ad_signinlogs.yml"
import configEcsCloudtrail from "raw-loader!../assets/configs/ecs-cloudtrail.yml"
import configEcsDns from "raw-loader!../assets/configs/ecs-dns.yml"
import configEcsFilebeat from "raw-loader!../assets/configs/ecs-filebeat.yml"
import configEcsMS365Defender from "raw-loader!../assets/configs/ecs-ms365_defender.yml"
import configEcsOkta from "raw-loader!../assets/configs/ecs-okta.yml"
import configEcsProxy from "raw-loader!../assets/configs/ecs-proxy.yml"
import configEcsSuricata from "raw-loader!../assets/configs/ecs-suricata.yml"
import configEcsZeekCorelight from "raw-loader!../assets/configs/ecs-zeek-corelight.yml"
import configEcsZeekBeats from "raw-loader!../assets/configs/ecs-zeek-elastic-beats-implementation.yml"
import configElkDefaultIndexFilebeat from "raw-loader!../assets/configs/elk-defaultindex-filebeat.yml"
import configElkDefaultIndexLogstash from "raw-loader!../assets/configs/elk-defaultindex-logstash.yml"
import configElkDefaultIndex from "raw-loader!../assets/configs/elk-defaultindex.yml"
import configElkLinux from "raw-loader!../assets/configs/elk-linux.yml"
import configElkWindows from "raw-loader!../assets/configs/elk-windows.yml"
import configElkWinlogbeatSp from "raw-loader!../assets/configs/elk-winlogbeat-sp.yml"
import configElkWinlogbeat from "raw-loader!../assets/configs/elk-winlogbeat.yml"
import configFilebeatDefaultIndex from "raw-loader!../assets/configs/filebeat-defaultindex.yml"
import configFireeyeHelix from "raw-loader!../assets/configs/fireeye-helix.yml"
import configHawk from "raw-loader!../assets/configs/hawk.yml"
import configHumio from "raw-loader!../assets/configs/humio.yml"
import configLimacharlie from "raw-loader!../assets/configs/limacharlie.yml"
import configLogpoint from "raw-loader!../assets/configs/logpoint-windows.yml"
import configLogRhytmWinevent from "raw-loader!../assets/configs/logrhythm_winevent.yml"
import configLogstashDefaultIndex from "raw-loader!../assets/configs/logstash-defaultindex.yml"
import configLogstashLinux from "raw-loader!../assets/configs/logstash-linux.yml"
import configLogstashWindows from "raw-loader!../assets/configs/logstash-windows.yml"
import configLogstashZeekDefaultJson from "raw-loader!../assets/configs/logstash-zeek-default-json.yml"
import configNetwitnessEpl from "raw-loader!../assets/configs/netwitness-epl.yml"
import configNetwitness from "raw-loader!../assets/configs/netwitness.yml"
import configPowershell from "raw-loader!../assets/configs/powershell.yml"
import configQradar from "raw-loader!../assets/configs/qradar.yml"
import configQualys from "raw-loader!../assets/configs/qualys.yml"
import configSplunkWindowsIndex from "raw-loader!../assets/configs/splunk-windows-index.yml"
import configSplunkWindows from "raw-loader!../assets/configs/splunk-windows.yml"
import configSplunkZeek from "raw-loader!../assets/configs/splunk-zeek.yml"
import configStixCustom from "raw-loader!../assets/configs/stix-custom.yml"
import configStixShifter from "raw-loader!../assets/configs/stix-shifter.yml"
import configStix20 from "raw-loader!../assets/configs/stix2.0.yml"
import configSumologicCse from "raw-loader!../assets/configs/sumologic-cse.yml"
import configSumologic from "raw-loader!../assets/configs/sumologic.yml"
import configThor from "raw-loader!../assets/configs/thor.yml"
import configWinlogbeatModulesEnabled from "raw-loader!../assets/configs/winlogbeat-modules-enabled.yml"
import configWinlogbeat from "raw-loader!../assets/configs/winlogbeat.yml"
import configZircolite from "raw-loader!../assets/configs/zircolite.yml"

export const sigmacConfigs = [ // eslint-disable-line no-unused-vars
    { name: "AlaAzureActivitylog", filename: "ala-azure-activitylogs.yml", content: configAlaAzureActivitylog },
    { name: "AlaAzureAuditlog", filename: "ala-azure-ad_auditlogs.yml", content: configAlaAzureAuditlog },
    { name: "AlaAzureAwsCloudtrail", filename: "ala-azure-aws_cloudtrail.yml", content: configAlaAzureAwsCloudtrail },
    { name: "AlaSuricata", filename: "ala-suricata.yml", content: configAlaSuricata },
    { name: "Ala", filename: "ala.yml", content: configAla },
    { name: "ArcSightZeek", filename: "arcsight-zeek.yml", content: configArcSightZeek },
    { name: "ArcSight", filename: "arcsight.yml", content: configArcSight },
    { name: "Athena", filename: "athena.yml", content: configAthena },
    { name: "CarbonBlackEdr", filename: "carbon-black-eedr.yml", content: configCarbonBlackEdr },
    { name: "CarbonBlack", filename: "carbon-black.yml", content: configCarbonBlack },
    { name: "Chronicle", filename: "chronicle.yml", content: configChronicle },
    { name: "Crowdstrike", filename: "crowdstrike.yml", content: configCrowdstrike },
    { name: "Datadog", filename: "datadog.yml", content: configDatadog },
    { name: "DevoNetwork", filename: "devo-network.yml", content: configDevoNetwork },
    { name: "AuditbeatModules", filename: "ecs-auditbeat-modules-enabled.yml", content: configEcsAuditbeatModules },
    { name: "EcsAuditd", filename: "ecs-auditd.yml", content: configEcsAuditd },
    { name: "EcsAzureActivitylog", filename: "ecs-azure-activitylogs.yml", content: configEcsAzureActivitylog },
    { name: "EcsAzureAdAuditlog", filename: "ecs-azure-ad_auditlogs.yml", content: configEcsAzureAdAuditlog },
    { name: "EcsAzureAdSigninlog", filename: "ecs-azure-ad_signinlogs.yml", content: configEcsAzureAdSigninlog },
    { name: "EcsCloudtrail", filename: "ecs-cloudtrail.yml", content: configEcsCloudtrail },
    { name: "EcsDns", filename: "ecs-dns.yml", content: configEcsDns },
    { name: "EcsFilebeat", filename: "ecs-filebeat.yml", content: configEcsFilebeat },
    { name: "EcsMS365Defender", filename: "ecs-ms365_defender.yml", content: configEcsMS365Defender },
    { name: "EcsOkta", filename: "ecs-okta.yml", content: configEcsOkta },
    { name: "EcsProxy", filename: "ecs-proxy.yml", content: configEcsProxy },
    { name: "EcsSuricata", filename: "ecs-suricata.yml", content: configEcsSuricata },
    { name: "EcsZeekCorelight", filename: "ecs-zeek-corelight.yml", content: configEcsZeekCorelight },
    { name: "EcsZeekBeats", filename: "ecs-zeek-elastic-beats-implementation.yml", content: configEcsZeekBeats },
    { name: "ElkDefaultIndexFilebeat", filename: "elk-defaultindex-filebeat.yml", content: configElkDefaultIndexFilebeat },
    { name: "ElkDefaultIndexLogstash", filename: "elk-defaultindex-logstash.yml", content: configElkDefaultIndexLogstash },
    { name: "ElkDefaultIndex", filename: "elk-defaultindex.yml", content: configElkDefaultIndex },
    { name: "ElkLinux", filename: "elk-linux.yml", content: configElkLinux },
    { name: "ElkWindows", filename: "elk-windows.yml", content: configElkWindows },
    { name: "ElkWinlogbeatSp", filename: "elk-winlogbeat-sp.yml", content: configElkWinlogbeatSp },
    { name: "ElkWinlogbeat", filename: "elk-winlogbeat.yml", content: configElkWinlogbeat },
    { name: "FilebeatDefaultIndex", filename: "filebeat-defaultindex.yml", content: configFilebeatDefaultIndex },
    { name: "FireeyeHelix", filename: "fireeye-helix.yml", content: configFireeyeHelix },
    { name: "Hawk", filename: "hawk.yml", content: configHawk },
    { name: "Humio", filename: "humio.yml", content: configHumio },
    { name: "Limacharlie", filename: "limacharlie.yml", content: configLimacharlie },
    { name: "Logpoint", filename: "logpoint-windows.yml", content: configLogpoint },
    { name: "LogRhytmWinevent", filename: "logrhythm_winevent.yml", content: configLogRhytmWinevent },
    { name: "LogstashDefaultIndex", filename: "logstash-defaultindex.yml", content: configLogstashDefaultIndex },
    { name: "LogstashLinux", filename: "logstash-linux.yml", content: configLogstashLinux },
    { name: "LogstashWindows", filename: "logstash-windows.yml", content: configLogstashWindows },
    { name: "LogstashZeekDefaultJson", filename: "logstash-zeek-default-json.yml", content: configLogstashZeekDefaultJson },
    { name: "NetwitnessEpl", filename: "netwitness-epl.yml", content: configNetwitnessEpl },
    { name: "Netwitness", filename: "netwitness.yml", content: configNetwitness },
    { name: "Powershell", filename: "powershell.yml", content: configPowershell },
    { name: "Qradar", filename: "qradar.yml", content: configQradar },
    { name: "Qualys", filename: "qualys.yml", content: configQualys },
    { name: "SplunkWindowsIndex", filename: "splunk-windows-index.yml", content: configSplunkWindowsIndex },
    { name: "SplunkWindows", filename: "splunk-windows.yml", content: configSplunkWindows },
    { name: "SplunkZeek", filename: "splunk-zeek.yml", content: configSplunkZeek },
    { name: "StixCustom", filename: "stix-custom.yml", content: configStixCustom },
    { name: "StixShifter", filename: "stix-shifter.yml", content: configStixShifter },
    { name: "Stix20", filename: "stix2.0.yml", content: configStix20 },
    { name: "SumologicCse", filename: "sumologic-cse.yml", content: configSumologicCse },
    { name: "Sumologic", filename: "sumologic.yml", content: configSumologic },
    { name: "Thor", filename: "thor.yml", content: configThor },
    { name: "WinlogbeatModulesEnabled", filename: "winlogbeat-modules-enabled.yml", content: configWinlogbeatModulesEnabled },
    { name: "Winlogbeat", filename: "winlogbeat.yml", content: configWinlogbeat },
    { name: "Zircolite", filename: "zircolite.yml", content: configZircolite },
]

export const sigmacTargets = [
    { targetValue: "athena", targetName: "Amazon Athena SQL", validConfigs: ["athena.yml"] },
    { targetValue: "arcsight-esm", targetName: "ArcSight ESM saved search", validConfigs: ["arcsight.yml", "arcsight-zeek.yml"]  },
    { targetValue: "arcsight", targetName: "ArcSight saved search", validConfigs: ["arcsight.yml", "arcsight-zeek.yml"] },
    { targetValue: "ala", targetName: "Azure Log Analytics Query", validConfigs: ["ala-azure-activitylogs.yml", "ala-azure-ad_auditlogs.yml", "ala-azure-aws_cloudtrail.yml", "ala-suricata.yml", "ala.yml"] },
    { targetValue: "ala-rule", targetName: "Azure Log Analytics Rule", validConfigs: ["ala-azure-activitylogs.yml", "ala-azure-ad_auditlogs.yml", "ala-azure-aws_cloudtrail.yml", "ala-suricata.yml", "ala.yml"] },
    { targetValue: "sentinel-rule", targetName: "Azure Sentinel scheduled alert rule ARM template", validConfigs: ["ala.yml"] },
    { targetValue: "carbonblack", targetName: "CarbonBlack query string", validConfigs: ["carbon-black.yml", "carbon-black-eedr.yml"] },
    { targetValue: "crowdstrike", targetName: "CrowdStrike Search Processing Language (SPL)", validConfigs: ["crowdstrike.yml"] },
    { targetValue: "csharp", targetName: "CSharp Regex in LINQ query", validConfigs: [] },
    { targetValue: "datadog-logs", targetName: "Datadog log search query", validConfigs: ["datadog.yml"] },
    { targetValue: "devo", targetName: "Devo query", validConfigs: ["devo-network.yml", "devo-web.yml", "devo-windows.yml"] },
    { targetValue: "ee-outliers", targetName: "EE-outliers", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "logstash-windows.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "elastalert-dsl", targetName: "ElastAlert DSL query", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "ecs-okta.yml", "ecs-dns.yml", "logstash-windows.yml", "ecs-suricata.yml", "ecs-cloudtrail.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "helk.yml", "logstash-zeek-default-json.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "elastalert", targetName: "ElastAlert QS query", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "ecs-okta.yml", "ecs-dns.yml", "logstash-windows.yml", "ecs-suricata.yml", "ecs-cloudtrail.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "helk.yml", "logstash-zeek-default-json.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "es-dsl", targetName: "Elasticsearch DSL query", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "ecs-okta.yml", "ecs-dns.yml", "logstash-windows.yml", "ecs-suricata.yml", "ecs-cloudtrail.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "helk.yml", "logstash-zeek-default-json.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "es-eql", targetName: "Elasticsearch EQL query", validConfigs: ["ecs-filebeat.yml", "ecs-auditd.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat-modules-enabled.yml"] },
    { targetValue: "es-qs", targetName: "Elasticsearch query string", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "ecs-okta.yml", "ecs-dns.yml", "logstash-windows.yml", "ecs-suricata.yml", "ecs-cloudtrail.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "helk.yml", "logstash-zeek-default-json.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "es-rule-eql", targetName: "Elastic SIEM EQL query", validConfigs: ["ecs-filebeat.yml", "ecs-auditd.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat-modules-enabled.yml"] },
    { targetValue: "es-rule", targetName: "Elastic SIEM Lucene query", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "ecs-okta.yml", "ecs-dns.yml", "logstash-windows.yml", "ecs-suricata.yml", "ecs-cloudtrail.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "helk.yml", "logstash-zeek-default-json.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "xpack-watcher", targetName: "Elastic X-Pack Watcher JSON", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "ecs-okta.yml", "ecs-dns.yml", "logstash-windows.yml", "ecs-suricata.yml", "ecs-cloudtrail.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "helk.yml", "logstash-zeek-default-json.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "fireeye-helix", targetName: "FireEye Helix Query Language", validConfigs: ["fireeye-helix.yml"] },
    { targetValue: "chronicle", targetName: "Google Chronicle YARA-L", validConfigs: ["chronicle.yml"] },
    { targetValue: "graylog", targetName: "Graylog query string", validConfigs: [] },
    { targetValue: "grep", targetName: "Grep", validConfigs: [] },
    { targetValue: "hawk", targetName: "HAWK search", validConfigs: ["hawk.yml"] },
    { targetValue: "humio", targetName: "Humio query", validConfigs: ["humio.yml"] },
    { targetValue: "kibana", targetName: "Kibana Saved Search JSON", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "ecs-okta.yml", "ecs-dns.yml", "logstash-windows.yml", "ecs-suricata.yml", "ecs-cloudtrail.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "helk.yml", "logstash-zeek-default-json.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "kibana-ndjson", targetName: "Kibana Saved Search NDJSON", validConfigs: ["logstash-defaultindex.yml", "filebeat-defaultindex.yml", "logstash-linux.yml", "ecs-filebeat.yml", "ecs-okta.yml", "ecs-dns.yml", "logstash-windows.yml", "ecs-suricata.yml", "ecs-cloudtrail.yml", "ecs-proxy.yml", "ecs-auditd.yml", "winlogbeat-old.yml", "helk.yml", "logstash-zeek-default-json.yml", "ecs-auditbeat-modules-enabled.yml", "winlogbeat.yml", "winlogbeat-modules-enabled.yml", "ecs-zeek-corelight.yml", "ecs-zeek-elastic-beats-implementation.yml"] },
    { targetValue: "lacework", targetName: "Lacework Policy Platform", validConfigs: [] },
    { targetValue: "limacharlie", targetName: "LimaCharlie D&R rule", validConfigs: ["limacharlie.yml"] },
    { targetValue: "logiq", targetName: "LOGIQ event rule API payload", validConfigs: [] },
    { targetValue: "logpoint", targetName: "LogPoint query", validConfigs: ["logpoint-windows.yml"] },
    { targetValue: "es-qs-lr", targetName: "LogRhythm Lucene query string", validConfigs: ["logrhythm_winevent.yml"] },
    { targetValue: "mdatp", targetName: "Microsoft Defender ATP Hunting Query", validConfigs: [] },
    { targetValue: "netwitness", targetName: "NetWitness saved search", validConfigs: ["netwitness.yml"] },
    { targetValue: "opensearch-monitor", targetName: "OpenSearch monitor (Query String)", validConfigs: ["winlogbeat.yml"] },
    { targetValue: "powershell", targetName: "PowerShell event log cmdlet", validConfigs: ["powershell.yml", "powershell-windows-all.yml"] },
    { targetValue: "qualys", targetName: "Qualys saved search", validConfigs: ["qualys.yml"] },
    { targetValue: "qradar", targetName: "Qradar saved search", validConfigs: ["qradar.yml"] },
    { targetValue: "netwitness-epl", targetName: "RSA NetWitness EPL", validConfigs: ["netwitness-epl.yml"] },
    { targetValue: "splunkxml", targetName: "Splunk Dashboard Panels XML", validConfigs: ["splunk-windows-index.yml", "splunk-windows.yml", "splunk-zeek.yml"] },
    { targetValue: "splunk", targetName: "Splunk Search Processing Language (SPL)", validConfigs: ["splunk-windows-index.yml", "splunk-windows.yml", "splunk-zeek.yml"] },
    { targetValue: "splunkdm", targetName: "Splunk syntax leveraging Datamodel acceleration", validConfigs: ["splunk-windows-index.yml", "splunk-windows.yml"] },
    { targetValue: "sql", targetName: "SQL query", validConfigs: [] },
    { targetValue: "sqlite", targetName: "SQL query for SQLite", validConfigs: ["zircolite.yml"] },
    { targetValue: "stix", targetName: "STIX pattern", validConfigs: ["stix-shifter.yml", "stix-custom.yml", "stix2.0.yml"] },
    { targetValue: "sumologic-cse-rule", targetName: "SumoLogic CSE query rule", validConfigs: ["sumologic-cse.yml"] },
    { targetValue: "sumologic-cse", targetName: "SumoLogic CSE query", validConfigs: ["sumologic-cse.yml"] },
    { targetValue: "sumologic", targetName: "SumoLogic query", validConfigs: ["sumologic.yml"] },
    { targetValue: "sysmon", targetName: "Sysmon XML configuration", validConfigs: [] },
    { targetValue: "uberagent", targetName: "uberAgent ESA's process tagging rule", validConfigs: [] },    
    { targetValue: "fieldlist", targetName: "List all fieldnames from given Sigma rule", validConfigs: [] },    
]