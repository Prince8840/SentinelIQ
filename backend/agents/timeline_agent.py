def generate_timeline(incident_type):

    if incident_type == "Cyber Attack":
        return [
            "00:00 Incident Detected",
            "00:05 Response Team Activated",
            "00:10 Systems Isolated",
            "00:30 Threat Contained",
            "02:00 Recovery Started",
            "48:00 Recovery Completed"
        ]

    return [
        "00:00 Incident Reported",
        "00:10 Investigation Started",
        "01:00 Resolution Started",
        "06:00 Incident Resolved"
    ]