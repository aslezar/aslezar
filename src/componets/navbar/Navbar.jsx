import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
	return (
		<div className="navbar">
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					aslezar
				</motion.span>
				<div className="contactBtn">
					<a href="#">
						<img src="/3D1.jpg" alt="tempsocial" />
					</a>
					<a href="#">
						<img src="/3D2.jpg" alt="tempsocial" />
					</a>
					<a href="#">
						<img src="/3D3.jpg" alt="tempsocial" />
					</a>
					<a href="#">
						<img src="/3D4.jpg" alt="tempsocial" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
