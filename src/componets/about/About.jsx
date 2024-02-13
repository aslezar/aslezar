const About = () => {
	return (
		<div className="about h-full max-w-[1366px] m-auto overflow-hidden">
			<div className="container m-auto p-10 flex flex-col items-center justify-center h-full">
				<img
					src="https://pbs.twimg.com/profile_images/1753014886681174016/_rVYontL_400x400.jpg"
					alt="My Photo"
					className="rounded-full w-24 h-24 mb-4"
				/>
				<h2 className="text-3xl font-bold mb-4">About Me</h2>
				<div className="max-w-2xl text-center">
					<p className="text-gray-700 leading-relaxed bg-white shadow-md rounded-lg p-4">
						Hi, I&apos;m a full stack developer with a passion for building
						innovative solutions.
					</p>
				</div>
				<div className="">
					<div className="mt-8 max-w-2xl">
						<h3 className="text-xl font-semibold mb-2">Achievements</h3>
						<ul className="list-disc list-inside text-gray-200 ">
							<li>
								Participated in HackwithMait 3.0 Hackathon, MAIT, New Delhi
							</li>
							<li>3 stars on Code Chef (Max rating 1627)</li>
						</ul>
					</div>
					<div className="mt-8 max-w-2xl">
						<h3 className="text-xl font-semibold mb-2">Education</h3>
						<div className="shadow-md rounded-lg p-4">
							<p className=" font-semibold mb-2">Bachelor of Technology</p>
							<p className="text-gray-700 mb-2">
								Computer Science & Technology
							</p>
							<p className="text-gray-200 mb-2">
								Maharaja Agrasen Institute of Technology, Rohini Sec 22, New
								Delhi
							</p>
							<p className="text-gray-200	">2021-2025</p>
							<p className="text-gray-200">GPA: 8.9</p>
						</div>
					</div>
					<div className="mt-8 max-w-2xl">
						<h3 className="text-xl font-semibold mb-2">Languages</h3>
						<ul className="list-disc list-inside text-gray-200 ">
							<li>Hindi: Native Proficiency</li>
							<li>English: Professional Proficiency</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
