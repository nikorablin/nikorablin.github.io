module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
  },
  ignores: [(message) => /^chore\(release\): set `package.json` to \d.\d.\d \[skip ci\]/m.test(message)]
};
