const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const serve = require('rollup-plugin-serve');
import sass from "rollup-plugin-sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

module.exports = [
    {
        input: './src/index.ts',
        // output: [
        //     {
        //         dir: 'dist',
        //         format: 'esm',
        //         entryFileNames: 'richText.js',
        //         sourcemap: true, // 是否输出sourcemap
        //         plugins: [terser()],
        //     },
        // ],
        output: [
            {
                dir: 'public',
                format: 'esm',
                entryFileNames: 'richText.js',
                sourcemap: true, // 是否输出sourcemap
                // plugins: [terser()],
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            sass({
                output: "public/RichText.css",
                processor: (css) =>
                    postcss([autoprefixer])
                        .process(css)
                        .then((result) => result.css),
            }),
            typescript({ module: "ESNext" }),
            serve({
                open: true, // 自动打开浏览器
                contentBase: 'public', // 静态文件目录
                port: 8080, // 选择一个可用的端口
            }),
        ],
    }
]