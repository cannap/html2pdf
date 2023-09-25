import puppeteer from 'puppeteer';

export const generate = async (html: string) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setContent(html);
  await browser.close();

  page
    .pdf({
      format: 'A4',
      margin: {
        top: '20px',
        left: '20px',
        right: '20px',
        bottom: '20px',
      },
    })
    .then((res) => {});
};
