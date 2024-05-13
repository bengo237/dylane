import React from "react";

//Pages
import AProposDeMoiPage from "./propos";
import PortfolioPage from "../pages/portfolio";
import ExperiencePage from "../pages/experience";
import HomePage from "../pages/homepage";
//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";
import CarrouselTechsDivContainer from "@/components/CarrouselTechsDivContainer";

export default function Index() {
	return (
		<>
			<HomePage />
			<ServicesOffer />
			<AProposDeMoiPage />
			<PortfolioPage />
			<ExperiencePage />
			<FooterPage />
		</>
	);
}
