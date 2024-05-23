import fs from 'fs/promises';
import { sync as parse } from 'csv-parse/lib/es5/sync.js';
import { table } from 'table';

async function generateTable() {
  try {
    // Read the JTL file
    const jtlFile = 'result.jtl';
    const jtlData = await fs.readFile(jtlFile, 'utf8');

    // Parse the CSV data
    const parsedData = parse(jtlData, {
      columns: true,
      skip_empty_lines: true
    });

    // Prepare table headers
    const headers = Object.keys(parsedData[0]);

    // Prepare table data
    const data = [headers].concat(parsedData.map(row => headers.map(header => row[header])));

    // Generate the table
    const output = table(data);

    console.log(output);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

generateTable();
