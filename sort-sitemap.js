import { readFile, writeFile } from 'fs';
import { parseString, Builder } from 'xml2js';

const xmlFilePath = process.argv[2];

readFile(xmlFilePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  parseString(data, (parseErr, result) => {
    if (parseErr) {
      console.error('Error parsing XML:', parseErr);
      return;
    }

    // extract urls and sort them
    const urls = result.urlset.url.map((url) => url.loc[0]);
    urls.sort();

    // write urls in the new order
    result.urlset.url.forEach((url, index) => {
      url.loc[0] = urls[index];
    });

    // write the new xml
    const xml = new Builder({ xmldec: { encoding: 'UTF-8' } }).buildObject(
      result,
    );

    writeFile(xmlFilePath, xml, 'utf-8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return;
      }
      console.log('Sorted sitemap saved successfully.');
    });
  });
});
