import "./App.css";
// import useGenerateRandomColor
	// from "./useGenerateRandomColor";
    import Color from "./Colorgen";

function App() {
	const { color, generateColor } = Color();
	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				backgroundColor: "#" + color,
				display: "flex",
				justifyContent: "center",
				alignItems: "flex-end",
			}}
		>
			<button
				style={{
				
					fontSize: "larger",
				}}
				onClick={generateColor}
			>
				Generate random color
			</button>
		</div>
	);
}

export default App;
