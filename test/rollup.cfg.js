import svgs from '../index.js';
export default ({
	input: 'virtual-module', // resolved by our plugin
	plugins: [svgs({
        rules: {
            'shorten-id': false,
        },
    })],
	input: './test/entry.js',
	output: {
		file: './test/bundle.js',
		format: 'es'
	}
});
