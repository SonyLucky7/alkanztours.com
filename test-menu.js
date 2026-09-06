const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.toString());
  });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('CONSOLE ERROR:', msg.text());
    }
  });

  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  console.log('Page loaded. Clicking menu...');
  await page.waitForSelector('header button[aria-label="Open menu"]');
  await page.click('header button[aria-label="Open menu"]');
  
  await new Promise(r => setTimeout(r, 2000));
  
  await browser.close();
})();
