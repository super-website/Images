import { SitemapStream, streamToPromise } from 'sitemap'
import fs from 'fs'

const links = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/gallery',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/about',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/users',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/deals',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/results',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
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
