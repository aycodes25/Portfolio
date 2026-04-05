import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Construct local file URL for Windows
    // Using simple path resolution and prepending file:///
    const fileUrl = 'http://localhost:5173/assets/TOMINIYI%20CV.html';
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    await page.pdf({
      path: path.join(__dirname, 'public', 'assets', 'TOMINIYI_CV.pdf'),
      format: 'A4',
      printBackground: true
    });
    
    await browser.close();
    console.log('PDF generated successfully!');
  } catch (err) {
    console.error('Error generating PDF:', err);
  }
})();
