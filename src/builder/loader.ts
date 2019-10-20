import csv from 'csv-parser'
import fs from 'fs'
import iconv from 'iconv-lite'

export function load(path: string) {
  return new Promise(resolve => {
    const results: any[] = []

    fs.createReadStream(path)
      .pipe(iconv.decodeStream('euc-kr'))
      .pipe(csv())
      .on('data', data => {
        const item: any = {}

        for (const [key, value] of Object.entries<string>(data)) {
          if (key) {
            item[(key.trim())] = value
          }
        }
        results.push(item)
      })
      .on('end', () => resolve(results))
  })
}
