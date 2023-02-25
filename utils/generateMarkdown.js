// function to generate markdown for README
function generateMarkdown(data) {
  const readMe = `
  # ${data.title}
  ## Description
  ${description}
  ## Table Of Content
  *[title](#title)
  *[description](#description)
  *[installation](#installation)
  *[usage](#usage)
  *[license](#license)
  *[contributor](#contributor)
  *[test](#test)
  ## Installation
  ${installation}
  ## How is your project used?
  ${usage}
  ## license
  ${license}
  ## Contributors
  ${contributor}
  ## Tests
  ${test}
  ## Questions
  Any questions about this project please send me a message on https://github.com/${github} or email me at [${email}](mailto:${email})

`
return readMe;
}

// await fs.writeFile('README.md', readMe);

module.exports = generateMarkdown;
