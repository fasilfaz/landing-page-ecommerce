module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--global-bg-3)",
          foreground: "var(--global-text-1)"
        },
        // Secondary Colors
        secondary: {
          background: "var(--global-bg-4)",
          foreground: "var(--global-text-1)"
        },
        // Background Colors
        background: {
          main: "var(--global-bg-1)",
          secondary: "var(--global-bg-2)",
          accent: "var(--global-bg-3)",
          card: "var(--global-bg-4)"
        },
        // Text Colors
        text: {
          primary: "var(--global-text-1)"
        },
        // Component-specific colors
        button: {
          background: "var(--button-bg)",
          text: "var(--button-text)"
        },
        // Custom gradient colors to match the image
        gradient: {
          'blue-start': '#7dd3fc',    // Light blue
          'purple-mid': '#c084fc',    // Light purple
          'orange-end': '#fdba74',    // Light orange
          'yellow-end': '#fde047'     // Light yellow
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)'
      },
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)'
      },
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'base': 'var(--radius-base)',
        'lg': 'var(--radius-lg)'
      }
    }
  },
  plugins: []
};