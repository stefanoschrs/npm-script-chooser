const fs = require('fs')
const { execSync } = require('child_process')

const inquirer = require('inquirer')

module.exports = async function () {
  const { scripts } = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  const res = await inquirer.prompt([
    {
      type: 'list',
      message: 'Select script',
      name: 'script',
      choices: Object.keys(scripts).map((key) => ({
        name: key,
        value: key
      }))
    }
  ])

  execSync(`npm run ${res.script}`, {
    stdio:'inherit'
  })
}

