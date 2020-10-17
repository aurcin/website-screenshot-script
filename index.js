const puppeteer = require('puppeteer');
const timestamp = require('./timestamp');
var myArgs = process.argv.slice(2);

const takeScreenShot = async website => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`https://www.${website}`, { waitUntil: 'networkidle2' });
  await page.screenshot({
    path: `./screenshots/${timestamp()}.png`,
  });

  await page.close();
  await browser.close();
};

try {
  myArgs.forEach(async argument => {
    await takeScreenShot(argument);
    console.log(`Screenshot for ${argument} is taken`);
  });
} catch (error) {
  console.log('Error occured');
  console.dir(error);
}
