import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import Github from "../../assets/github.svg";
import Twitter from "../../assets/twitter.svg";
import Discord from "../../assets/discord.svg";
import LinkedIn from "../../assets/linkedin.png";
import Mail from "../../assets/mail.png";

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
					<a href="https://github.com/aslezar" target="_blank" rel="noreferrer">
						<img src={Github} alt="Github" />
					</a>
					<a
						href="https://www.linkedin.com/in/shivamgarg1234/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={LinkedIn} alt="LinkedIn" />
					</a>
					<a
						href="https://twitter.com/mr_shivamgarg"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Twitter} alt="Twitter" />
					</a>
					{/* mail */}
					<a
						href="mailto:shivam8728.1@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Mail} alt="Mail" />
					</a>
					{/* <a href="https://discord.gg/example" target="_blank" rel="noreferrer">
						<img src={Discord} alt="Discord" />
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
