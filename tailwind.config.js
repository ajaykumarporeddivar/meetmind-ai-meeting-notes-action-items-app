/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'meetmind-brand': '#4F46E5', // Indigo 600 - Primary brand color
        'meetmind-accent': '#6366F1', // Indigo 500 - Secondary accent
        'status-success': '#10B981', // Emerald 500 - For synced items
        'status-pending': '#F59E0B', // Amber 500 - For pending items
        'status-failed': '#EF4444', // Red 500 - For failed items
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}