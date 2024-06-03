# Static files

<Vimeo id="935921560" />

## Serving static files

Until now, we have been using our server to send back data such as strings or
json. However, we can serve whole files such as pictures or documents, too!

## Public directory

Although you can put the files you'd like to serve anywhere, it's convention to
put them in a folder called `public`

```
public
├── logo.png
└── logs
    └── hello.txt
```

## Using `express.static()`

We instruct our express app to serve files from `public` using
`express.static()`.

```js{11-12}
import express from 'express'
import api from '../api/index.js'
import { errorHandler } from './errors.js'

const app = express()

// configure api
app.use(express.json())
app.use('/api', api)

// serve static files
app.use(express.static('public'))

app.use(errorHandler)
export default app

```

## Requesting static files

Now, if we visit `/logo.png` or `/logs/hello.txt` we will get the corresponding
files. Note that `/public/` is _not_ part of the url.
