// import Octokit from '@octokit/rest'
const Octokit = require('@octokit/rest')
const axios = require('axios')
const consola = require('consola')

const {
  ENABLE_ARTIFACTS_REPORTER,
  GITHUB_API_TOKEN,
  ORGANIZATION_NAME,
  CIRCLE_BRANCH,
  CIRCLE_PROJECT_REPONAME,
  CIRCLE_TOKEN,
  CIRCLE_PULL_REQUESTS
} = process.env

if (!ENABLE_ARTIFACTS_REPORTER) {
  consola.info('Artifacts Reporter is not enabled.')
  process.exit()
}

const githubClient = new Octokit({
  auth: GITHUB_API_TOKEN
})

const CIRCLECI_API_ROOT = 'https://circleci.com/api/v1.1/project/github'
const ciUrl = `${CIRCLECI_API_ROOT}/${ORGANIZATION_NAME}/${CIRCLE_PROJECT_REPONAME}/latest/artifacts`

async function run() {
  let data

  try {
    const response = await axios.get(ciUrl, {
      params: {
        'circle-token': CIRCLE_TOKEN,
        branch: CIRCLE_BRANCH
      }
    })
    data = response.data
  } catch (e) {
    consola.error('Failed fetch artifacts.')
    process.exit(1)
  }

  try {
    const storybookDist = data.find(art => {
      return art.path.includes('storybook-dist/index.html')
    })
    if (!storybookDist) {
      consola.info('no artifacts')
      return
    }
    const { data: pulls } = await githubClient.pulls.list({
      owner: 'watsuyo',
      repo: 'connpass-app'
    })
    const pr = pulls.find(pull => {
      return pull.head.ref === CIRCLE_BRANCH
    })
    if (!pr) {
      consola.info('no pr')
      return
    }
    await githubClient.issues.createComment({
      owner: 'watsuyo',
      repo: 'connpass-app',
      issue_number: pr.number,
      body: `## Artifacts report
- Storybook URL
  - ${storybookDist.url}
`
    })
  } catch (e) {
    consola.error('Failed comment artifacts report.')
    process.exit(1)
  }
}

run()
