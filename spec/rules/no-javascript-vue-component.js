const utils = require('eslint-plugin-nuxt/lib/utils')
const fs = require('fs')

module.exports = {
  create(context) {
    let rootNode = null
    return {
      ImportDeclaration(node) {
        if (!rootNode) {
          rootNode = node
        }
      },
      ObjectExpression(node) {
        if (!rootNode) {
          rootNode = node
        }
      },
      ...utils.executeOnVue(context, obj => {
        const fileName = context.getFilename()
        const fileBody = fs.readFileSync(fileName, { encoding: 'utf8' })
        const isTypeScript = /\<script lang=["']ts['"]\>/.test(fileBody)
        if (!isTypeScript) {
          context.report({
            node: rootNode,
            message: 'Vue components must be written in TypeScript.'
          })
        }
      })
    }
  }
}
