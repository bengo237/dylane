import React, { useState, useContext } from "react";
import styled from "styled-components";

import { SettingsContext } from "@/context/SettingsContext";

const ThemeButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 2;

	@media (max-width: 601px) {
		flex-direction: row;
	}
`;

const ButtonTheme = styled.div`
	margin: 5px;
	width: 22px;
	height: 22px;
	border-radius: 50%;
	border: 3px solid ${(props) => (props.selected ? "#fff" : "transparent")};
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.3);
		cursor: pointer;
	}

	@media (max-width: 1200px) {
		width: 18px;
		height: 18px;
	}

	@media (max-width: 900px) {
		width: 16px;
		height: 16px;
	}
`;

const THEMES = [
	{ id: "electricBlue", color: "#0096c7" },
	{ id: "green",        color: "#3fb950" },
	{ id: "orange",       color: "#fa8c05" },
	{ id: "darkYellow",   color: "#FCD434" },
	{ id: "purple",       color: "#8b5cf6" },
	{ id: "red",          color: "#f85149" },
];

export default function ThemeButtons() {
	const { changeTheme } = useContext(SettingsContext);
	const [selectedTheme, setSelectedTheme] = useState("electricBlue");

	function handleSelectTheme(id) {
		setSelectedTheme(id);
		changeTheme(id);
	}

	return (
		<ThemeButtonsContainer>
			{THEMES.map(({ id, color }) => (
				<ButtonTheme
					key={id}
					id={id}
					selected={selectedTheme === id}
					style={{ background: color }}
					onClick={() => handleSelectTheme(id)}
				/>
			))}
		</ThemeButtonsContainer>
	);
}
