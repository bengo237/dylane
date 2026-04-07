import React, { useContext, useEffect, useRef } from "react";

//Third's librarys
import styled, { keyframes } from "styled-components";
import Typed from "typed.js";
import { useTheme } from "styled-components";
import ProgressBar from "react-progressbar-on-scroll";

//Custom components
import Head from "@/components/Head";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import LandingAnimation from "@/components/LandingPageAnimation";
import FloatNavigationBar from "@/components/FloatNavigationBar";
import ScrollDownAnimation from "@/components/ScrollDownAnimation";
import { scrollToSection } from "@/components/SmoothScroll";

//Context
import { SettingsContext } from "@/context/SettingsContext";

const LandingPageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 930px) {
		flex-direction: column;
	}

	@media (max-width: 850px) {
		margin-bottom: 60px;
	}
`;

// Glitch keyframes
const glitch1 = keyframes`
	0%, 100% {
		clip-path: inset(0 0 95% 0);
		transform: translate(-2px, 0);
		opacity: 1;
	}
	20% {
		clip-path: inset(30% 0 60% 0);
		transform: translate(2px, 0);
	}
	40% {
		clip-path: inset(70% 0 10% 0);
		transform: translate(-1px, 0);
	}
	60% {
		clip-path: inset(15% 0 75% 0);
		transform: translate(1px, 0);
	}
	80% {
		clip-path: inset(85% 0 5% 0);
		transform: translate(-2px, 0);
	}
`;

const glitch2 = keyframes`
	0%, 100% {
		clip-path: inset(80% 0 5% 0);
		transform: translate(2px, 0);
		opacity: 1;
	}
	25% {
		clip-path: inset(10% 0 80% 0);
		transform: translate(-2px, 0);
	}
	50% {
		clip-path: inset(50% 0 30% 0);
		transform: translate(1px, 0);
	}
	75% {
		clip-path: inset(25% 0 55% 0);
		transform: translate(-1px, 0);
	}
`;

const GlitchWrapper = styled.div`
	position: relative;
	display: inline-block;

	&:hover .glitch-layer-1 {
		animation: ${glitch1} 0.4s steps(2, end) infinite;
	}

	&:hover .glitch-layer-2 {
		animation: ${glitch2} 0.4s steps(2, end) infinite;
	}
`;

const GlitchBase = styled.span`
	font-size: 60px;
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};
	font-family: 'JetBrains Mono', monospace;
	display: block;

	@media (max-width: 1400px) {
		font-size: 40px;
	}

	@media (max-width: 1200px) {
		font-size: 36px;
	}

	@media (max-width: 601px) {
		font-size: 26px;
		text-align: center;
	}
`;

const GlitchLayer = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	font-size: 60px;
	font-weight: 800;
	font-family: 'JetBrains Mono', monospace;
	display: block;
	pointer-events: none;
	opacity: 0;

	@media (max-width: 1400px) {
		font-size: 40px;
	}

	@media (max-width: 1200px) {
		font-size: 36px;
	}

	@media (max-width: 601px) {
		font-size: 26px;
	}
`;

// Terminal block
const TerminalBlock = styled.div`
	font-family: 'JetBrains Mono', monospace;
	font-size: 13px;
	line-height: 1.8;
	background-color: ${(props) =>
		props.theme.name === "dark" ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.06)"};
	border: 1px solid ${(props) => props.theme.colors.branding}44;
	border-left: 3px solid ${(props) => props.theme.colors.branding};
	border-radius: 2px;
	padding: 14px 18px;
	margin-bottom: 18px;
	width: 100%;

	@media (max-width: 600px) {
		font-size: 11px;
		padding: 10px 12px;
	}
`;

const TerminalPrompt = styled.div`
	color: ${(props) => props.theme.colors.branding};
	&::before {
		content: "$ ";
		color: ${(props) => props.theme.colors.branding};
		font-weight: 600;
	}
`;

const TerminalOutput = styled.div`
	color: ${(props) => props.theme.colors.body};
	padding-left: 4px;
	&::before {
		content: "> ";
		color: ${(props) => props.theme.colors.inactiveTitle || props.theme.colors.body};
		opacity: 0.6;
	}
`;

const TerminalOnline = styled.div`
	padding-left: 4px;
	&::before {
		content: "> ";
		color: ${(props) => props.theme.colors.inactiveTitle || props.theme.colors.body};
		opacity: 0.6;
	}
	color: ${(props) => props.theme.colors.statusOnline || "#3fb950"};
`;

const TitleLandingContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 10px;

	.grid-exp {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		transition: all 0.3s ease;
		gap: 20px;
		justify-items: center;
		width: 100%;
	}

	.type-string {
		font-size: 60px;
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};
		font-family: 'JetBrains Mono', monospace;

		@media (max-width: 1400px) {
			font-size: 40px;
		}

		@media (max-width: 1200px) {
			font-size: 36px;
		}

		@media (max-width: 601px) {
			font-size: 26px;
			text-align: center;
			width: 100%;
		}
	}

	@media (max-width: 601px) {
		align-items: center;
	}
`;

const SubTitleLanding = styled.div`
	font-weight: 400;
	color: ${(props) => props.theme.colors.body};
	text-align: left;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;
	line-height: 1.6;

	span {
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1980px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 600px) {
		text-align: center;
	}
`;

const pulseDot = keyframes`
	0%, 100% { opacity: 1; }
	50% { opacity: 0.3; }
`;

const StatusBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-family: 'JetBrains Mono', monospace;
	font-size: 12px;
	font-weight: 500;
	color: ${(props) => props.theme.colors.statusOnline || "#3fb950"};
	letter-spacing: 0.06em;
	margin-bottom: 8px;

	&::before {
		content: "●";
		font-size: 10px;
		animation: ${pulseDot} 2s infinite;
	}
`;

const RoleBadge = styled.div`
	display: inline-flex;
	align-items: center;
	font-family: 'JetBrains Mono', monospace;
	font-size: 11px;
	font-weight: 500;
	color: ${(props) => props.theme.colors.branding};
	letter-spacing: 0.1em;
	text-transform: uppercase;
	padding: 4px 10px;
	border: 1px solid ${(props) => props.theme.colors.branding};
	border-radius: 0;
	margin-bottom: 14px;
	opacity: 0.85;

	@media (max-width: 600px) {
		font-size: 10px;
	}
`;

const ContainerAnimation = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	@media (max-width: 930px) {
		order: -1;
	}
`;

const ButtonSaibaMais = styled.button`
	z-index: 1;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	min-width: 200px;
	height: 44px;
	margin-top: 15px;
	margin-bottom: 15px;
	transition: all 0.2s ease;
	font-size: 13px;
	font-family: 'JetBrains Mono', monospace;
	font-weight: 600;
	letter-spacing: 0.06em;
	border: 1px solid ${(props) => props.theme.colors.branding};
	border-radius: 0;
	color: ${(props) => props.theme.colors.branding};
	background-color: transparent;
	padding: 0 20px;
	text-transform: uppercase;

	&::before {
		content: "[";
		opacity: 0.6;
	}

	&::after {
		content: "]";
		opacity: 0.6;
	}

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.branding};
		color: ${(props) => props.theme.colors.background};
	}

	@media (max-width: 601px) {
		width: 70%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const SectionHomePage = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 100vh;
`;

export default function HomePage() {
	const theme = useTheme();
	const { language } = useContext(SettingsContext);
	const typedRef = useRef(null);

	useEffect(() => {
		const typed = new Typed(typedRef.current, {
			strings: ["Dylane Bengono"],
			typeSpeed: 80,
			loop: true,
		});
		return () => { typed.destroy(); };
	}, []);

	return (
		<SectionHomePage id="section-home">
			<FloatNavigationBar />
			<ProgressBar color={theme.colors.branding} height={5} />
			<Head
				title="bengo237.sh — Security Portfolio"
				metaDescription="Ingénieur en Cybersécurité & Investigation Numérique. RSSI · Pentester · CTF Player. Je protège les systèmes le jour, je les teste la nuit."
				keywords="Dylane Bengono, Cybersécurité, Pentesting, RSSI, CTF, OSINT, Forensique, DevSecOps, SOC, Wazuh, ISO 27001"
			/>
			<LandingPageContainer>

				<TitleLandingContainer>
					<StatusBadge>ONLINE · AVAILABLE</StatusBadge>
					<RoleBadge>[ Cyber Resilience · Security Operations (SIEM/SOC) ]</RoleBadge>

					<TerminalBlock>
						<TerminalPrompt>whoami</TerminalPrompt>
						<TerminalOutput>Dylane Bengono</TerminalOutput>
						<TerminalPrompt>cat role.txt</TerminalPrompt>
						<TerminalOutput>Information Security Lead | Governance, Risk & Compliance (GRC) </TerminalOutput>
						<TerminalPrompt>status --check</TerminalPrompt>
						<TerminalOnline>● ONLINE · AVAILABLE</TerminalOnline>
					</TerminalBlock>

					<SubTitleLanding>{language.landingPage.apresentationText}</SubTitleLanding>

					<GlitchWrapper>
						<GlitchBase>
							<span ref={typedRef} className="type-string" />
						</GlitchBase>
						<GlitchLayer
							className="glitch-layer-1"
							style={{ color: "#ff003c", left: "2px" }}
							aria-hidden="true"
						>
							Dylane Bengono
						</GlitchLayer>
						<GlitchLayer
							className="glitch-layer-2"
							style={{ color: "#00ffe7", left: "-2px" }}
							aria-hidden="true"
						>
							Dylane Bengono
						</GlitchLayer>
					</GlitchWrapper>

					<SubTitleLanding>{language.landingPage.resumeText}</SubTitleLanding>
					<a href="#section-a-propos" onClick={scrollToSection}>
						<ButtonSaibaMais>→ {language.landingPage.buttonText}</ButtonSaibaMais>
					</a>
					<SocialNetworkRowStack />
				</TitleLandingContainer>

				<ContainerAnimation>
					<LandingAnimation />
				</ContainerAnimation>
			</LandingPageContainer>
			<ScrollDownAnimation />
		</SectionHomePage>
	);
}
