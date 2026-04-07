import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";

//Lista de temas
import { darkTheme, lightTheme } from "@/styles/Theme";

//Pacotes com textos de linguagens
import frfrJson from "@/config/localization/frfr.json";
import enukJson from "@/config/localization/enuk.json";

export const SettingsContext = createContext({});

const brandingColors = {
	electricBlue: "#0096c7",
	green:        "#3fb950",
	orange:       "#fa8c05",
	darkYellow:   "#FCD434",
	purple:       "#8b5cf6",
	red:          "#f85149",
};

const baseThemes = { dark: darkTheme, light: lightTheme };
const DEFAULT_BRANDING = brandingColors.electricBlue;

export default function SettingsProvider({ children }) {
	const [baseThemeName, setBaseThemeName] = useState("dark");
	const [branding, setBranding] = useState(DEFAULT_BRANDING);
	const [changeLanguage, setLanguage] = useState(true);

	const theme = { ...baseThemes[baseThemeName], colors: { ...baseThemes[baseThemeName].colors, branding } };

	function changeTheme(id) {
		if (baseThemes[id]) {
			setBaseThemeName(id);
		} else if (brandingColors[id]) {
			setBranding(brandingColors[id]);
		}
	}

	function changeLanguageLocalization() {
		setLanguage(!changeLanguage);
	}

	var language = changeLanguage ? enukJson : frfrJson;

	return (
		<SettingsContext.Provider value={{ changeTheme, changeLanguageLocalization, language }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
