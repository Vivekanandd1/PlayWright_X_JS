import { config } from 'dotenv';
import { loadConfiguration, runCucumber } from '@cucumber/cucumber/api';

config();

(async () => {
  const { runConfiguration } = await loadConfiguration({
    provided: {
      paths: ['feature/regression.feature'],
      require: ['steps/**/*.ts'],
      format: ['progress-bar', 'json:reports/json/cucumber-report.json', 'html:reports/html/cucumber-report.html'],
      tags: '@ui',
    },
  });

  const { success } = await runCucumber(runConfiguration);
  console.log(`Report generated at: file://${process.cwd()}/reports/html/cucumber-report.html`);
  process.exit(success ? 0 : 1);
})();

