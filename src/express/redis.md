# Redis

## Install Redis

There are a few ways of
[installing Redis itself](https://redis.io/docs/latest/operate/oss_and_stack/install/).

::: [TIP]

Note that Redis is a lightweight version, whereas Redis Stack contains more
features.

:::

If you are using Docker, you should be able to access Redis without explicitly
running it. If you have installed natively, you may need to run it:

::: code-group

```bash
redis-server
```

```bash
# if using redis stack
redis-stack-server
```

:::

## Install Redis Client

There is a client library for Node.js which makes developing against a Redis
database much easier.

To install it, run

```bash
npm install redis
```

in your Node project.

## Basic operations

At its core, Redis is concerned with setting and getting key/value pairs.

```js
// Import the redis package
import redis from 'redis'

// Create a Redis client instance
const r = redis.createClient({
  url: 'redis://localhost:6379'
})

// Handle connection errors
r.on('error', err => console.log('Redis Client Error', err))

// Connect the client
await r.connect()

// Basic Redis commands (set and get)
await r.set('mykey', 'Hello Redis') // Set a key-value pair
const value = await r.get('mykey') // Get the value of the key
console.log('mykey:', value)

// Close the connection when done
await r.quit()
```

## Working with JSON

Redis can store JSON data without stringifying it.

```js
// Create a JSON object to store in Redis
const user = {
  id: 'user:1001',
  name: 'Jane Doe',
  age: 25,
  email: 'janedoe@example.com',
  address: {
    city: 'London',
    country: 'UK'
  }
}

// Set the JSON object using RedisJSON (json.set)
await r.json.set(user.id, '$', user)

const storedUser = await r.json.get(user.id)
```

The keys can be manipulated individually:

```js
// Update the age field
await r.json.set('user:1001', '$.age', 26)

// Read the email field
const userEmail = await r.json.get('user:1001', { path: '$.email' })
```

## Search index

We can create a search index which allows us to implement full text search.

```js
// Create a new search index using RedisSearch
await r.ft.create('userIndex'
  {
    '$.name': {
      type: 'TEXT', // Full-text search over the 'name' field
      sortable: true // Allows sorting by this field
    },
    '$.age': {
      type: 'NUMERIC', // Numeric field to support range queries
    }
  },
  {
    ON: 'JSON', // We're indexing JSON documents
    PREFIX: 'user:' // Only index keys that start with 'user:'
  }
)
```

Now we can search for users by name or age.

```js
const result1 = await r.ft.search('userIdx', '@name:Jane')
const result2 = await r.ft.search('userIdx', '@age:[25 35]')
```
