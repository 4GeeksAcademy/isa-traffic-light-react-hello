import React, { useState } from "react";

const TrafficLight = () => {
	const [activeColor, setActiveColor] = useState(null);

	const handleClick = (color) => {
		setActiveColor(color);
	};

	const getButtonStyle = (color) => {
		return {
			width: "80px", 
			height: "80px", 
			backgroundColor: color,
			boxShadow: activeColor === color ? "0 0 20px rgba(255, 255, 255, 1)" : "none",
			border: "none",
			borderRadius: "50%",
			cursor: "pointer"
		};
	};

	return (
		<div className="container">
			<div className="bg-black mx-auto" style={{ width: "30px", height: "80px" }}></div>
			<div className="bg-black mx-auto rounded" style={{ width: "120px", height: "300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
				<button onClick={() => handleClick('red')} style={getButtonStyle('red')}></button>
				<button onClick={() => handleClick('yellow')} style={getButtonStyle('yellow')}></button>
				<button onClick={() => handleClick('green')} style={getButtonStyle('green')}></button>
			</div>
		</div>
	);
};

export default TrafficLight;