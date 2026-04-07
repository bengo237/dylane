import React, { useContext } from "react";
import styled from "styled-components";

import { WorkTimeline, EducationTimeline, CertificationsTimeline, AwardsTimeline } from "@/components/TimelineExperienciaFormacao";
import { SettingsContext } from "@/context/SettingsContext";
import { TitleSection, ContainerTitleSection } from "@/styles/ui";

import { Work } from "@styled-icons/material-rounded/Work";
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { TrophyFill } from "@styled-icons/bootstrap/TrophyFill";

const SectionExperiencia = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
`;

const SubSection = styled.div`
	width: 100%;
	padding: 40px 0 20px;
`;

export default function ExperiencePage() {
	const { language } = useContext(SettingsContext);
	const L = language.experiencePage.timeline;

	return (
		<SectionExperiencia id="section-experience">

			{/* ── Professional Experience ── */}
			<SubSection>
				<ContainerTitleSection>
					<Work />
					<TitleSection>{L.sectionWork}</TitleSection>
				</ContainerTitleSection>
				<WorkTimeline />
			</SubSection>

			{/* ── Academic Education ── */}
			<SubSection>
				<ContainerTitleSection>
					<School />
					<TitleSection>{L.sectionEducation}</TitleSection>
				</ContainerTitleSection>
				<EducationTimeline />
			</SubSection>

			{/* ── Certifications ── */}
			<SubSection>
				<ContainerTitleSection>
					<LearningApp />
					<TitleSection>{L.sectionCertifications}</TitleSection>
				</ContainerTitleSection>
				<CertificationsTimeline />
			</SubSection>

			{/* ── Awards & Recognition ── */}
			<SubSection>
				<ContainerTitleSection>
					<TrophyFill />
					<TitleSection>{L.sectionAwards}</TitleSection>
				</ContainerTitleSection>
				<AwardsTimeline />
			</SubSection>

		</SectionExperiencia>
	);
}
