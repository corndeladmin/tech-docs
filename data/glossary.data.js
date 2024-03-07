import { readFileSync } from 'fs'

export default {
  watch: ['./glossary.json'],
  load(watchedFiles) {
    const data = readFileSync(watchedFiles[0])
    return JSON.parse(data)
  }
}
