const files = require.context('.', false, /\.json$/)
const modules = {}

files.keys().forEach((key) => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.json)/g, '')] = files(key)
})

export default modules
