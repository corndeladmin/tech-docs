class Judge {
  static #base = 'https://judge.ines.dev'

  static #languages = {
    csharp: 51,
    java: 62,
    javascript: 63,
    js: 63,
    python: 70,
    sql: 82
  }

  static #headers = new Headers({
    'Content-Type': 'application/json'
  })

  static getLanguages() {
    return Judge.#languages
  }

  constructor(language) {
    this.languageId = Judge.#languages[language]
  }

  #getUrl(endpoint, params = {}) {
    const url = new URL(endpoint, Judge.#base)

    url.search = new URLSearchParams(params).toString()

    return url
  }

  async createSubmission(code, stdin) {
    const url = this.#getUrl('submissions', {
      base64_encoded: false,
      wait: true
    })

    const body = JSON.stringify({
      source_code: code,
      language_id: this.languageId,
      stdin
    })

    const options = {
      method: 'POST',
      headers: Judge.#headers,
      body
    }

    try {
      const res = await fetch(url, options)
      const data = await res.json()
      return data
    } catch (err) {
      console.error(err)
    }
  }
}

export default Judge
