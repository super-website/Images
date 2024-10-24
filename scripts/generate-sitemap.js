import { SitemapStream, streamToPromise } from 'sitemap'
import fs from 'fs'

const links = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toLocaleString(),
  },
  {
    url: '/gallery',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toLocaleString(),
  },
  {
    url: '/about',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toLocaleString(),
  },
  {
    url: '/users',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toLocaleString(),
  },
  {
    url: '/deals',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toLocaleString(),
  },
  {
    url: '/results',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toLocaleString(),
  },
]

const sitemapStream = new SitemapStream({
  hostname: 'https://picsum-images.netlify.app/',
})

const writeStream = fs.createWriteStream('./public/sitemap.xml')

sitemapStream.pipe(writeStream)

links.forEach((link) => {
  sitemapStream.write(link)
})

sitemapStream.end()

streamToPromise(sitemapStream)
  .then(() => {
    console.log('Sitemap generated successfully!')
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err)
  })
