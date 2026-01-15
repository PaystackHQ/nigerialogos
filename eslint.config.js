import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
	{
		ignores: ['node_modules/**', 'templates/**', 'gulpfile.js', 'css/**', 'eslint.config.js'],
	},
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'script',
			globals: {
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				console: 'readonly',
			},
		},
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': ['error'],
			'no-use-before-define': ['error', { functions: false, classes: false }],
			'no-param-reassign': ['warn'],
			'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
			'max-len': [
				'error',
				{
					code: 150,
					ignoreTemplateLiterals: true,
					ignoreStrings: true,
				},
			],
			'no-shadow': ['error'],
			'no-plusplus': ['off'],
			'no-mixed-operators': ['error'],
		},
	},
	eslintConfigPrettier,
];
