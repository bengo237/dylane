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

// ── Category accent colors ──────────────────────────────────────────
const C = {
	work:      "#0096c7",   // electric blue  — expérience pro
	education: "#f0883e",   // amber          — formation académique
	cert:      "#3fb950",   // green          — certifications
	award:     "#e3b341",   // gold           — récompenses
};

// ── Icons ────────────────────────────────────────────────────────────
const iconStyle = (color) => ({
	width: 40, height: 40, color,
});

const WorkIcon      = styled(Work)`${iconStyle(C.work)}`;
const SchoolIcon    = styled(School)`${iconStyle(C.education)}`;
const CertIcon      = styled(LearningApp)`${iconStyle(C.cert)}`;
const TrophyIcon    = styled(TrophyFill)`width:36px;height:36px;color:${C.award};`;

// ── Card wrapper ─────────────────────────────────────────────────────
const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	gap: 4px;
`;

// ── Category label pill ───────────────────────────────────────────────
const CategoryPill = styled.span`
	display: inline-block;
	font-family: 'JetBrains Mono', monospace;
	font-size: 10px;
	font-weight: 600;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	padding: 2px 10px;
	border-radius: 2px;
	margin-bottom: 8px;
	background-color: ${(props) => props.$color}22;
	color: ${(props) => props.$color};
	border: 1px solid ${(props) => props.$color}55;
`;

// ── Year badge ────────────────────────────────────────────────────────
const YearBadge = styled.h3`
	font-family: 'JetBrains Mono', monospace;
	font-size: 13px;
	font-weight: 700;
	color: ${(props) => props.$color};
	padding: 2px 10px;
	border-radius: 3px;
	border: 1px solid ${(props) => props.$color};
	margin-bottom: 8px;
	display: inline-block;
	letter-spacing: 0.06em;
`;

// ── Bold label line ───────────────────────────────────────────────────
const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.subtitle};
	font-weight: 600;
	font-size: 13px;
	margin: 1px 0;
	line-height: 1.5;

	span {
		font-weight: 400;
		color: ${(props) => props.theme.colors.body};
	}
`;

// ── Title line (larger) ───────────────────────────────────────────────
const EntryTitle = styled.h4`
	color: ${(props) => props.theme.colors.title};
	font-weight: 700;
	font-size: 14px;
	margin: 2px 0 4px;
	line-height: 1.4;

	span {
		font-weight: 400;
		color: ${(props) => props.theme.colors.body};
	}
`;

export default function TimelinePortifolio() {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	// ── Per-category card & icon styles ──────────────────────────────
	const cardStyle = (color) => ({
		backgroundColor: theme.colors.panel || theme.colors.backgroundSecondary,
		borderBottom: `4px solid ${color}`,
		borderLeft: `3px solid ${color}33`,
		boxShadow: `0 2px 12px rgba(0,0,0,0.25)`,
	});

	const iconBg = (color) => ({
		background: `${color}18`,
		border: `2px solid ${color}`,
		boxShadow: `0 0 0 2px ${color}33`,
	});

	const arrowStyle = (color) => ({
		borderRight: `7px solid ${color}33`,
	});

	const L = language.experiencePage.timeline;

	return (
		<VerticalTimeline lineColor={theme.colors.border || theme.colors.backgroundSecondary}>

			{/* ════════════════ EXPÉRIENCE PROFESSIONNELLE ════════════════ */}

			<VerticalTimelineElement
				contentStyle={cardStyle(C.work)}
				iconStyle={iconBg(C.work)}
				icon={<WorkIcon />}
				contentArrowStyle={arrowStyle(C.work)}
			>
				<TimelineContent>
					<CategoryPill $color={C.work}>● {L.labelPosition}</CategoryPill>
					<YearBadge $color={C.work}>2024 – {L.labelPresent}</YearBadge>
					<EntryTitle>{L.labelCompany}: <span>Bourse des Valeurs Mobilières de l'Afrique Centrale | BVMAC</span></EntryTitle>
					<BoldText>{L.labelPosition}: <span>RSSI – Responsable Sécurité des Systèmes d'Information</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.work)}
				iconStyle={iconBg(C.work)}
				icon={<WorkIcon />}
				contentArrowStyle={arrowStyle(C.work)}
			>
				<TimelineContent>
					<CategoryPill $color={C.work}>● {L.labelPosition}</CategoryPill>
					<YearBadge $color={C.work}>2023 – {L.labelPresent}</YearBadge>
					<EntryTitle>{L.labelCompany}: <span>adorsys GmbH & Co. KG</span></EntryTitle>
					<BoldText>{L.labelPosition}: <span>Security Engineer</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.work)}
				iconStyle={iconBg(C.work)}
				icon={<WorkIcon />}
				contentArrowStyle={arrowStyle(C.work)}
			>
				<TimelineContent>
					<CategoryPill $color={C.work}>● {L.labelPosition}</CategoryPill>
					<YearBadge $color={C.work}>2023</YearBadge>
					<EntryTitle>{L.labelCompany}: <span>Port Autonome de Kribi, PAK</span></EntryTitle>
					<BoldText>{L.labelPosition}: <span>Cybersecurity Engineer Intern</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.work)}
				iconStyle={iconBg(C.work)}
				icon={<WorkIcon />}
				contentArrowStyle={arrowStyle(C.work)}
			>
				<TimelineContent>
					<CategoryPill $color={C.work}>● {L.labelPosition}</CategoryPill>
					<YearBadge $color={C.work}>2022</YearBadge>
					<EntryTitle>{L.labelCompany}: <span>Délégation Générale à la Sûreté Nationale, DGSN</span></EntryTitle>
					<BoldText>{L.labelPosition}: <span>Pre-Engineer Network Security Intern</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ════════════════ FORMATION ACADÉMIQUE ════════════════ */}

			<VerticalTimelineElement
				contentStyle={cardStyle(C.education)}
				iconStyle={iconBg(C.education)}
				icon={<SchoolIcon />}
				contentArrowStyle={arrowStyle(C.education)}
			>
				<TimelineContent>
					<CategoryPill $color={C.education}>◈ {L.labelMasterDegree}</CategoryPill>
					<YearBadge $color={C.education}>2023</YearBadge>
					<EntryTitle>{L.labelInstitution}: <span>École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)</span></EntryTitle>
					<BoldText>{L.labelCategory}: <span>{L.labelMasterDegree} – {L.labelUniversity}</span></BoldText>
					<BoldText>{L.labelTitle}: <span>{L.labelDegreeTitle}</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ════════════════ CERTIFICATIONS ════════════════ */}

			<VerticalTimelineElement
				contentStyle={cardStyle(C.cert)}
				iconStyle={iconBg(C.cert)}
				icon={<CertIcon />}
				contentArrowStyle={arrowStyle(C.cert)}
			>
				<TimelineContent>
					<CategoryPill $color={C.cert}>✓ {L.labelProfessionalCourse}</CategoryPill>
					<YearBadge $color={C.cert}>2024</YearBadge>
					<EntryTitle>ISO/IEC 27001 Associate</EntryTitle>
					<BoldText>{L.labelCategory}: <span>{L.labelProfessionalCourse}</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.cert)}
				iconStyle={iconBg(C.cert)}
				icon={<CertIcon />}
				contentArrowStyle={arrowStyle(C.cert)}
			>
				<TimelineContent>
					<CategoryPill $color={C.cert}>✓ {L.labelProfessionalCourse}</CategoryPill>
					<YearBadge $color={C.cert}>2024</YearBadge>
					<EntryTitle>CCNP – Cisco Certified Network Professional</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>Cisco</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.cert)}
				iconStyle={iconBg(C.cert)}
				icon={<CertIcon />}
				contentArrowStyle={arrowStyle(C.cert)}
			>
				<TimelineContent>
					<CategoryPill $color={C.cert}>✓ {L.labelProfessionalCourse}</CategoryPill>
					<YearBadge $color={C.cert}>2024</YearBadge>
					<EntryTitle>CCT: Certified Cybersecurity Technician</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>EC-COUNCIL</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.cert)}
				iconStyle={iconBg(C.cert)}
				icon={<CertIcon />}
				contentArrowStyle={arrowStyle(C.cert)}
			>
				<TimelineContent>
					<CategoryPill $color={C.cert}>✓ {L.labelProfessionalCourse}</CategoryPill>
					<YearBadge $color={C.cert}>2023</YearBadge>
					<EntryTitle>CPTA: Certified Purple Team Analyst V2</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>CyberWarfare Lab</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.cert)}
				iconStyle={iconBg(C.cert)}
				icon={<CertIcon />}
				contentArrowStyle={arrowStyle(C.cert)}
			>
				<TimelineContent>
					<CategoryPill $color={C.cert}>✓ {L.labelProfessionalCourse}</CategoryPill>
					<YearBadge $color={C.cert}>2023</YearBadge>
					<EntryTitle>Cisco Ethical Hacker</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>Cisco Netacad</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.cert)}
				iconStyle={iconBg(C.cert)}
				icon={<CertIcon />}
				contentArrowStyle={arrowStyle(C.cert)}
			>
				<TimelineContent>
					<CategoryPill $color={C.cert}>✓ {L.labelProfessionalCourse}</CategoryPill>
					<YearBadge $color={C.cert}>2022</YearBadge>
					<EntryTitle>NSE4: Network Security Professional</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>Fortinet</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.cert)}
				iconStyle={iconBg(C.cert)}
				icon={<CertIcon />}
				contentArrowStyle={arrowStyle(C.cert)}
			>
				<TimelineContent>
					<CategoryPill $color={C.cert}>✓ {L.labelProfessionalCourse}</CategoryPill>
					<YearBadge $color={C.cert}>2022</YearBadge>
					<EntryTitle>CSCU: Certified Secure Computer User V2</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>EC-COUNCIL</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* ════════════════ RÉCOMPENSES ════════════════ */}

			<VerticalTimelineElement
				contentStyle={cardStyle(C.award)}
				iconStyle={iconBg(C.award)}
				icon={<TrophyIcon />}
				contentArrowStyle={arrowStyle(C.award)}
			>
				<TimelineContent>
					<CategoryPill $color={C.award}>★ {L.labelAward}</CategoryPill>
					<YearBadge $color={C.award}>2023</YearBadge>
					<EntryTitle>Lauréat – Programme d'Excellence o'100 THE OKWELEANS 3e Édition</EntryTitle>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.award)}
				iconStyle={iconBg(C.award)}
				icon={<TrophyIcon />}
				contentArrowStyle={arrowStyle(C.award)}
			>
				<TimelineContent>
					<CategoryPill $color={C.award}>★ {L.labelAward}</CategoryPill>
					<YearBadge $color={C.award}>2022</YearBadge>
					<EntryTitle>Hall of Fame – Cyber Challenge</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>EC-COUNCIL</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				contentStyle={cardStyle(C.award)}
				iconStyle={iconBg(C.award)}
				icon={<TrophyIcon />}
				contentArrowStyle={arrowStyle(C.award)}
			>
				<TimelineContent>
					<CategoryPill $color={C.award}>★ {L.labelAward}</CategoryPill>
					<YearBadge $color={C.award}>2021</YearBadge>
					<EntryTitle>Lauréat – Olympiades des Experts en Cybersécurité</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>AEC-CTF</span></BoldText>
					<BoldText>{L.labelCategory}: <span>Capture The Flag</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

		</VerticalTimeline>
	);
}
