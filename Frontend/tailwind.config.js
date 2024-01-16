/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'Teal': '#14b8a6',
      'teal-700': '#0f766e',
      'indigo-500':'#6366f1',
      'sky-500': '#0ea5e9',
      'sky-100':'#e0f2fe',
      'sky-200':'#bae6fd',
      'emeral-500': '#10b981',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      textShadow: {
        sm: '0 1px 2px #000',
        DEFAULT: '0 2px 4px #000',
        lg: '0 8px 16px #000',
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      
    ],

}
}
 