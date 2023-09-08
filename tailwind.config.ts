import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        head: 'var(--font-head)',
        body: 'var(--font-body)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'suit-lightest': 'hsl(208, 5.6%, 38.2%)',
      'suit-lighter': 'hsl(208, 8.5%, 30%)',
      'suit-light': 'hsl(208, 8.8%, 26%)',
      'suit': 'hsl(208, 9%, 21%)',
      'suit-dark': 'hsl(214, 9%, 15%)',
      'suit-darker': 'hsl(216, 11.6%, 8.4%)',
    }
  },
  plugins: [],
}
export default config
