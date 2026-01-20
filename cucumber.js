module.exports = {
  default: {
    require: [
      "features/step_definitions/**/*.ts",
      "support/**/*.ts"
    ],
    format: ["progress", "json:reports/report.json"],
    requireModule: ["ts-node/register"],
    publishQuiet: true
  }
};