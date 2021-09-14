const { createServer } = require('http')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res)
    }).listen(port, (err) => {
        if (err) throw err
        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`)
    })
})
