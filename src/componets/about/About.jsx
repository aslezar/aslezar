const About = () => {
	return (
		<div className="about bg-gray-100 h-full max-w-[1366px] m-auto overflow-hidden">
			<div className="container mx-auto py-10 px-4 md:px-0 md:py-0 flex flex-col items-center justify-center h-full">
				<img
					src="https://pbs.twimg.com/profile_images/1753014886681174016/_rVYontL_400x400.jpg"
					alt="My Photo"
					className="rounded-full w-24 h-24 mb-4"
				/>
				<h2 className="text-3xl font-bold mb-4">About Me</h2>
				<div className="max-w-2xl text-center">
					<p className="text-gray-700 leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
						magna ut ligula fermentum pulvinar. Vivamus eleifend vitae justo eu
						consequat. Nunc nec tellus felis. Integer non pharetra est, in
						aliquet purus.
					</p>
					<p className="text-gray-700 leading-relaxed mt-4">
						Fusce et metus quis magna vestibulum semper vitae sit amet justo.
						Sed fringilla justo vel augue lobortis, nec suscipit sapien mollis.
						Nullam nec ex sem. Vestibulum ante ipsum primis in faucibus orci
						luctus et ultrices posuere cubilia Curae.
					</p>
				</div>
				<div className="mt-8 max-w-2xl">
					<h3 className="text-xl font-semibold mb-2">Achievements</h3>
					<ul className="list-disc list-inside text-gray-700">
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Sed sed magna ut ligula fermentum pulvinar.</li>
						<li>Vivamus eleifend vitae justo eu consequat.</li>
					</ul>
				</div>
				<div className="mt-8 max-w-2xl">
					<h3 className="text-xl font-semibold mb-2">Education</h3>
					<div>
						<p className="text-gray-700 leading-relaxed">
							University Name, Degree, Year of Graduation
						</p>
						<p className="text-gray-700 leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className="mt-8 max-w-2xl">
					<h3 className="text-xl font-semibold mb-2">Languages</h3>
					<ul className="list-disc list-inside text-gray-700">
						<li>Hindi: Native Proficiency</li>
						<li>English: Professional Proficiency</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
