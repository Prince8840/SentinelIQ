def generate_decision(risk_score):

    if risk_score >= 90:
        return {
            "decision": "STOP OPERATIONS",
            "reason": "Critical risk detected. Immediate containment and executive attention required."
        }

    elif risk_score >= 70:
        return {
            "decision": "LIMIT OPERATIONS",
            "reason": "High risk incident. Enhanced monitoring and partial restrictions recommended."
        }

    else:
        return {
            "decision": "CONTINUE OPERATIONS",
            "reason": "Risk manageable. Continue monitoring and follow standard procedures."
        }