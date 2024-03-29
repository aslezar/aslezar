import React from "react";
import "./cursor.scss";
import { motion } from "framer-motion";
const Cursor = () => {
	const [position, setPosition] = React.useState({ x: 0, y: 0 });
	React.useEffect(() => {
		const mouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);
	return (
		<motion.div
			className="cursor"
			animate={{ x: position.x + 8, y: position.y + 8 }}
		></motion.div>
	);
};

export default Cursor;
