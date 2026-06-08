def generate_strategy(incident_type):

    if incident_type == "Cyber Attack":
        return [
            "Isolate affected systems",
            "Disconnect infected devices",
            "Activate incident response team",
            "Restore from backup",
            "Notify stakeholders"
        ]

    elif incident_type == "Chemical Leak":
        return [
            "Evacuate area immediately",
            "Stop production",
            "Deploy hazmat team",
            "Provide medical assistance",
            "Contain chemical source"
        ]

    elif incident_type == "Fire Accident":
        return [
            "Activate fire alarm",
            "Evacuate building",
            "Contact fire department",
            "Shut down power supply",
            "Assess damage"
        ]

    else:
        return [
            "Perform manual investigation",
            "Escalate to management"
        ]