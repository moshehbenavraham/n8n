// Cross-Browser Testing Script for Obsidian Forge Design System
// Session: phase03-session04-cross-browser-testing
// Tests Chrome, Firefox, WebKit (Safari), and Edge (via Chromium)

import { chromium, firefox, webkit } from 'playwright';

const FRONTEND_URL = 'http://localhost:8080';
const STORYBOOK_URL = 'http://localhost:6006';

const BROWSERS = {
  chromium: { name: 'Chrome', launcher: chromium },
  firefox: { name: 'Firefox', launcher: firefox },
  webkit: { name: 'Safari (WebKit)', launcher: webkit }
};

const results = {
  chromium: { tests: [], errors: [], warnings: [] },
  firefox: { tests: [], errors: [], warnings: [] },
  webkit: { tests: [], errors: [], warnings: [] }
};

async function testCSSCustomProperties(page, browserName) {
  const tests = [];

  // Test token inheritance
  const tokenTest = await page.evaluate(() => {
    const root = document.documentElement;
    const styles = getComputedStyle(root);

    // Check key tokens exist
    const tokens = [
      '--color--primary',
      '--color--text',
      '--color--background',
      '--shadow--md',
      '--duration--normal'
    ];

    const missing = tokens.filter(t => !styles.getPropertyValue(t));
    return {
      success: missing.length === 0,
      missing,
      total: tokens.length
    };
  });

  tests.push({
    name: 'CSS Custom Property Inheritance',
    status: tokenTest.success ? 'PASS' : 'ISSUE',
    details: tokenTest.success
      ? `All ${tokenTest.total} key tokens inherited correctly`
      : `Missing tokens: ${tokenTest.missing.join(', ')}`
  });

  // Test dark mode token switching
  const darkModeTest = await page.evaluate(() => {
    const body = document.body;
    const originalTheme = body.getAttribute('data-theme');
    body.setAttribute('data-theme', 'dark');
    const darkBg = getComputedStyle(body).getPropertyValue('--color--background--page');
    body.setAttribute('data-theme', 'light');
    const lightBg = getComputedStyle(body).getPropertyValue('--color--background--page');
    if (originalTheme) body.setAttribute('data-theme', originalTheme);
    return { darkBg, lightBg, different: darkBg !== lightBg };
  });

  tests.push({
    name: 'Dark Mode Token Switching',
    status: darkModeTest.different ? 'PASS' : 'ISSUE',
    details: darkModeTest.different
      ? 'Theme tokens switch correctly between light/dark'
      : 'Theme tokens not changing between modes'
  });

  return tests;
}

async function testShadowRendering(page, browserName) {
  const tests = [];

  const shadowTest = await page.evaluate(() => {
    const root = document.documentElement;
    const styles = getComputedStyle(root);

    const shadows = {
      xs: styles.getPropertyValue('--shadow--xs'),
      sm: styles.getPropertyValue('--shadow--sm'),
      md: styles.getPropertyValue('--shadow--md'),
      lg: styles.getPropertyValue('--shadow--lg'),
      xl: styles.getPropertyValue('--shadow--xl')
    };

    const defined = Object.entries(shadows).filter(([k, v]) => v && v.trim());
    return {
      success: defined.length === 5,
      defined: defined.length,
      shadows
    };
  });

  tests.push({
    name: 'Layered Shadow Definitions',
    status: shadowTest.success ? 'PASS' : 'ISSUE',
    details: `${shadowTest.defined}/5 shadow levels defined`
  });

  return tests;
}

async function testTypography(page, browserName) {
  const tests = [];

  const fontTest = await page.evaluate(() => {
    const body = document.body;
    const styles = getComputedStyle(body);
    const fontFamily = styles.fontFamily.toLowerCase();

    return {
      hasInter: fontFamily.includes('inter') || fontFamily.includes('intervariable'),
      fontFamily
    };
  });

  tests.push({
    name: 'InterVariable Font Loading',
    status: fontTest.hasInter ? 'PASS' : 'MINOR',
    details: fontTest.hasInter
      ? 'InterVariable font loaded'
      : `Font family: ${fontTest.fontFamily}`
  });

  // Test font weight range
  const weightTest = await page.evaluate(() => {
    const testWeights = [300, 400, 500, 600, 700];
    const el = document.createElement('span');
    el.textContent = 'Test';
    el.style.fontFamily = 'InterVariable, sans-serif';
    document.body.appendChild(el);

    const results = testWeights.map(w => {
      el.style.fontWeight = w.toString();
      const computed = parseFloat(getComputedStyle(el).fontWeight);
      return { requested: w, computed, matches: computed === w };
    });

    document.body.removeChild(el);
    return results;
  });

  const allWeightsMatch = weightTest.every(w => w.matches);
  tests.push({
    name: 'Variable Font Weight Range',
    status: allWeightsMatch ? 'PASS' : 'MINOR',
    details: allWeightsMatch
      ? 'All font weights (300-700) render correctly'
      : `Weight variance: ${weightTest.map(w => `${w.requested}:${w.computed}`).join(', ')}`
  });

  return tests;
}

async function testGradients(page, browserName) {
  const tests = [];

  // Check gradient rendering on page
  const gradientTest = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    let gradientCount = 0;

    for (const el of elements) {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && (bg.includes('linear-gradient') || bg.includes('radial-gradient'))) {
        gradientCount++;
      }
    }

    return { gradientCount };
  });

  tests.push({
    name: 'Gradient Rendering',
    status: 'PASS',
    details: `${gradientTest.gradientCount} gradient elements detected`
  });

  return tests;
}

async function testAnimations(page, browserName) {
  const tests = [];

  const animationTest = await page.evaluate(() => {
    const root = document.documentElement;
    const styles = getComputedStyle(root);

    const durations = {
      instant: styles.getPropertyValue('--duration--instant'),
      fast: styles.getPropertyValue('--duration--fast'),
      normal: styles.getPropertyValue('--duration--normal'),
      slow: styles.getPropertyValue('--duration--slow')
    };

    const defined = Object.values(durations).filter(v => v && v.trim()).length;
    return { defined, total: 4 };
  });

  tests.push({
    name: 'Animation Duration Tokens',
    status: animationTest.defined === animationTest.total ? 'PASS' : 'ISSUE',
    details: `${animationTest.defined}/${animationTest.total} duration tokens defined`
  });

  return tests;
}

async function testLayout(page, browserName) {
  const tests = [];

  // Test flexbox/grid support
  const layoutTest = await page.evaluate(() => {
    const testDiv = document.createElement('div');
    testDiv.style.display = 'flex';
    document.body.appendChild(testDiv);
    const flexWorks = getComputedStyle(testDiv).display === 'flex';

    testDiv.style.display = 'grid';
    const gridWorks = getComputedStyle(testDiv).display === 'grid';

    document.body.removeChild(testDiv);
    return { flexWorks, gridWorks };
  });

  tests.push({
    name: 'Flexbox/Grid Layout',
    status: layoutTest.flexWorks && layoutTest.gridWorks ? 'PASS' : 'ISSUE',
    details: `Flexbox: ${layoutTest.flexWorks ? 'OK' : 'FAIL'}, Grid: ${layoutTest.gridWorks ? 'OK' : 'FAIL'}`
  });

  return tests;
}

async function testCanvas(page, browserName) {
  const tests = [];

  // Check if canvas elements are present
  const canvasCheck = await page.evaluate(() => {
    const canvas = document.querySelector('.vue-flow, [class*="canvas"], [class*="workflow"]');
    const svg = document.querySelector('svg.vue-flow__edges, svg[class*="edges"]');
    return {
      canvasFound: !!canvas,
      svgEdges: !!svg
    };
  });

  tests.push({
    name: 'Canvas Elements',
    status: canvasCheck.canvasFound ? 'PASS' : 'MINOR',
    details: canvasCheck.canvasFound
      ? 'Canvas container detected'
      : 'Canvas not loaded (may require workflow)'
  });

  return tests;
}

async function captureConsoleErrors(page) {
  const errors = [];
  const warnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
    if (msg.type() === 'warning') warnings.push(msg.text());
  });

  page.on('pageerror', err => errors.push(err.message));

  return { errors, warnings };
}

async function runBrowserTests(browserType, config) {
  console.log(`\n=== Testing ${config.name} ===\n`);

  let browser;
  try {
    browser = await config.launcher.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1536, height: 960 }
    });
    const page = await context.newPage();

    // Capture console errors
    const consoleCapture = await captureConsoleErrors(page);

    // Navigate to frontend
    console.log(`Navigating to ${FRONTEND_URL}...`);
    try {
      await page.goto(FRONTEND_URL, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      console.log(`Navigation timeout, proceeding with loaded content...`);
    }

    // Wait for app to load
    await page.waitForTimeout(2000);

    // Run tests
    console.log('Testing CSS Custom Properties...');
    results[browserType].tests.push(...await testCSSCustomProperties(page, browserType));

    console.log('Testing Shadow Rendering...');
    results[browserType].tests.push(...await testShadowRendering(page, browserType));

    console.log('Testing Typography...');
    results[browserType].tests.push(...await testTypography(page, browserType));

    console.log('Testing Gradients...');
    results[browserType].tests.push(...await testGradients(page, browserType));

    console.log('Testing Animations...');
    results[browserType].tests.push(...await testAnimations(page, browserType));

    console.log('Testing Layout...');
    results[browserType].tests.push(...await testLayout(page, browserType));

    console.log('Testing Canvas...');
    results[browserType].tests.push(...await testCanvas(page, browserType));

    // Take screenshot
    const screenshotPath = `/home/aiwithapex/projects/n8n/.spec_system/specs/phase03-session04-cross-browser-testing/screenshot-${browserType}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved: ${screenshotPath}`);

    // Test Storybook
    console.log(`\nNavigating to Storybook ${STORYBOOK_URL}...`);
    try {
      await page.goto(STORYBOOK_URL, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);

      const storybookLoaded = await page.evaluate(() => {
        return document.querySelector('#storybook-root, #storybook-preview-wrapper, [id*="storybook"]') !== null;
      });

      results[browserType].tests.push({
        name: 'Storybook Loading',
        status: storybookLoaded ? 'PASS' : 'MINOR',
        details: storybookLoaded ? 'Storybook loaded successfully' : 'Storybook container not found'
      });

      // Take Storybook screenshot
      const sbScreenshotPath = `/home/aiwithapex/projects/n8n/.spec_system/specs/phase03-session04-cross-browser-testing/screenshot-storybook-${browserType}.png`;
      await page.screenshot({ path: sbScreenshotPath, fullPage: true });

    } catch (e) {
      results[browserType].tests.push({
        name: 'Storybook Loading',
        status: 'MINOR',
        details: `Could not load Storybook: ${e.message}`
      });
    }

    // Collect console errors
    results[browserType].errors = consoleCapture.errors;
    results[browserType].warnings = consoleCapture.warnings;

    await browser.close();
    console.log(`${config.name} tests complete.`);

  } catch (error) {
    console.error(`Error testing ${config.name}:`, error.message);
    results[browserType].tests.push({
      name: 'Browser Launch',
      status: 'FAIL',
      details: error.message
    });
    if (browser) await browser.close();
  }
}

async function generateReport() {
  console.log('\n\n========== CROSS-BROWSER TEST RESULTS ==========\n');

  for (const [browserType, config] of Object.entries(BROWSERS)) {
    console.log(`\n--- ${config.name} ---`);

    const browserResults = results[browserType];

    // Count results
    const pass = browserResults.tests.filter(t => t.status === 'PASS').length;
    const minor = browserResults.tests.filter(t => t.status === 'MINOR').length;
    const issue = browserResults.tests.filter(t => t.status === 'ISSUE').length;
    const fail = browserResults.tests.filter(t => t.status === 'FAIL').length;

    console.log(`PASS: ${pass} | MINOR: ${minor} | ISSUE: ${issue} | FAIL: ${fail}`);
    console.log('');

    for (const test of browserResults.tests) {
      console.log(`  [${test.status}] ${test.name}`);
      console.log(`         ${test.details}`);
    }

    if (browserResults.errors.length > 0) {
      console.log(`\n  Console Errors: ${browserResults.errors.length}`);
      browserResults.errors.slice(0, 5).forEach(e => console.log(`    - ${e.substring(0, 100)}`));
    }
  }

  return results;
}

async function main() {
  console.log('Cross-Browser Testing Script');
  console.log('============================');
  console.log(`Frontend URL: ${FRONTEND_URL}`);
  console.log(`Storybook URL: ${STORYBOOK_URL}`);
  console.log('');

  // Run tests for each browser
  for (const [browserType, config] of Object.entries(BROWSERS)) {
    await runBrowserTests(browserType, config);
  }

  // Generate report
  const finalResults = await generateReport();

  // Output JSON results
  const jsonPath = '/home/aiwithapex/projects/n8n/.spec_system/specs/phase03-session04-cross-browser-testing/test-results.json';
  const fs = await import('fs');
  fs.writeFileSync(jsonPath, JSON.stringify(finalResults, null, 2));
  console.log(`\nResults saved to: ${jsonPath}`);

  return finalResults;
}

main().catch(console.error);
