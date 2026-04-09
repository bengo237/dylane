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
	work:      "#0096c7",
	education: "#f0883e",
	cert:      "#3fb950",
	award:     "#e3b341",
};

const WorkIcon   = styled(Work)`width:40px;height:40px;color:${C.work};`;
const SchoolIcon = styled(School)`width:40px;height:40px;color:${C.education};`;
const CertIcon   = styled(LearningApp)`width:40px;height:40px;color:${C.cert};`;
const TrophyIcon = styled(TrophyFill)`width:36px;height:36px;color:${C.award};`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 4px;
`;

const CategoryPill = styled.span`
	display: inline-block;
	font-family: 'JetBrains Mono', monospace;
	font-size: 10px;
	font-weight: 600;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	padding: 2px 10px;
	border-radius: 2px;
	margin-bottom: 6px;
	background-color: ${(props) => props.$color}22;
	color: ${(props) => props.$color};
	border: 1px solid ${(props) => props.$color}55;
`;

const YearBadge = styled.h3`
	font-family: 'JetBrains Mono', monospace;
	font-size: 13px;
	font-weight: 700;
	color: ${(props) => props.$color};
	padding: 2px 10px;
	border-radius: 3px;
	border: 1px solid ${(props) => props.$color};
	margin-bottom: 6px;
	display: inline-block;
	letter-spacing: 0.06em;
`;

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

// ── Shared hook for styles ───────────────────────────────────────────
function useTimelineStyles(color) {
	const theme = useTheme();
	return {
		card: {
			backgroundColor: theme.colors.panel || theme.colors.backgroundSecondary,
			borderBottom: `4px solid ${color}`,
			borderLeft: `3px solid ${color}33`,
			boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
		},
		icon: {
			background: `${color}18`,
			border: `2px solid ${color}`,
			boxShadow: `0 0 0 2px ${color}33`,
		},
		arrow: { borderRight: `7px solid ${color}33` },
		line: theme.colors.border || theme.colors.backgroundSecondary,
	};
}

// ════════════════════════════════════════════════════════════════════
// SECTION 1 — PROFESSIONAL EXPERIENCE
// ════════════════════════════════════════════════════════════════════
export function WorkTimeline() {
	const { language } = useContext(SettingsContext);
	const s = useTimelineStyles(C.work);
	const L = language.experiencePage.timeline;

	return (
		<VerticalTimeline lineColor={s.line}>
			<VerticalTimelineElement contentStyle={s.card} iconStyle={s.icon} icon={<WorkIcon />} contentArrowStyle={s.arrow}>
				<TimelineContent>
					<CategoryPill $color={C.work}>● {L.labelPosition}</CategoryPill>
					<YearBadge $color={C.work}>2024 – {L.labelPresent}</YearBadge>
					<EntryTitle>{L.labelCompany}: <span>Bourse des Valeurs Mobilières de l'Afrique Centrale | BVMAC</span></EntryTitle>
					<BoldText>{L.labelPosition}: <span>RSSI – Responsable Sécurité des Systèmes d'Information</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement contentStyle={s.card} iconStyle={s.icon} icon={<WorkIcon />} contentArrowStyle={s.arrow}>
				<TimelineContent>
					<CategoryPill $color={C.work}>● {L.labelPosition}</CategoryPill>
					<YearBadge $color={C.work}>2023 – {L.labelPresent}</YearBadge>
					<EntryTitle>{L.labelCompany}: <span>adorsys GmbH & Co. KG</span></EntryTitle>
					<BoldText>{L.labelPosition}: <span>Security Engineer</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement contentStyle={s.card} iconStyle={s.icon} icon={<WorkIcon />} contentArrowStyle={s.arrow}>
				<TimelineContent>
					<CategoryPill $color={C.work}>● {L.labelPosition}</CategoryPill>
					<YearBadge $color={C.work}>2023</YearBadge>
					<EntryTitle>{L.labelCompany}: <span>Port Autonome de Kribi, PAK</span></EntryTitle>
					<BoldText>{L.labelPosition}: <span>Cybersecurity Engineer Intern</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement contentStyle={s.card} iconStyle={s.icon} icon={<WorkIcon />} contentArrowStyle={s.arrow}>
				<TimelineContent>
					<CategoryPill $color={C.work}>● {L.labelPosition}</CategoryPill>
					<YearBadge $color={C.work}>2022</YearBadge>
					<EntryTitle>{L.labelCompany}: <span>Délégation Générale à la Sûreté Nationale, DGSN</span></EntryTitle>
					<BoldText>{L.labelPosition}: <span>Pre-Engineer Network Security Intern</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
}

// ════════════════════════════════════════════════════════════════════
// SECTION 2 — ACADEMIC EDUCATION
// ════════════════════════════════════════════════════════════════════
export function EducationTimeline() {
	const { language } = useContext(SettingsContext);
	const s = useTimelineStyles(C.education);
	const L = language.experiencePage.timeline;

	return (
		<VerticalTimeline lineColor={s.line}>
			<VerticalTimelineElement contentStyle={s.card} iconStyle={s.icon} icon={<SchoolIcon />} contentArrowStyle={s.arrow}>
				<TimelineContent>
					<CategoryPill $color={C.education}>◈ {L.labelMasterDegree}</CategoryPill>
					<YearBadge $color={C.education}>2023</YearBadge>
					<EntryTitle>{L.labelInstitution}: <span>École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)</span></EntryTitle>
					<BoldText>{L.labelCategory}: <span>{L.labelMasterDegree} – {L.labelUniversity}</span></BoldText>
					<BoldText>{L.labelTitle}: <span>{L.labelDegreeTitle}</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
}

// ════════════════════════════════════════════════════════════════════
// SECTION 3 — CERTIFICATIONS
// ════════════════════════════════════════════════════════════════════
export function CertificationsTimeline() {
	const { language } = useContext(SettingsContext);
	const s = useTimelineStyles(C.cert);
	const L = language.experiencePage.timeline;

	const certs = [
		{ year: "2026", title: "CASA: Certified API Security Analyst", institution: "APIsec University" },
		{ year: "2024", title: "ISO/IEC 27001 Associate", institution: null },
		{ year: "2024", title: "CCNP – Cisco Certified Network Professional", institution: "Cisco" },
		{ year: "2024", title: "CCT: Certified Cybersecurity Technician", institution: "EC-COUNCIL" },
		{ year: "2023", title: "CPTA: Certified Purple Team Analyst V2", institution: "CyberWarfare Lab" },
		{ year: "2023", title: "Cisco Ethical Hacker", institution: "Cisco Netacad" },
		{ year: "2022", title: "NSE4: Network Security Professional", institution: "Fortinet" },
		{ year: "2022", title: "CSCU: Certified Secure Computer User V2", institution: "EC-COUNCIL" },
	];

	return (
		<VerticalTimeline lineColor={s.line}>
			{certs.map((cert, i) => (
				<VerticalTimelineElement key={i} contentStyle={s.card} iconStyle={s.icon} icon={<CertIcon />} contentArrowStyle={s.arrow}>
					<TimelineContent>
						<CategoryPill $color={C.cert}>✓ {L.labelProfessionalCourse}</CategoryPill>
						<YearBadge $color={C.cert}>{cert.year}</YearBadge>
						<EntryTitle>{cert.title}</EntryTitle>
						{cert.institution && <BoldText>{L.labelInstitution}: <span>{cert.institution}</span></BoldText>}
					</TimelineContent>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
}

// ════════════════════════════════════════════════════════════════════
// SECTION 4 — AWARDS & RECOGNITION
// ════════════════════════════════════════════════════════════════════
export function AwardsTimeline() {
	const { language } = useContext(SettingsContext);
	const s = useTimelineStyles(C.award);
	const L = language.experiencePage.timeline;

	return (
		<VerticalTimeline lineColor={s.line}>
			<VerticalTimelineElement contentStyle={s.card} iconStyle={s.icon} icon={<TrophyIcon />} contentArrowStyle={s.arrow}>
				<TimelineContent>
					<CategoryPill $color={C.award}>★ {L.labelAward}</CategoryPill>
					<YearBadge $color={C.award}>2023</YearBadge>
					<EntryTitle>Lauréat – Programme d'Excellence o'100 THE OKWELEANS 3e Édition</EntryTitle>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement contentStyle={s.card} iconStyle={s.icon} icon={<TrophyIcon />} contentArrowStyle={s.arrow}>
				<TimelineContent>
					<CategoryPill $color={C.award}>★ {L.labelAward}</CategoryPill>
					<YearBadge $color={C.award}>2022</YearBadge>
					<EntryTitle>Hall of Fame – Cyber Challenge</EntryTitle>
					<BoldText>{L.labelInstitution}: <span>EC-COUNCIL</span></BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement contentStyle={s.card} iconStyle={s.icon} icon={<TrophyIcon />} contentArrowStyle={s.arrow}>
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
