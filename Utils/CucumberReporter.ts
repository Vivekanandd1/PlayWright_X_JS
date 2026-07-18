import reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as path from "path";

const outputDir = path.resolve("reports/cucumber-html");
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

reporter.generate({
    theme: "bootstrap",
    jsonFile: "reports/json/cucumber-report.json",
    output: "reports/html/cucumber-report.html",
    reportSuiteAsScenarios: true,
    launchReport: false,

    metadata: {
        "Application": "E-Com",
        "Environment": "QA",
        "Browser": "Chrome",
        "Platform": process.platform
    }
});

console.log(`Cucumber Report Generated: file://${path.resolve("reports/html/cucumber-report.html")}`);