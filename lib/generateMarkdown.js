// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `![License:Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GNU GPLv3") {
    return `![License: LGPLv3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
  }else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache 2.0') {
   return 'http://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'GPL GPLv3') {
    return 'https://www.gnu.org/licenses';
  } else {
   return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return renderLicenseBadge(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return ` 

# ${data.title}

${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Table of Contents:
### -[Project description](#description)
### -[Installation instruction](#installation)
### -[Project usage](#usage)
### -[Contribution](#contribution)
### -[Email](#email)
### -[GitHub repo](#github-repo)
### -[GitHub Username](#github-username)
### -[License](#license)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## Email:
${data.email}

## GitHub repo:
${data.repo}

## GitHub Username:
${data.username}

## License:
${data.license}
 
`;
}

module.exports = generateMarkdown;
