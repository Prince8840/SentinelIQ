def generate_ai_advice(
    incident_type,
    risk_score,
    recovery_time,
    financial_loss
):
    
    if risk_score >= 90:
        return f"""
🚨 CRITICAL INCIDENT DETECTED

Incident Type: {incident_type}

Risk Score: {risk_score}

Immediate executive action is required.

Recommended Actions:
• Isolate affected systems
• Activate emergency response teams
• Notify stakeholders
• Begin recovery procedures immediately

Estimated Recovery Time:
{recovery_time}

Estimated Financial Impact:
{financial_loss}
"""

    elif risk_score >= 70:
        return f"""
⚠️ HIGH RISK INCIDENT

Incident Type: {incident_type}

Rapid response is recommended.

Contain affected operations,
investigate root cause,
and prepare recovery teams.

Recovery Time:
{recovery_time}
"""

    else:
        return f"""
ℹ️ MODERATE INCIDENT

Incident Type: {incident_type}

Monitor the situation carefully.

Follow standard operating procedures
and continue assessment.
"""