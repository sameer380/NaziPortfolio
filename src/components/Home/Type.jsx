import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
			<Typewriter
				options={{
					strings: [
						"Full Stack Developer",
						"Passionate About new things",
						"Curious, visionary and highly ambitious",
						"Effective Problem Solver",
					],
					autoStart: true,
					loop: true,
					deleteSpeed: 50,
				}}
			/>
		);
}

export default Type