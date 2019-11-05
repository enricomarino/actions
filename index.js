const core = require('@actions/core')
const github = require('@actions/github')

async function run () {
  try {

    let source = core.getInput('source')
    console.log(source)

    let destination = core.getInput('destination')
    console.log(destination)

    core.setOutput('result', true)

  } catch (error) {
    let message = error.message
    core.setFailed(message)
  }
}

run()