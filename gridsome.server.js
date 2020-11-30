const fs = require('fs')
const yaml = require('js-yaml')

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    const skills = yaml.safeLoad(fs.readFileSync('./src/data/skills.yaml', 'utf-8'))

    const skillsCollection = addCollection({
      typeName: 'Skills'
    })

    for (const skill of skills) {
      skillsCollection.addNode(skill)
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
