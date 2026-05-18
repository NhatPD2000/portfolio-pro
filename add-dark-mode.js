// Quick dark mode color mapping reference
// Run: node add-dark-mode.js to see what needs updating

const colorMap = {
  // Backgrounds
  '#F7F9FC': 'dark:bg-[#0D1B2E]',
  '#FFFFFF': 'dark:bg-[#1A2332]',
  'bg-white': 'dark:bg-[#1A2332]',
  '#EEF3FA': 'dark:bg-[#162844]',

  // Text
  '#0D1B2E': 'dark:text-[#E8EDF8]',
  'text-[#0D1B2E]': 'dark:text-[#E8EDF8]',
  '#4A5E7A': 'dark:text-[#B0BFDA]',
  'text-[#4A5E7A]': 'dark:text-[#B0BFDA]',
  '#8999BB': 'dark:text-[#6B7E9A]',
  'text-[#8999BB]': 'dark:text-[#6B7E9A]',
  '#2A3B55': 'dark:text-[#B0BFDA]',

  // Borders
  '#D8E2F0': 'dark:border-[#2A3B55]',
  'border-[#D8E2F0]': 'dark:border-[#2A3B55]',
  '#C8D5E8': 'dark:border-[#3A4870]',
  'border-[#C8D5E8]': 'dark:border-[#3A4870]',
};

console.log('Dark mode color mapping:');
console.log(JSON.stringify(colorMap, null, 2));
console.log('\nManually add dark: variants to components using these colors.');
