import svgs from 'svg-slim';

export default function svgSlim(config) {
	return {
		name: 'svg-slim', // this name will show up in warnings and errors
		transform: (code, id) => {
			if (!id.endsWith('.svg')) return null;
			return svgs(code, config).then(res => ({
				code: `export default \`${res}\``,
				map: null,
			}));
		},
	};
}
