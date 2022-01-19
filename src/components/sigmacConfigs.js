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
    { targetValue: "es-dsl", targetName: "Elasticsearch DSL query", validConfigs: [""] },
    { targetValue: "es-eql", targetName: "Elasticsearch EQL query", validConfigs: [""] },
    { targetValue: "es-qs", targetName: "Elasticsearch query string", validConfigs: [""] },
    { targetValue: "es-rule-eql", targetName: "Elastic SIEM EQL query", validConfigs: [""] },
    { targetValue: "es-rule", targetName: "Elastic SIEM Lucene query", validConfigs: [""] },
    { targetValue: "xpack-watcher", targetName: "Elastic X-Pack Watcher JSON", validConfigs: [""] },
    { targetValue: "fireeye-helix", targetName: "FireEye Helix Query Language", validConfigs: [""] },
    { targetValue: "chronicle", targetName: "Google Chronicle YARA-L", validConfigs: [""] },
    { targetValue: "graylog", targetName: "Graylog query string", validConfigs: [""] },
    { targetValue: "grep", targetName: "Grep", validConfigs: [""] },
    { targetValue: "hawk", targetName: "HAWK search", validConfigs: [""] },
    { targetValue: "humio", targetName: "Humio query", validConfigs: [""] },
    { targetValue: "kibana", targetName: "Kibana Saved Search JSON", validConfigs: [""] },
    { targetValue: "kibana-ndjson", targetName: "Kibana Saved Search NDJSON", validConfigs: [""] },
    { targetValue: "lacework", targetName: "Lacework Policy Platform", validConfigs: [""] },
    { targetValue: "limacharlie", targetName: "LimaCharlie D&R rule", validConfigs: [""] },
    { targetValue: "logiq", targetName: "LOGIQ event rule API payload", validConfigs: [""] },
    { targetValue: "logpoint", targetName: "LogPoint query", validConfigs: [""] },
    { targetValue: "es-qs-lr", targetName: "LogRhythm Lucene query string", validConfigs: [""] },
    { targetValue: "mdatp", targetName: "Microsoft Defender ATP Hunting Query", validConfigs: [""] },
    { targetValue: "netwitness", targetName: "NetWitness saved search", validConfigs: [""] },
    { targetValue: "opensearch-monitor", targetName: "OpenSearch monitor (Query String)", validConfigs: [""] },
    { targetValue: "powershell", targetName: "PowerShell event log cmdlet", validConfigs: [""] },
    { targetValue: "qualys", targetName: "Qualys saved search", validConfigs: [""] },
    { targetValue: "qradar", targetName: "Qradar saved search", validConfigs: [""] },
    { targetValue: "netwitness-epl", targetName: "RSA NetWitness EPL", validConfigs: [""] },
    { targetValue: "splunkxml", targetName: "Splunk Dashboard Panels XML", validConfigs: [""] },
    { targetValue: "splunk", targetName: "Splunk Search Processing Language (SPL)", validConfigs: [""] },
    { targetValue: "splunkdm", targetName: "Splunk syntax leveraging Datamodel acceleration", validConfigs: [""] },
    { targetValue: "sql", targetName: "SQL query", validConfigs: [""] },
    { targetValue: "sqlite", targetName: "SQL query for SQLite", validConfigs: [""] },
    { targetValue: "stix", targetName: "STIX pattern", validConfigs: [""] },
    { targetValue: "sumologic-cse-rule", targetName: "SumoLogic CSE query rule", validConfigs: [""] },
    { targetValue: "sumologic-cse", targetName: "SumoLogic CSE query", validConfigs: [""] },
    { targetValue: "sumologic", targetName: "SumoLogic query", validConfigs: [""] },
    { targetValue: "sysmon", targetName: "Sysmon XML configuration", validConfigs: [""] },
    { targetValue: "uberagent", targetName: "uberAgent ESA's process tagging rule", validConfigs: [""] },    
    { targetValue: "fieldlist", targetName: "List all fieldnames from given Sigma rule", validConfigs: [""] },    
]