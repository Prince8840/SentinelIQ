def calculate_risk(incident_type, severity):

    if severity == "Critical":
        return {
            "risk_score": 95,
            "business_impact": "Very High",
            "human_impact": "High"
        }

    elif severity == "High":
        return {
            "risk_score": 80,
            "business_impact": "High",
            "human_impact": "Medium"
        }

    else:
        return {
            "risk_score": 50,
            "business_impact": "Medium",
            "human_impact": "Low"
        }