[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https://api.bit.dev/scope/teambit/base-ui?UseCache=1)](https://bit.dev/teambit/base-ui)
<a href="https://opensource.org/licenses/Apache-2.0"><img alt="apache" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></a>
<a href="https://github.com/teambit/example-templates/blob/master/README.md#contributing"><img alt="prs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
![Tests](https://github.com/teambit/harmony-base-ui/workflows/Tests/badge.svg)

# Base component design system of Bit.dev

The [reusable set of infra-level React components](https://bit.dev/watheia/base-ui/)
 used to build [Bit.dev](https://bit.dev).

![screenshot](./docs/scope-screenshot.png)


## Components

All components in this frontend codebase were [contained and exposed using Bit](https://github.com/watheia/base-ui) as a set of independently-usable components. See the **[base collection on bit.dev](https://bit.dev/watheia/base-ui/)** to explore and integrate any component into your project.

- Install independent components with npm/yarn.
- Use `bit import` to source and edit components locally for quick editing and integration.
- Try any component hands-on in a live playground.


## This is a component-based micro-frontend

Wait.. what?

The entire bit.dev platform and website **isn't built as one monolithic application**.
Instead, it's built from **[components maintained in different codebases](https://docs.bit.dev/docs/workflows/microfrontends)** which are separately developed, then exposed and integrated together using [Bit](https://github.com/teambit/bit).

### Show me an example!

Take a look our [homepage](https://waweb.vercel.app/).  

You will notice that it's built from components that live in different front-end codebases:

- ["Demo" marketing components](https://github.com/watheia/evangelist).
- [base-ui components](https://github.com/watheia/base-ui).
- Container application (private).
- etc

We use [Bit](https://github.com/teambit/bit) to contain and expose components from any codebase as a set of APIs in [bit.dev](https://bit.dev) that can be integrated into different pages and applications. For example:

- Exposed ["Demo" marketing components] on bit.dev.
- Exposed [base-ui components on bit.dev](https://bit.dev/watheia/base-ui).


## Structure:

### Theme

All shared styles, colors, sizes, fonts, and css variables, belong here.  
[Theme-provider](https://bit.dev/watheia/base-ui/theme/theme-provider) applies all of these styles at the root of your app, and different apps may implement their own unique theme.

### Constants

Hard coded context values, like storage-url and enums. In case of change, this central location could update all other components.

### Layout

Components controlling the position of elements in the document. (Grid, breakpoints, etc)

### Atoms

Generic building blocks for any front end application.  
These components are 'vanilla', meaning they should not contain content (like texts or icons) and no specific styles. This is because different designs could look entirely different, so any styles in the base component could lead to a 'CSS Specificity War'. So, add the bare minimum of css here and keep these components purely logical!

### Utils

Pure logic components and helpers. (no visual components)


### workspace.jsonc

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.

### .bitmap

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.


### Demo Components

A folder (unless the --empty flag was used) containing demo components are included in this workspace. These components are used to demonstrate the different features of Bit. If you would like to remove these components you can run the following command.

```jsx
bit remove "ui/*" --delete files
```

This removes the components from the bitmap as well as removes the files.


## Setup

1. Clone the repository
2. [Install bit](https://docs.bit.dev/docs/installation)
3. Run `bit import` to sync components.
4. Start hacking!
