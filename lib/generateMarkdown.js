// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    licenseBadge = `[![License:Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU GPLv3") {
    licenseBadge = `[![License: LGPLv3] (https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  }else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ""
  }
  return licenseLink;
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
### -[Project description](#Description)
### -[Installation instruction](#Installation)
### -[Project usage](#Usage)
### -[Contribution](#Contribution)
### -[Email](#Email)
### -[GitHub repo](#repo)
### -[GitHub Username](#username)
### -[License](#License)

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
