def generate_summary(
    incident_type,
    risk_score,
    recovery_time,
    financial_loss
):

    return f"""
Critical Incident Summary

Incident Type: {incident_type}

Risk Score: {risk_score}

Estimated Recovery Time:
{recovery_time}

Estimated Financial Loss:
{financial_loss}

Recommended Action:

Immediately isolate affected systems,
activate response teams,
and begin recovery procedures.
"""