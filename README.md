# Up42

## Overview

- About the Problem
- About the Solution
- How to use this project
- How the code in this project is structured
- Architectural Decision Records (ADRs)

## About Problem

This application simulates a marketplace where you can use your credits to buy data products. Basically, it will show a list of products, and they can be ordered using fake credit.

## Solution

### Overview of the solution

Here is an overview of the solution, and the battle plan to achieve it. You can use the battle plan to see my process on how I approached the solution. Each step in the battle plan is linked to a Pull Request. Each pull request will provide more details, you can review them one by one.

Please note that this project uses next.js and gets the benefit of server-side rendering. The server will fetch the items from API and provides a rendered HTML. Also, the UI is optimized for laptops and larger screens, but still should be usable for mobile, it's not perfect though.

I also encourage you to read test cases, they are written with BDD in mind and should be self-explanatory. In the end please feel free to open issues for any questions, clarifications, or issues.

### Battle plan

1. Initiate the project with next.js and clean up extra stuff form the boilerplate: [Link to PR](https://github.com/hojjatjokar/up42/pull/1)
2. Install and configure tools and libraries: prettier, linter, mui, jest, testing library
3. Configure CI/CD
   - Run tests, linter, and build in CI
   - Automatic QA env in each PR
   - Deploy to production on push/merge to main
4. Add header component which includes the credit logic
5. Get the list of items and show it, this includes logic for adding an item to the order
6. Order list which show the selected items and also ability to submit the order or remove items from the list

## How the code is structured

- **pages**: Since we have only one page, so this project will use the index page.
- **modules**: This project will categorize related codes to each feature in one place.
  - **components**: The most important part of each module would be its related UI components.
  - **utils**: These are mostly functions specific to just this feature. Please note there are utils for the whole application which may have use-cases in multiple modules. Don't mix them.
- **utils**: These are app-level functions, they meant to be pure functions.
- **types**: Types that can be used widely in application.

**Note**: This project uses Pascal case only for React components, everything else are in camelCase.

## How to use this project

To run the project you don't need to configure anything, just install the dependencies and you are good to go.

List of available scripts:

- Install the dependencies: `npm ci`
- Running on development mode: `npm run dev`
- Production build: `npm run build`
- Start the production build: `npm run start`
- Lint: `npm run test`
- Test: `npm run lint`

## ARD

### About CORS and why next js

This project uses next.js and will get the benefits of serverside side rendering. This is necessary for indexing by search engines and also can have improvement on the performance of the application.

As a result, It won't make any request in the browser so for now there is no CORS. However, if we had a real request for "Buy now", we would face the CORS eventually. In that case, the solution would be a whitelisted domain in /etc/hosts and using it instead of localhost for development environments. Other than the dev environment we should have a whitelisted domain for QA links, Staging, and production.

### Code quality: eslint, prettier, typescript

This project configured and uses prettier, eslint for some level of code quality gate. They are widely used and recommended in community. Also this project uses Typescript which is also widely recommenced to get benefit from.

### Testing

This project is implemented with BDD in mind and uses jest and testing library to implement unit and integeration tests.

### How the project is structured

This project will have a module for each feature/page to gather all related stuff there. This is for putting everything near to the implementation of it

### mui as a UI design system

This project uses mui to demonstrate use of a design system. As you can see not much css written inside the project.

### CI/CD

This project uses Github actions
