module.exports = {
  default: {
    require: [
      "src/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    format: [
      "progress",
      "json:reports/json/cucumber-report.json"
    ]
  }
};