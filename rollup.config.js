import svelte from 'rollup-plugin-svelte';
import replace from '@rollup/plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import typescript from "rollup-plugin-typescript2";
import tscompile from "typescript";

const dev = Boolean(process.env.ROLLUP_WATCH);

export default {
	input: "src/index.ts",
	output: {
        name: "app",
        format: "iife",
		sourcemap: true,
		dir: "public",
	},
    preserveEntrySignatures: false,
	plugins: [
		svelte({ compilerOptions: { dev } }),
        resolve({
            browser: true,
            dedupe: (importee) => importee === 'svelte' || importee.startsWith('svelte/'),
        }),
		commonjs(),
        replace({ "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production") }),
		typescript({ typescript: tscompile }),
		livereload('public'),
	],
	watch: {
		clearScreen: false
	}
};
