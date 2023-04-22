// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
 

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case MIT:
      licenselink = "http://opensource.org/licenses/MIT";
      break;
      case Apache:
        licenselink= "https://www.apache.org/licenses/";
        break;
        case GPLv3:
          licenselink = "http://www.gnu.org/licenses/quick-guide-gplv3.html";
          break;
          case BSD-2-Clause: 
          licenselink = "http://opensource.org/licenses/BSD-2-Clause";
          break;
          case AGPL: 
          licenselink = "https://gnu.org/licenses/agpl.html";
          break;
          case LGPL:
            licenselink = "https://www.gnu.org/licenses/lgpl.html";
            break;
            case CreativeCommons:
              licenselink = "http://creativecommons.org/";
              break;
              case None:
                licenselink = "";
  }
  return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;