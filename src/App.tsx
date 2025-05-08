import { useState, useEffect } from 'react';

function App() {
	const [position, setPosition] = useState({ x: 250, y: 250 });
	const squareSize = 20;

	const handleKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowLeft':
				setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 10 }));
				break;
			case 'ArrowRight':
				setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 10 }));
				break;
			case 'ArrowUp':
				setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y - 10 }));
				break;
			case 'ArrowDown':
				setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 10 }));
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					width: `${squareSize}px`,
					height: `${squareSize}px`,
					backgroundColor: 'red',
					position: 'absolute',
					left: position.x,
					top: position.y,
				}}
			/>
		</div>
	);
}

export default App;
