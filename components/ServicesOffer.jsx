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

// Terminal window dots
const WindowDots = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
`;

const Dot = styled.span`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${(props) => props.$color};
	display: inline-block;
	opacity: 0.85;
`;

const CardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: calc(100% + 40px);
	margin-left: -20px;
	margin-top: -24px;
	margin-bottom: 16px;
	padding: 8px 14px;
	background-color: ${(props) =>
		props.theme.name === "dark"
			? "rgba(0,0,0,0.3)"
			: "rgba(0,0,0,0.07)"};
	border-bottom: 1px solid ${(props) =>
		props.theme.colors.border || props.theme.colors.backgroundSecondary};
`;

const CardHeaderTitle = styled.span`
	font-family: 'JetBrains Mono', monospace;
	font-size: 11px;
	font-weight: 600;
	color: ${(props) => props.theme.colors.branding};
	letter-spacing: 0.1em;
	text-transform: uppercase;
`;

const CardService = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	width: 275px;
	padding: 24px 20px 20px 20px;
	transition: all 0.3s ease;
	background-color: ${(props) => props.theme.colors.panel || props.theme.colors.backgroundSecondary};
	border: 1px solid ${(props) => props.theme.colors.border || props.theme.colors.backgroundSecondary};
	border-top: 2px solid ${(props) => props.theme.colors.branding};
	border-radius: 2px;
	overflow: hidden;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
		border-top-color: ${(props) => props.theme.colors.branding};
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 28px;
		height: 28px;
		margin-bottom: 12px;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const TerminalBody = styled.div`
	font-family: 'JetBrains Mono', monospace;
	font-size: 12px;
	width: 100%;
`;

const TerminalPromptLine = styled.div`
	color: ${(props) => props.theme.colors.branding};
	margin-bottom: 2px;
	&::before {
		content: "$ ";
		font-weight: 700;
	}
`;

const TerminalOutputLine = styled.div`
	color: ${(props) => props.theme.colors.body};
	line-height: 1.6;
	padding-left: 4px;
	font-size: 13px;
	font-family: 'Inter', sans-serif;

	&::before {
		content: "> ";
		font-family: 'JetBrains Mono', monospace;
		color: ${(props) => props.theme.colors.inactiveTitle || props.theme.colors.body};
		opacity: 0.55;
		font-size: 12px;
	}

	@media (max-width: 900px) {
		font-size: 12px;
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

	const services = [
		{
			icon: <MagnifyingGlass />,
			key: "forensique",
			label: "FORENSICS",
			command: "cat domains.txt",
		},
		{
			icon: <ShieldKeyhole />,
			key: "devsecops",
			label: "DEVSECOPS",
			command: "cat domains.txt",
		},
		{
			icon: <Password />,
			key: "pentesting",
			label: "PENTEST",
			command: "cat domains.txt",
		},
		{
			icon: <CodeBlock />,
			key: "developpement",
			label: "DEV",
			command: "cat domains.txt",
		},
	];

	return (
		<SectionServices id="section-services">
			<ContainerGrid>
				{services.map((service, i) => (
					<ScrollAnimation
						key={service.key}
						animateIn="fadeIn"
						animateOnce
						delay={(i + 1) * 200}
					>
						<CardService>
							<CardHeader>
								<WindowDots>
									<Dot $color="#ff5f56" />
									<Dot $color="#ffbd2e" />
									<Dot $color="#27c93f" />
								</WindowDots>
								<CardHeaderTitle>[ {service.label} ]</CardHeaderTitle>
							</CardHeader>
							{service.icon}
							<TerminalBody>
								<TerminalPromptLine>{service.command}</TerminalPromptLine>
								<TerminalOutputLine>
									{language.servicesOffer.cards[service.key].contentText}
								</TerminalOutputLine>
							</TerminalBody>
						</CardService>
					</ScrollAnimation>
				))}
			</ContainerGrid>
		</SectionServices>
	);
}
