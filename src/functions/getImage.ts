import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'
import sharp from 'sharp'

const PAGE_URL = 'https://poster.h.api.rayriffy.com'

export const getImageFunction = async(id: number | string) => {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
    defaultViewport: {
      width: 1000,
      height: 1000,
    },
  })

  const page = await browser.newPage()
  await page.goto(`${PAGE_URL}/encode/${id}`, {
    waitUntil: 'networkidle0',
  })

  const image = await page.screenshot({
    type: 'png',
    encoding: 'binary',
  })

  await browser.close()

  const compressedImage = await sharp(image).resize(500).png().toBuffer().toString()

  return compressedImage
}
