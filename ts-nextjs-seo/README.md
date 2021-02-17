# ts-nextjs-seo

Basic structure for NextJS + SEO content.

## Features

* Typescript support
* Main code is placed in the `src` directory
* Static HTML compiled code is located in the `out` directory after `yarn export`
* Alias path for `./src` with `#root`

## Initialization

``` bash
# Install dependencies
yarn

# Run coded on dev mode
yarn watch

# (Optional) Add gitignore for the project
#npx gitignore node

# (Optional) Add licence for the project
#npx license MIT
```

## Usage

### Pages

Pages are placed inside the `./src/pages` directory. Modify with your data.

### Components

Pages are placed inside the `./src/components` directory. Modify with your data.
Consider modularity for your projects.

### SEO

* Modify `./src/components/Shared/SEO` with your information
* Modify `./postExport.js` with your information

## Extra Customization

Change some values of the `package.json` file if you know what you are doing :

* name
* version
* description
* author
