require('core-js/proposals/reflect-metadata');
require('zone.js/dist/zone');
require('zone.js/dist/zone-testing');

const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);

const testContext = require.context('./src', true, /\.spec\.(ts|js)/);
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
const modules = requireAll(testContext);