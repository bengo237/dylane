import React from "react";

import AProposDeMoiPage from "@/pages/a-propos";
import PortfolioPage from "@/pages/portfolio";
import ExperiencePage from "@/pages/experience";
import HomePage from "@/pages/homepage";
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";


export default function Index() {
	return (
		<>
			<HomePage />
			<ServicesOffer />
			<AProposDeMoiPage />
			<ExperiencePage />
			<PortfolioPage />
			<FooterPage />
		</>
	);
}
