// Octokit.js
// https://github.com/octokit/core.js#readme

const GH_TOKEN = process.env.GH_TOKEN;
const fs = require("fs");

const payload = fs.readFileSync("payload.md", 'utf-8');

const { Octokit } = require("@octokit/rest")
const octokit = new Octokit({
    auth: GH_TOKEN
  })
  
octokit.request('POST /repos/pogi7/restful/releases', {
  owner: 'pogi7',
  repo: 'restful',
  tag_name: '1.0.0',
  target_commitish: 'main',
  name: '1.0.0',
  body: payload.toString(),
  draft: false,
  prerelease: false,
  generate_release_notes: true
})