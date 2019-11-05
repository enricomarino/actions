let core = require('@actions/core')
let github = require('@actions/github')

async function run () {
  try {
    let token = core.getInput('token')
    let octokit = new github.GitHub(token)

    let owner = core.getInput('owner')
    let repo = core.getInput('repo')
    let path = core.getInput('path')

    let response = await octokit.repos.getContents({
      owner,
      repo,
      path
    })    
    let data = response.data

    let list = []
    for (let item of data) {
      list.push(item.name)
    }

    let result = JSON.stringify(list)

    core.setOutput('result', result)

  } catch (error) {
    let message = error.message
    core.setFailed(message)
  }
}

run()
