/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primaryBg : "#F9D82D",
      secondaryBg: "5033A1", 
      borderColour : '#1C2331',
      btnpurple: '#5033A1'

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

