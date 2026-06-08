def generate_message(incident_type):

    return {
        "email": f"""
Subject: Emergency Alert

Incident Detected: {incident_type}

Response team has been activated.
Please follow safety instructions.
""",

        "sms": f"ALERT: {incident_type} detected. Follow emergency procedures immediately."
    }