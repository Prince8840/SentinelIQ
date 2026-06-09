import { jsPDF } from "jspdf";
import { useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const cardStyle = {
  border: "1px solid #444",
  borderRadius: "12px",
  padding: "20px",
  backgroundColor: "#111827",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};

function App() {

  const [threats] = useState([
  "Ransomware activity detected in healthcare sector",
  "New phishing campaign targeting banks",
  "Critical Windows vulnerability reported",
  "Suspicious DDoS traffic detected globally",
]);
  const [incident, setIncident] = useState("");
  
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("incidentHistory")) || []
  );

  const riskData = [
  {
    name: "Risk",
    value: result?.risk?.risk_score || 0,
  },
  {
    name: "Safe",
    value: 100 - (result?.risk?.risk_score || 0),
  },
];

const COLORS = ["#ff4d4f", "#52c41a"];

  const analyzeIncident = async () => {
    try {
      setLoading(true);

      const response =await axios.post(
  "https://sentineliq-ocz4.onrender.com/incident/analyze",
        {
          incident: incident,
        }
      );

      setResult(response.data);
      



      const updatedHistory = [
        incident,
        ...history.filter((i) => i !== incident),
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "incidentHistory",
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = () => {
  if (!result) return;

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("SentinelIQ Incident Report", 20, 20);

  doc.setFontSize(12);

  doc.text(
    `Incident Type: ${result.analysis.incident_type}`,
    20,
    40
  );

  doc.text(
    `Severity: ${result.analysis.severity}`,
    20,
    50
  );

  doc.text(
    `Priority: ${result.analysis.priority}`,
    20,
    60
  );

  doc.text(
    `Risk Score: ${result.risk.risk_score}`,
    20,
    70
  );

  doc.text(
    `Business Impact: ${result.risk.business_impact}`,
    20,
    80
  );

  doc.text(
    `Recovery Time: ${result.prediction.recovery_time}`,
    20,
    90
  );

  doc.text(
    `Financial Loss: ${result.prediction.financial_loss}`,
    20,
    100
  );

  doc.save("SentinelIQ_Report.pdf");
};

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1400px",
        margin: "auto",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "30px",
        }}
      >
        🚨 SentinelIQ Dashboard
      </h1>

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Incident..."
          value={incident}
          onChange={(e) => setIncident(e.target.value)}
          style={{
            width: "500px",
            padding: "12px",
            marginRight: "10px",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={analyzeIncident}
          style={{
            padding: "12px 25px",
            cursor: "pointer",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <button
            onClick={downloadReport}
            style={{
              marginLeft: "10px",
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            📥 Download Report
          </button>
        )}
      </div>

      {result && (
        <>

        {result.risk.risk_score >= 90 && (
  <div
    style={{
      background: "#b91c1c",
      color: "white",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px",
    }}
  >
    🚨 CRITICAL ALERT ACTIVE - Executive Attention Required
  </div>
)}

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "15px",
    marginBottom: "25px",
  }}
>
  <div style={cardStyle}>
    <h3>📊 Total Incidents</h3>
    <h1>{history.length}</h1>
  </div>

  <div style={cardStyle}>
    <h3>🚨 Critical Risk</h3>
    <h1>
      {result.risk.risk_score >= 90 ? 1 : 0}
    </h1>
  </div>

  <div style={cardStyle}>
    <h3>⚠️ High Impact</h3>

  <h2
  style={{
    fontSize: "2rem",
    marginTop: "20px",
    textAlign: "center",
  }}
>
  {result.risk.business_impact}
</h2>
  </div>

  <div style={cardStyle}>
    <h3>✅ Status</h3>
    <h1>Active</h1>
  </div>
</div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            📊 Incident Analysis
          </h2>
          <div style={cardStyle}>
  <h3>🔄 Agent Workflow</h3>

  <div
    style={{
      textAlign: "center",
      lineHeight: "2",
      fontSize: "18px",
    }}
  >
    📥 Incident Input
    <br />↓<br />
    🧠 Analyzer Agent
    <br />↓<br />
    ⚠️ Risk Agent
    <br />↓<br />
    🔮 Prediction Agent
    <br />↓<br />
    🛡️ Strategy Agent
    <br />↓<br />
    🤖 AI Commander
    <br />↓<br />
    🎯 Executive Decision
    <br />↓<br />
    📄 Executive Summary
  </div>
</div> 

          

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}

            
          >
            {/* Analysis */}
            <div style={cardStyle}>
              <h3>📋 Analysis Card</h3>
              <p><strong>Type:</strong> {result.analysis.incident_type}</p>
              <p><strong>Severity:</strong> {result.analysis.severity}</p>
              <p><strong>Priority:</strong> {result.analysis.priority}</p>
            </div>

            {/* Risk */}
            <div style={cardStyle}>
              <h3>⚠️ Risk Card</h3>

              <p
                style={{
                  color:
                    result.risk.risk_score >= 90
                      ? "red"
                      : "orange",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                Risk Score: {result.risk.risk_score}
              </p>

              <div
                style={{
                  width: "100%",
                  height: "25px",
                  background: "#222",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginTop: "15px",
                }}
              >
                <div
                  style={{
                    width: `${result.risk.risk_score}%`,
                    height: "100%",
                    background:
                      result.risk.risk_score > 80
                        ? "red"
                        : result.risk.risk_score > 50
                        ? "orange"
                        : "green",
                  }}
                />
              </div>

              <p>Business Impact: {result.risk.business_impact}</p>
              <p>Human Impact: {result.risk.human_impact}</p>
            </div>

            {/* Prediction */}
            <div style={cardStyle}>
              <h3>🔮 Prediction Card</h3>

              <p>
                <strong>Recovery Time:</strong>{" "}
                {result.prediction.recovery_time}
              </p>

              <p>
                <strong>Financial Loss:</strong>{" "}
                {result.prediction.financial_loss}
              </p>

              <p><strong>Affected Departments:</strong></p>

              <ul>
                {result.prediction.affected_departments.map(
                  (dept, index) => (
                    <li key={index}>{dept}</li>
                  )
                )}
              </ul>
            </div>

            {/* Strategy */}
            <div style={cardStyle}>
              <h3>🛡️ Strategy Card</h3>

              <ul>
                {result.strategy.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div style={cardStyle}>
              <h3>🕒 Timeline Card</h3>

              <ul>
                {result.timeline.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
  <h3>📈 Risk Analytics</h3>

  <ResponsiveContainer
    width="100%"
    height={250}
  >
    <PieChart>
      <Pie
        data={riskData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        dataKey="value"
        label
      >
        {riskData.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index]}
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>

            {/* Communication */}
            <div style={cardStyle}>
              <h3>📢 Communication Card</h3>

              <p><strong>SMS:</strong></p>
              <p>{result.communication.sms}</p>

              <hr />

              <p><strong>Email:</strong></p>

              <pre
                style={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {result.communication.email}
              </pre>
            </div>

            {/* Validation */}
            <div style={cardStyle}>
              <h3>✅ Validation Card</h3>

              <p>
                Approved:{" "}
                {result.validation.validated ? "Yes" : "No"}
              </p>

              <p>
                Approval Level: {result.validation.approval}
              </p>
            </div>

            <div style={cardStyle}>
  <h3>🎯 Executive Decision</h3>

  <h2
    style={{
      color:
        result.decision.decision ===
        "STOP OPERATIONS"
          ? "red"
          : result.decision.decision ===
            "LIMIT OPERATIONS"
          ? "orange"
          : "lightgreen",
    }}
  >
    {result.decision.decision}
  </h2>

  <p
    style={{
      marginTop: "15px",
      lineHeight: "1.7",
    }}
  >
    {result.decision.reason}
  </p>
</div>



            {/* History */}

            <div style={cardStyle}>
  <h3>🕘 Incident History</h3>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
    }}
  >
    <thead>
      <tr>
        <th>Incident</th>
      </tr>
    </thead>

    <tbody>
      {history.map((item, index) => (
        <tr key={index}>
          <td
            style={{
              padding: "8px",
            }}
          >
            {item}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
{/* AI Assistant */}

<div style={cardStyle}>

  <div
  style={{
    ...cardStyle,
    maxHeight: "500px",
    overflowY: "auto",
  }}
></div>
  <h3>🤖 AI Assistant</h3>

<pre
  style={{
    whiteSpace: "pre-wrap",
    fontSize: "16px",
    lineHeight: "1.6",
  }}
>
 {result.ai_reasoning}
</pre>
</div>


<div style={cardStyle}>
  <h3>🌍 Live Threat Feed</h3>

  
  <ul>
  {result.threat_feed.map((item, index) => (
    <li
      key={index}
      style={{
        marginBottom: "10px",
      }}
    >
      {item}
    </li>
  ))}
</ul>
</div>

{/* Summary */}

<div style={cardStyle}>
  <h3>📄 Executive Summary</h3>

  <pre
    style={{
      whiteSpace: "pre-wrap",
    }}
  >
    {result.summary}
  </pre>
</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;