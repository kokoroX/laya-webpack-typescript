const fs = require('fs')
const path = require('path')
const filename = './src/ui/layaUI.max.all.ts'
const filepath = path.join(__dirname, '..', filename)
const appendString = 'export default ui'

const options = {
  filename, callback: () => {
    const file = fs.readFileSync(filepath, 'utf-8')

    if (~file.indexOf(appendString)) return

    fs.appendFile(filepath, appendString)
  }
}

module.exports = options
