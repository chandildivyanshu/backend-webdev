require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
    res.send('hello twitter')
})
app.get('/login' , (req,res) => {
    res.send('<h1>Please login at Chai aur code</h1>')
})

const githubData = {
    "login": "chandildivyanshu",
    "id": 96479766,
    "node_id": "U_kgDOBcAqFg",
    "avatar_url": "https://avatars.githubusercontent.com/u/96479766?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/chandildivyanshu",
    "html_url": "https://github.com/chandildivyanshu",
    "followers_url": "https://api.github.com/users/chandildivyanshu/followers",
    "following_url": "https://api.github.com/users/chandildivyanshu/following{/other_user}",
    "gists_url": "https://api.github.com/users/chandildivyanshu/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/chandildivyanshu/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/chandildivyanshu/subscriptions",
    "organizations_url": "https://api.github.com/users/chandildivyanshu/orgs",
    "repos_url": "https://api.github.com/users/chandildivyanshu/repos",
    "events_url": "https://api.github.com/users/chandildivyanshu/events{/privacy}",
    "received_events_url": "https://api.github.com/users/chandildivyanshu/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-12-21T12:56:35Z",
    "updated_at": "2024-04-24T02:05:56Z"
  }

app.get('/youtube' , (req,res) => {
    res.send('<h2> this is youtube </h2>')
})

app.get('/github' , (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})