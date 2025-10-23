import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'

const images = [
  { file: 'hero.jpg', urls: [
    'https://images.unsplash.com/photo-1494415859740-21e878dd929d?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1600&q=80',
  ]},
  { file: 'service-earthworks.jpg', urls: [
    'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80',
  ]},
  { file: 'service-road.jpg', urls: [
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1493236296276-d17357e288a9?auto=format&fit=crop&w=800&q=80',
  ]},
  { file: 'service-utilities.jpg', urls: [
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=800&q=80',
  ]},
  { file: 'project-1.jpg', urls: [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1441471349424-351990746ff4?auto=format&fit=crop&w=600&q=80',
  ]},
  { file: 'project-2.jpg', urls: [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=600&q=80',
  ]},
  { file: 'project-3.jpg', urls: [
    'https://images.unsplash.com/photo-1447433819943-74a20887a81e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
  ]},
  { file: 'project-4.jpg', urls: [
    'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1523419409543-fa9d873fb095?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
  ]},
  { file: 'about.jpg', urls: [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
  ]},
]

const outDir = path.resolve('public', 'images')
fs.mkdirSync(outDir, { recursive: true })

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          // Follow redirect
          res.resume()
          return resolve(download(res.headers.location, dest))
        }
        if (res.statusCode !== 200) {
          file.close()
          fs.unlink(dest, () => {})
          return reject(new Error(`Failed ${url}: ${res.statusCode}`))
        }
        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      })
      .on('error', (err) => {
        file.close()
        fs.unlink(dest, () => {})
        reject(err)
      })
  })
}

;(async () => {
  for (const { file, urls } of images) {
    const dest = path.join(outDir, file)
    process.stdout.write(`Downloading ${file}... `)
    let ok = false
    for (const url of urls) {
      try {
        await download(url, dest)
        ok = true
        break
      } catch (e) {
        continue
      }
    }
    console.log(ok ? 'done' : 'failed: all sources')
  }
  console.log('Image fetch complete.')
})()


