def validate_response(risk_score):

    if risk_score >= 90:
        return {
            "validated": True,
            "approval": "Executive Attention Required"
        }

    return {
        "validated": True,
        "approval": "Standard Response"
    }