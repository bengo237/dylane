import styled from "styled-components";

import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/bootstrap/Github";
import { LogoWhatsapp } from "@styled-icons/ionicons-solid/LogoWhatsapp";

const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	@media (max-width: 600px) {
		width: 100%;
		//justify-content: space-between;
		margin-bottom: 20px;
	}
`;

const ButtonSocialMediaIcon = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
	width: 32px;
	height: 32px;
	transition: all 0.3s ease;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}

	&:active {
		opacity: 0.5;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 24px;
		height: 24px;
		transition: all 0.3s ease;

		&:hover {
			color: ${(props) => props.theme.colors.branding};
		}
	}

	@media (max-width: 600px) {
		margin-left: 3px;
		margin-right: 3px;
	}

	/* :hover {
		transform: translateY(-7px);
	} */
`;

export default function SocialNetworkRowStack() {
	return (
		<SocialMediaContainer>

			<ButtonSocialMediaIcon href="https://github.com/bengo237" target="_blank" rel="noopener noreferrer">
				<Github />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="mailto:chaneldylanebengono@gmail.com">
				<MailSend />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://wa.me/message/P4C3X3IRXVG7C1" target="_blank" rel="noopener noreferrer">
				<LogoWhatsapp />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://www.linkedin.com/in/chanel-dylane-b-91b850194" target="_blank" rel="noopener noreferrer" data-splitbee-event="linkedin-access">
				<LinkedinSquare />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://x.com/chaneldylaneben" target="_blank" rel="noopener noreferrer">
				<Twitter />
			</ButtonSocialMediaIcon>

		</SocialMediaContainer>
	);
}
