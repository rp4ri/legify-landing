/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";

module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/@tailus/themer-**/dist/**/*.{js,ts}"
    ],
    plugins: [
        themer({
            palette: {
                extend: "oz",
            },
            appearance: "light",
            radius: "smoothest",
            background: "light",
            border: "light",
            padding: "large",
            components:{
                card: {
                    rounded : "3xl",
                    bg:"100",
                    padding : "8",
                    shadow : {
                        size : "md",
                        opacity : 8
                    },
                    dark : {
                        bg : "100",
                    }
                },
                ui:{
                    borderColor : "200",
                    dark : {
                        borderColor : "200",
                    }
                }
            }
        })
    ],
};
