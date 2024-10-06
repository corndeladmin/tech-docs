# Staging

<Vimeo id="1016739696" />

## Staging environment

When deploying our app, it makes sense to deploy it to a staging environment.
This means we can get a feel for how the app performs on the real server before
we push changes to production.

This means we can do performance, acceptance and security testing against the
staged application in an environment which closely resembles the production
deployment.

## Staging in Render

When deploying on render, for example, we can configure it to automatically
stage the app whenever a pull request is made into the main branch.

We can set up a `main <- develop` pull request which will rebuild the staged
application whenever the pull request is updated.

The staging url might look something like
[https://corndel-todo-pr-1.onrender.com](https://corndel-todo-pr-1.onrender.com).

## Live testing

We can now use a tool such as [K6](https://k6.io/) to run performance tests
against the staged site.

```js
import http from 'k6/http'
import { sleep } from 'k6'

/**
 * Scenario:
 * 200 users sending requests every 1s
 *
 * Usage:
 * k6 run getTodos.test.js
 */

export const options = {
  stages: [
    { duration: '10s', target: 200 }, // ramp-up
    { duration: '10s', target: 200 }, // stable
    { duration: '10s', target: 0 } // ramp-down
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(99)<200'] // 99% of requests should be below 200ms
  }
}

export default function () {
  http.get('https://corndel-todo-pr-1.onrender.com/todos')
  sleep(1)
}
```
