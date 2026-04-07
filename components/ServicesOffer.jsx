import React, { useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Styled icons
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { ShieldKeyhole } from "@styled-icons/fluentui-system-filled/ShieldKeyhole";
import { Password } from "@styled-icons/fluentui-system-filled/Password";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const CardService = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	width: 275px;
	padding: 24px 20px;
	transition: all 0.3s ease;
	background-color: ${(props) => props.theme.colors.panel || props.theme.colors.backgroundSecondary};
	border: 1px solid ${(props) => props.theme.colors.border || props.theme.colors.backgroundSecondary};
	border-left: 3px solid ${(props) => props.theme.colors.branding};
	border-radius: 4px;

	&:hover {
		transform: translateY(-3px);
		border-left-width: 4px;
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 36px;
		height: 36px;
		margin-bottom: 14px;
	}

	h3 {
		color: ${(props) => props.theme.colors.title};
		font-size: 16px;
		font-weight: 700;
		font-family: 'JetBrains Mono', monospace;
		letter-spacing: 0.04em;
		margin-top: 0;
		margin-bottom: 12px;
		text-transform: uppercase;

		@media (max-width: 900px) {
			font-size: 14px;
		}
	}

	p {
		font-size: 14px;
		color: ${(props) => props.theme.colors.body};
		font-weight: 400;
		text-align: left;
		word-wrap: break-word;
		line-height: 1.6;

		@media (max-width: 900px) {
			font-size: 13px;
		}
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	transition: all 0.3s ease;
	gap: 20px;
	justify-items: center;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		width: 85%;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		//margin-top: 60px;
		width: 100%;
	}
`;

const SectionServices = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding-top: 60px;
`;

export default function ServicesOffer() {
	const { language } = useContext(SettingsContext);

	return (
		<SectionServices id="section-services">
			<ContainerGrid>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
					<CardService>
						<MagnifyingGlass />
						<h3>{language.servicesOffer.cards.forensique.title}</h3>
						<p>{language.servicesOffer.cards.forensique.contentText}</p>
					</CardService>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
					<CardService>
						<ShieldKeyhole />
						<h3>{language.servicesOffer.cards.devsecops.title}</h3>
						<p>{language.servicesOffer.cards.devsecops.contentText}</p>
					</CardService>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={600}>
					<CardService>
						<Password />
						<h3>{language.servicesOffer.cards.pentesting.title}</h3>
						<p>{language.servicesOffer.cards.pentesting.contentText}</p>
					</CardService>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={800}>
					<CardService>
						<CodeBlock />
						<h3>{language.servicesOffer.cards.developpement.title}</h3>
						<p>{language.servicesOffer.cards.developpement.contentText}</p>
					</CardService>
				</ScrollAnimation>
			</ContainerGrid>
		</SectionServices>
	);
}
