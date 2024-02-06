import React from "react";

//create your first component
const Home = (App) => {
	return (
		<div>
		<div className="text-center">
			<h1 className="text-center mt-5 .bg-black">{App}</h1>
		</div>
		</div>
	);
};

export default Home;
