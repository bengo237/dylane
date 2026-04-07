import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { SettingsContext } from "@/context/SettingsContext";

import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";
import { TrophyFill } from "@styled-icons/bootstrap/TrophyFill";

const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TrophyIcon = styled(TrophyFill)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 36px;
	height: 36px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
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

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.title};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

const YearBadge = styled.h3`
	color: ${(props) => props.theme.colors.branding};
	padding: 0 10px;
	border-radius: 200px;
	border: 2px solid ${(props) => props.theme.colors.branding};
	margin-bottom: 10px;
	display: inline-block;
`;

export default function TimelinePortifolio() {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	const elementStyle = {
		borderBottom: `8px solid ${theme.colors.branding}`,
		boxShadow: "0px 0px 0px 0px #ccc",
		backgroundColor: theme.colors.backgroundSecondary,
	};
	const iconStyle = {
		background: theme.colors.branding,
		color: "#fff",
		boxShadow: `0 0 0 0px ${theme.colors.branding}`,
	};
	const arrowStyle = {
		borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
	};

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>

			{/* ── BVMAC – RSSI ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<WorkIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2024 – {language.experiencePage.timeline.labelPresent}</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelCompany}: <span>Bourse des Valeurs Mobilières de l'Afrique Centrale | BVMAC</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelPosition}: <span>RSSI – Responsable Sécurité des Systèmes d'Information</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── adorsys – Security Engineer ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<WorkIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2023 – {language.experiencePage.timeline.labelPresent}</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelCompany}: <span>adorsys GmbH & Co. KG</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelPosition}: <span>Security Engineer</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── PAK – Cybersecurity Engineer Intern ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<WorkIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2023</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelCompany}: <span>Port Autonome de Kribi, PAK</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelPosition}: <span>Cybersecurity Engineer Intern</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── DGSN – Network Security Intern ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<WorkIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2022</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelCompany}: <span>Délégation Générale à la Sûreté Nationale, DGSN</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelPosition}: <span>Pre-Engineer Network Security Intern</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── ENSPY – Master ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<SchoolIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2023</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelMasterDegree} – {language.experiencePage.timeline.labelUniversity}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>{language.experiencePage.timeline.labelDegreeTitle}</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── ISO/IEC 27001 Associate ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<LearningAppIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2024</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>ISO/IEC 27001 Associate</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── CCNP ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<LearningAppIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2024</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>Cisco</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>CCNP – Cisco Certified Network Professional</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── CCT ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<LearningAppIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2024</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>EC-COUNCIL</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>CCT: Certified Cybersecurity Technician</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── CPTA v2 ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<LearningAppIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2023</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>CyberWarfare Lab</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>CPTA: Certified Purple Team Analyst V2</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── Cisco Ethical Hacker ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<LearningAppIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2023</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>Cisco Netacad</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>Cisco Ethical Hacker</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── Fortinet NSE4 ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<LearningAppIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2022</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>Fortinet</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>NSE4: Network Security Professional</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── CSCU ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<LearningAppIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2022</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>EC-COUNCIL</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>CSCU: Certified Secure Computer User V2</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── Lauréat o'100 OKWELEANS ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<TrophyIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2023</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelAward}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>Lauréat – Programme d'Excellence o'100 THE OKWELEANS 3e Édition</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── Hall of Fame EC-COUNCIL ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<TrophyIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2022</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>EC-COUNCIL</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelAward}</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>Hall of Fame – Cyber Challenge</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ── AEC-CTF ── */}
			<VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={elementStyle} iconStyle={iconStyle} icon={<TrophyIcon />} contentArrowStyle={arrowStyle}>
				<TimelineContent>
					<YearBadge>2021</YearBadge>
					<BoldText>{language.experiencePage.timeline.labelInstitution}: <span>AEC-CTF</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelCategory}: <span>Capture The Flag</span></BoldText>
					<BoldText>{language.experiencePage.timeline.labelTitle}: <span>Lauréat – Olympiades des Experts en Cybersécurité</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

		</VerticalTimeline>
	);
}
