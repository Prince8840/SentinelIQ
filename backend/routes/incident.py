from fastapi import APIRouter

from agents.analyzer_agent import analyze_incident
from agents.risk_agent import calculate_risk
from agents.strategy_agent import generate_strategy
from agents.communication_agent import generate_message
from agents.validator_agent import validate_response
from agents.prediction_agent import predict_impact
from agents.timeline_agent import generate_timeline
from agents.summary_agent import generate_summary
from agents.ai_commander_agent import generate_ai_advice
from agents.decision_agent import generate_decision
from agents.threat_feed_agent import generate_threat_feed
from agents.ai_reasoning_agent import generate_ai_reasoning
router = APIRouter()


@router.post("/analyze")
def analyze(data: dict):

    incident = data.get("incident")

    # Agent 1 - Analysis
    analysis = analyze_incident(incident)

    ai_reasoning = generate_ai_reasoning(
    incident
)

    # Agent 2 - Risk
    risk = calculate_risk(
        analysis["incident_type"],
        analysis["severity"]
    )

    # Agent 3 - Strategy
    strategy = generate_strategy(
        analysis["incident_type"]
    )

    # Agent 4 - Prediction
    prediction = predict_impact(
        analysis["incident_type"]
    )

    # Agent 5 - Timeline
    timeline = generate_timeline(
        analysis["incident_type"]
    )

    # Agent 6 - Summary
    summary = generate_summary(
        analysis["incident_type"],
        risk["risk_score"],
        prediction["recovery_time"],
        prediction["financial_loss"]
    )

    # Agent 7 - Communication
    communication = generate_message(
        analysis["incident_type"]
    )

    # Agent 8 - Validation
    validation = validate_response(
        risk["risk_score"]
    )

    ai_advice = generate_ai_advice(
    analysis["incident_type"],
    risk["risk_score"],
    prediction["recovery_time"],
    prediction["financial_loss"]
)
    decision = generate_decision(
    risk["risk_score"]
)
    threat_feed = generate_threat_feed(
    analysis["incident_type"]
)

    return {
        "analysis": analysis,
        "risk": risk,
        "strategy": strategy,
        "prediction": prediction,
        "timeline": timeline,
        "summary": summary,
        "communication": communication,
        "ai_advice": ai_advice,
        "decision": decision,
        "threat_feed": threat_feed,
        "ai_reasoning": ai_reasoning,
        "validation": validation
    }