const utils = require('eslint-plugin-nuxt/lib/utils')

module.exports = {
  create(context) {
    return {
      ...utils.executeOnVue(context, obj => {
        const fileName = context.getFilename()
        const methodsNode = utils.getProperties(obj, ['methods'])[0]
        const hasMethods = !!utils.getProperties(obj, ['methods']).length
        if (fileName.includes('src/components/__system__') && hasMethods) {
          context.report({
            node: methodsNode,
            message: 'Design system components must not have methods property.'
          })
        }
      })
    }
  }
}
