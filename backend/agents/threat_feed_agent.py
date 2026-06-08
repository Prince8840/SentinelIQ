def generate_threat_feed(incident_type):

    if incident_type == "Cyber Attack":
        return [
            "🚨 Ransomware campaign targeting healthcare sector",
            "🚨 Multiple hospitals reporting encrypted systems",
            "🚨 Patient data availability impacted"
        ]

    elif incident_type == "Chemical Leak":
        return [
            "⚠️ Hazardous material exposure reported",
            "⚠️ Emergency response teams deployed",
            "⚠️ Evacuation procedures initiated"
        ]

    elif incident_type == "Fire Accident":
        return [
            "🔥 Fire suppression systems activated",
            "🔥 Emergency evacuation in progress",
            "🔥 Safety inspection underway"
        ]

    elif incident_type == "Natural Disaster":
        return [
            "🌊 Severe weather conditions detected",
            "🌊 Facility access restricted",
            "🌊 Emergency operations activated"
        ]

    else:
        return [
            "ℹ️ Monitoring ongoing",
            "ℹ️ Situation under assessment",
            "ℹ️ Awaiting further updates"
        ]