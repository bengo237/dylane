/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	turbopack: {},
	staticPageGenerationTimeout: 6000
};

module.exports = nextConfig;
