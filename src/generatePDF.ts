import puppeteer from 'puppeteer';
import { readFile } from 'node:fs/promises';
import inlinCss from 'inline-css';
const inlineCSS = (html) => {};

export const generate = async (html: string) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setContent(html);
  await browser.close();

  return page.pdf({
    format: 'A4',
    margin: {
      top: '20px',
      left: '20px',
      right: '20px',
      bottom: '20px',
    },
  });
};
