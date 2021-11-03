# next-js-template

An experiment to create an unfoldingWord template for Next.js based applications.

The goals:

- To increase velocity of starting a new application
- To increase consistency and adherence to unfoldingWord branding

**TABLE OF CONTENTS**

1. How to run the template
2. How to use the template
3. Using the tutorials
4. Customizations

## How to run the template

Q. *Why would you want to run the template?*

A. You will run the template in order to improve it, test it, extend it, etc.

*Steps*

1. Use `git clone git@github.com:unfoldingWord-box3/next-js-template.git` to download the latest code and set up as a local git repo. NOTE: alternativiely, the repo may be forked.
2. Use `yarn install` to build the app template
2. Use `yarn dev` to run the app template
2. Point browser to `localhost:3000`
2. Create a branch to contain your changes
3. Make changes, commit, and push to your branch
4. When changes are complete, create Pull Request (PR) and request they be reviewed and merged


## How to use the template

Q. *Why would you want to use the template?*

A. You will use the template to create a new unfoldingWord application.

*Steps*

1. Download the repo as a zip file and extract
2. Make the extracted folder a git repo and push to Github
3. Update `package.json` as needed

## Using the Tutorials

TBD... here point to one or more tutorials showing how use the template to actually develop something useful...

Potential Ideas:
- Using the Bible Reference RCL with Proskomma
- Using the Translation Helps RCL to display content

# Customizations

## Changing the App Name

There are these places where the app name must be updated:
- `package.json`
- `src/common/constants.js`
- `src/common/sendFeedback.js`
