import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
	return (
		<button onClick={() => setOpen((p) => !p)}>
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					d="M7.5 7.5H22.5"
					stroke="black"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={{
						open: {
							d: "M 7.5 7.5 L 22.5 22.5",
						},
						closed: {
							d: "M7.5 7.5H22.5",
						},
					}}
				/>
				<motion.path
					d="M7.5 15H22.5"
					stroke="black"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={{
						open: {
							opacity: 0,
						},
						closed: {
							opacity: 1,
						},
					}}
				/>
				<motion.path
					d="M7.5 22.5H22.5"
					stroke="black"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={{
						open: {
							d: "M 7.5 22.5 L 22.5 7.5",
						},
						closed: {
							d: "M7.5 22.5H22.5",
						},
					}}
				/>
			</svg>
		</button>
	);
};

export default ToggleButton;
