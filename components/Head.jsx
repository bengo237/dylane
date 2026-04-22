import Head from "next/head";
import { useTheme } from "styled-components";

const SITE_URL = "https://bengo.tech";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function HeadTag(props) {
	const theme = useTheme();
	const title = props.title || "bengo237.sh — Security Portfolio";
	const description = props.metaDescription;

	return (
		<Head>
			<title>{title}</title>
			<meta name="theme-color" content={theme.colors.branding} />
			<meta name="msapplication-navbutton-color" content={theme.colors.branding} />
			<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.branding} />
			<meta name="description" content={description} />
			<meta name="keywords" content={props.keywords} />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={SITE_URL} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={OG_IMAGE} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:site_name" content="bengo237.sh" />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@bengo237" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={OG_IMAGE} />

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
		</Head>
	);
}



