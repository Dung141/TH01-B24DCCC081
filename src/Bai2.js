import React, { useState, useEffect } from "react";

function TrafficLight() {
  const lights = ["red", "green", "yellow"];
  const [current, setCurrent] = useState(0);

  const nextLight = () => setCurrent((prev) => (prev + 1) % 3);

  useEffect(() => {
    const timer = setInterval(nextLight, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Đèn giao thông</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        {lights.map((light, idx) => (
          <div
            key={idx}
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: current === idx ? light : "gray",
            }}
          />
        ))}
      </div>
      <button onClick={nextLight}>Chuyển đèn</button>
    </div>
  );
}

export default TrafficLight;
