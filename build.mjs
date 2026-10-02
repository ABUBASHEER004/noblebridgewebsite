import { cp, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const dist = resolve(here, 'dist')
await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })
await cp(resolve(here, 'index.html'), resolve(dist, 'index.html'))
await cp(resolve(here, 'styles.css'), resolve(dist, 'styles.css'))
await cp(resolve(here, 'script.js'), resolve(dist, 'script.js'))
await cp(resolve(here, 'assets'), resolve(dist, 'assets'), { recursive: true })
console.log('NobleBridge Global production site prepared in dist/')
