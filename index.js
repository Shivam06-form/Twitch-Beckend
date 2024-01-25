const Express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const App = Express()

const router = Express.Router()
App.use(bodyParser.json())

App.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

const HTMLTemplate = fs.readFileSync(`${__dirname}/Public/index.html`, 'utf-8')
const jsonfile = fs.readFileSync(`${__dirname}/JSON/Live.json`, 'utf-8')

App.use(router.get('/api/Twitch', (req, res, next) => {
    const FollowChannel = JSON.parse(jsonfile)
    res.status(200).json(FollowChannel)
}))

const port = process.env.PORT  || 8000;
App.listen(port, () => {
    console.log(`App runnning on port ${port}`);
});
