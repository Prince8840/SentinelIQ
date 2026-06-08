def analyze_incident(incident: str):

    incident_lower = incident.lower()

    if "chemical" in incident_lower:
        return {
            "incident_type": "Chemical Leak",
            "severity": "Critical",
            "priority": "Immediate",
            "affected_area": "Production Zone"
        }

    elif "fire" in incident_lower:
        return {
            "incident_type": "Fire Accident",
            "severity": "High",
            "priority": "Immediate",
            "affected_area": "Building"
        }

    elif "ransomware" in incident_lower:
        return {
            "incident_type": "Cyber Attack",
            "severity": "Critical",
            "priority": "Immediate",
            "affected_area": "IT Infrastructure"
        }

    elif "flood" in incident_lower:
        return {
            "incident_type": "Natural Disaster",
            "severity": "High",
            "priority": "Urgent",
            "affected_area": "Facility"
        }

    else:
        return {
            "incident_type": "Unknown",
            "severity": "Medium",
            "priority": "Review Required",
            "affected_area": "Unknown"
        }