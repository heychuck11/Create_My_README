// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
#${data.description}
#${data.username}
#${data.email}
#${data.license}
#${data.installation}
#${data.test}
#${data.usage}
#${data.contribution}

`;
}

module.exports = generateMarkdown;
