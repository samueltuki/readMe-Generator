// function to generate markdown for README
function generateMarkdown(data) {
  const readMe = `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table Of Content
  *[title](#title)
  *[description](#description)
  *[installation](#installation)
  *[usage](#usage)
  *[license](#license)
  *[contributor](#contributor)
  *[test](#test)
  ## Installation
  ${data.installation}
  ## How is your project used?
  ${data.usage}
  ## license
  ${data.license}
  ## Contributors
  ${data.contributor}
  ## Tests
  ${data.test}
  ## Questions
  Any questions about this project please send me a message on https://github.com/${data.github} or email me at [${data.email}](mailto:${data.email})

`
return readMe;
}





module.exports = generateMarkdown;
