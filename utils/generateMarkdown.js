// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
*[title](#title)
*[description](#description)
*[installation](#installation)
*[usage](#usage)
*[license](#license)
*[contributor](#contributor)
*[test](#test)
`;
}

module.exports = generateMarkdown;
