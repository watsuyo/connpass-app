# connpass-app

<!-- ここにプロジェクトごとのバッヂを貼っておく -->

[![CircleCI](https://circleci.com/gh/watsuyo/connpass-app.svg?style=svg&circle-token=1a17d9f5546cc708a9ff1063d50bf02dfe40449a)](https://circleci.com/gh/watsuyo/connpass-app)
[![codecov](https://codecov.io/gh/watsuyo/connpass-app/branch/master/graph/badge.svg?token=64zG6GbRrd)](https://codecov.io/gh/watsuyo/connpass-app)

## Stacks

- Technologies
  - Nuxt.js
    - with TypeScript
  - Jest
  - Storybook
    - with Storyshots
- Developer Experience
  - codecov
  - CircleCI
- Infrastructure
  - Google AppEngine
  - Google Cloud Build

## Development

### Server

#### Launch development server

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

#### Launch production server

```bash
# build for production and launch server
$ yarn run build
$ yarn start
```

### Test

#### Run tests using Jest

```bash
$ yarn test
```

#### and report coverage

```bash
$ yarn test:coverage
```

### Component development

#### Launch Storybook

```bash
$ yarn storybook
```

#### Export stories for static website

```bash
$ yarn build:storybook
```

### (Optional) Report artifacts

Set the following for CircleCI environment variable.

```bash
ENABLE_ARTIFACTS_REPORTER='1'
ORGANIZATION_NAME='watsuyo'
CIRCLE_TOKEN='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
GITHUB_API_TOKEN='XXXXXXXXXXXXXXXXXXXXXXXXXXX'
```
