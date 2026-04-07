import React, { useContext, useState } from "react";

//Third part librarys
import Link from "next/link";
import styled, { keyframes } from "styled-components";

//Custom components
import SwitchThemeButton from "@/components/SwitchThemeButton";
import LanguageSwitchButton from "@/components/LanguageSwitchButton";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	background-color: ${(props) => props.theme.colors.backgroundPage};
	padding-top: 64px;
	padding-bottom: 24px;
`;

const ContainerPage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 64px;
	position: fixed;
	top: 0;
	z-index: 100;
	backdrop-filter: saturate(180%) blur(30px);
	-webkit-backdrop-filter: saturate(180%) blur(30px);
	background-color: ${(props) =>
		props.theme.name === "dark"
			? "rgba(10, 12, 16, 0.92)"
			: "rgba(240, 242, 245, 0.92)"};
	border-bottom: 1px solid ${(props) => props.theme.colors.branding}44;
	padding: 0 32px;

	@media (max-width: 600px) {
		padding: 0 16px;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;

	&:hover {
		opacity: 0.85;
	}
`;

const LogoDot = styled.span`
	color: ${(props) => props.theme.colors.branding};
	font-size: 10px;
`;

const cursorBlink = keyframes`
	0%, 100% { opacity: 1; }
	50% { opacity: 0; }
`;

const LogoText = styled.h3`
	color: ${(props) => props.theme.colors.title};
	font-weight: 600;
	font-size: 15px;
	font-family: 'JetBrains Mono', monospace;
	letter-spacing: 0.04em;
	display: flex;
	align-items: center;
	gap: 0;

	@media (max-width: 900px) {
		font-size: 13px;
	}
`;

const LogoCursor = styled.span`
	color: ${(props) => props.theme.colors.branding};
	font-weight: 300;
	animation: ${cursorBlink} 1.2s step-end infinite;
	margin-left: 1px;
`;

const NavbarOptionContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;

	@media (max-width: 600px) {
		display: none;
	}
`;

const SwitchMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: 601px) {
		display: none;
	}
`;

const NavPrefix = styled.span`
	color: ${(props) => props.theme.colors.branding};
	font-size: 10px;
	opacity: 0.7;
	margin-right: 2px;
	font-family: 'JetBrains Mono', monospace;
`;

const NavbarOption = styled.h4`
	color: ${(props) => props.theme.colors.inactiveTitle};
	font-weight: 500;
	font-size: 11px;
	font-family: 'JetBrains Mono', monospace;
	letter-spacing: 0.06em;
	margin: 0 2px;
	text-decoration: none;
	text-transform: uppercase;
	transition: all 0.2s ease;
	position: relative;
	padding: 6px 10px;
	border: 1px solid transparent;
	border-radius: 2px;
	display: flex;
	align-items: center;

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.title};
		border-color: ${(props) => props.theme.colors.branding}66;
		background-color: ${(props) => props.theme.colors.branding}11;
	}

	@media (max-width: 1200px) {
		font-size: 10px;
		padding: 5px 8px;
	}

	@media (max-width: 900px) {
		font-size: 9px;
		padding: 4px 6px;
	}
`;

const NavControlsGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-left: 12px;
	padding-left: 12px;
	border-left: 1px solid ${(props) => props.theme.colors.branding}33;
`;

const fadeInDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-16px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const FadeInDown = styled.div`
	animation: ${fadeInDown} ${(props) => props.$duration || 200}ms ease ${(props) => props.$delay || 0}ms both;
	display: flex;
	align-items: center;
`;

const SideBarTheme = styled.aside`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60px;
	height: 100vh;
	position: fixed;
	left: 0;

	@media (max-width: 600px) {
		display: none;
	}
`;

// Status Bar (bottom, VS Code style)
const StatusBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 24px;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 100;
	background-color: ${(props) => props.theme.colors.branding};
	padding: 0 16px;
	gap: 16px;
	overflow: hidden;
`;

const StatusBarItem = styled.span`
	font-family: 'JetBrains Mono', monospace;
	font-size: 11px;
	font-weight: 500;
	color: ${(props) =>
		props.theme.name === "dark" ? "rgba(10, 12, 16, 0.92)" : "rgba(255,255,255,0.95)"};
	letter-spacing: 0.04em;
	white-space: nowrap;
	display: flex;
	align-items: center;
	gap: 4px;

	&::before {
		content: attr(data-sep);
		opacity: 0.5;
		margin-right: 4px;
	}
`;

const StatusBarDot = styled.span`
	font-size: 9px;
`;

export default function LayoutTemplate({ children }) {
	const { language } = useContext(SettingsContext);

	return (
		<>
			<HeaderContainer>
				<FadeInDown $delay={100} $duration={200}>
					<Link href="#section-home" passHref>
						<LogoContainer>
							<LogoDot>●</LogoDot>
							<LogoText>
								bengo237<LogoCursor>_</LogoCursor>
							</LogoText>
						</LogoContainer>
					</Link>
				</FadeInDown>

				<NavbarOptionContainer>
					<FadeInDown $delay={100} $duration={200}>
						<Link href="#section-home" passHref>
							<NavbarOption>
								<NavPrefix>[01]</NavPrefix>{language.navbarMenu.labelHome}
							</NavbarOption>
						</Link>
					</FadeInDown>

					<FadeInDown $delay={200} $duration={200}>
						<Link href="#section-services" passHref>
							<NavbarOption>
								<NavPrefix>[02]</NavPrefix>{language.navbarMenu.labelAboutMe}
							</NavbarOption>
						</Link>
					</FadeInDown>

					<FadeInDown $delay={300} $duration={200}>
						<Link href="#section-a-propos" passHref>
							<NavbarOption>
								<NavPrefix>[03]</NavPrefix>{language.navbarMenu.labelPortifolio}
							</NavbarOption>
						</Link>
					</FadeInDown>

					<FadeInDown $delay={400} $duration={200}>
						<Link href="#section-experience" passHref>
							<NavbarOption>
								<NavPrefix>[04]</NavPrefix>{language.navbarMenu.labelExperience}
							</NavbarOption>
						</Link>
					</FadeInDown>

					<FadeInDown $delay={500} $duration={200}>
						<NavControlsGroup>
							<LanguageSwitchButton />
							<SwitchThemeButton />
						</NavControlsGroup>
					</FadeInDown>
				</NavbarOptionContainer>

				<SwitchMenuContainer>
					<LanguageSwitchButton />
					<SwitchThemeButton />
				</SwitchMenuContainer>
			</HeaderContainer>

			<Main>
				<ContainerPage>{children}</ContainerPage>
			</Main>

			<StatusBar>
				<StatusBarItem>
					<StatusBarDot>⬡</StatusBarDot>
					root@soc-dashboard ~
				</StatusBarItem>
				<StatusBarItem data-sep="|">
					<StatusBarDot>●</StatusBarDot>
					SECURE
				</StatusBarItem>
				<StatusBarItem data-sep="|">RSSI@BVMAC</StatusBarItem>
				<StatusBarItem data-sep="|">Security Engineer@adorsys</StatusBarItem>
				<StatusBarItem data-sep="|">2024</StatusBarItem>
			</StatusBar>
		</>
	);
}
