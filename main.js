// Octokit.js
// https://github.com/octokit/core.js#readme

const GH_TOKEN = process.env.GH_TOKEN;

const { Octokit } = require("@octokit/rest")
const octokit = new Octokit({
    auth: GH_TOKEN
  })
  
  await octokit.request('POST /repos/pogi7/restful/releases', {
    owner: 'pogi7',
    repo: 'restful',
    tag_name: '1.0.0',
    target_commitish: 'main',
    name: '1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    generate_release_notes: true
  })