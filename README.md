# Daniel Nguyen's NextJS project

This app is made to resemble a FE challenge by Manscaped.

## Contents

- [Architecture Overview](#-Architecture-Overview)
- [Repository Structure](#-Repository-Structure)
- [Environment Setup](#-Environment-Setup)
- [Development Process](#-Development-Process)
- [Deployment](#-Deployment)

## 🍔 Architecture Overview

This project relies on some of the following tech stacks:

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org/)
- [Cypress](https://www.cypress.io/)

  ## 🎉 Repository Structure

What's what?

- `/src` => the application source code (entry point for module structure)
    - `/src/pages` => the list of pages being accepted as file-based routing for NextJS
    - `/src/features` => all the implemented features, logic, and queries of the app
    - `src/components` => a design system of reusable components with their component unit tests
    - `src/hooks` => a suites of reusable stateful React hooks
    - `src/libs` => a library of configured 3rd-party or internal functions
    - `src/types` => a collection of high-level utility TypeScript types
    - `src/styles` => the globals.css where tailwind is injected & augmented
- `/public` => static resources (logo, manifest, ...)
- `/node_modules` => all current node dependencies


## 📋 Environment Setup

[NVM](https://github.com/nvm-sh/nvm) is also recommended to make sure you always stay consistent with the node version specified in `.nvmrc` via:
```
nvm use
```


[Yarn](https://yarnpkg.com/) is the preferred package manager, but you can pivot if you want to.
The following steps should be sufficient to get you started on the project via:
```
yarn
```

To start local development server & start hammering 🔨 away:
```
yarn dev
```

To start automated tests:
```
yarn cy:open
```

## 🚀 Development Process

Naming guidelines:
- All components should named PascalCased, with named folder and an index.ts(x)
- All other directories should camelCased
- Variables & props should camelCased
- Types & interfaces should PascalCased
- Constants should UPPERCASED
- String should "double-quoted"

Component guidelines:
- Color palette, spacing, and font styles is available via tailwind. Only these colors should be used, and with proper names.
- Limit custom styling if possible & try to use the design system as much as possible.
- Dis-prefer inline styles, use tailwind classes if can.


## 🚀 Deployment

Checkout the deployment guides for [Vercel](https://vercel.com/docs/concepts/deployments/overview)
