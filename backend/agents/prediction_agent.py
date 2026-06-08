def predict_impact(incident_type):

    if incident_type == "Cyber Attack":
        return {
            "recovery_time": "48 Hours",
            "financial_loss": "$50,000",
            "affected_departments": [
                "Patient Records",
                "Billing",
                "Emergency Services"
            ]
        }

    return {
        "recovery_time": "24 Hours",
        "financial_loss": "$10,000",
        "affected_departments": [
            "Operations"
        ]
    }