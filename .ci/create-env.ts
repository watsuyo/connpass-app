import { writeFileSync } from 'fs'
import { environments } from '../src/plugins/environments'

const defs = [] as string[]

Object.entries(environments).forEach((pair) => {
  const [ key, value ] = pair
  if (value === undefined) {
    return
  }
  defs.push(key + ': ' + value)
})

const output = `env_variables:
  ${defs.join('\n  ')}`

writeFileSync(__dirname + '/../app.env.yaml', output, { encoding: 'utf8' })
