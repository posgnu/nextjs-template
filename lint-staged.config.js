module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.ts?(x)': () => 'pnpm check-types',
  '**/*.{json,yaml,md}': ['prettier --write'],
};