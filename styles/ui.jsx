import styled from "styled-components";

export const TitleH1 = styled.h1`
	color: ${(props) => props.theme.colors.title};

	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

export const TitleH2 = styled.h2`
	color: ${(props) => props.theme.colors.title};

	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

export const TitleH3 = styled.h3`
	z-index: 2;
	color: ${(props) => props.theme.colors.title};
	font-size: ${(props) => props.theme.fontSizes.md};

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

export const BodyText = styled.p`
	color: ${(props) => props.theme.colors.body};
	font-size: ${(props) => props.theme.fontSizes.md};

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

// Terminal dots for section title bar
const TerminalDots = () => null; // declared below via CSS pseudo-elements

export const TitleSection = styled.h2`
	font-weight: 600;
	color: ${(props) => props.theme.colors.title};
	font-size: 15px;
	font-family: 'JetBrains Mono', monospace;
	letter-spacing: 0.06em;
	text-transform: uppercase;

	&::before {
		content: "// ";
		color: ${(props) => props.theme.colors.branding};
		font-weight: 400;
	}

	@media (max-width: 900px) {
		font-size: 13px;
	}
`;

export const ContainerTitleSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 12px;
	margin-bottom: 30px;
	width: 100%;
	padding: 8px 16px;
	background-color: ${(props) =>
		props.theme.colors.backgroundSecondary || props.theme.colors.panel};
	border: 1px solid ${(props) =>
		props.theme.colors.border || props.theme.colors.backgroundSecondary};
	border-left: 3px solid ${(props) => props.theme.colors.branding};
	border-radius: 0;

	/* Terminal dots */
	&::before {
		content: "● ● ●";
		font-size: 9px;
		letter-spacing: 4px;
		color: ${(props) => props.theme.colors.branding};
		opacity: 0.5;
		white-space: nowrap;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		margin-top: 40px;
		padding: 6px 12px;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 20px;
		height: 20px;
		flex-shrink: 0;

		@media (max-width: 1400px) {
			width: 18px;
			height: 18px;
		}

		@media (max-width: 900px) {
			width: 16px;
			height: 16px;
		}
	}
`;
