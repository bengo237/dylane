import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useTheme } from "styled-components";

//Lotties
import AnimationYellowBackground from "@/public/lotties/landing-page-yellow.json";
import AnimationLightBackground from "@/public/lotties/landing-page-light.json";

const ContainerLottie = styled.div`
	width: 600px;
	height: 600px;
	transition: all 0.3s ease;

	@media (max-width: 1400px) {
		width: 600px;
		height: 600px;
	}

	@media (max-width: 1200px) {
		width: 500px;
		height: 500px;
	}

	@media (max-width: 900px) {
		width: 400px;
		height: 400px;
	}

	@media (max-width: 425px) {
		width: 300px;
		height: 300px;
	}
`;

const AnimationsToShow = {
	dark: AnimationYellowBackground,
	light: AnimationLightBackground,
};

export default function LogoReact() {
	const theme = useTheme();

	return (
		<ContainerLottie>
			<Lottie
				animationData={AnimationsToShow[theme.name]}
				loop={true}
				autoplay={true}
				style={{ width: "100%", height: "100%" }}
				rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
			/>
		</ContainerLottie>
	);
}
