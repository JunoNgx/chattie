# Chattie: A conversation prompt generator

**Chattie** is a social tool and a conversational helper, whose function is to generate a prompt (which is also categorised into selectable topics) that would facilitate a conversation in a group of two or more people.

## Deployment

The project is deployed at [chattie-juno.vercel.app](https://chattie-juno.vercel.app/about).

## Features

* Progressive Web App-compliant
* Selectable prompt topics
* Selectable light/dark mode and accent colour

## Tech stack

This project is made with:

* [VueJS 3](https://vuejs.org/)
* [VueRouter](https://router.vuejs.org/)
* [VueX](https://vuex.vuejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [SASS preprocessor](https://sass-lang.com/) ([indented syntax](https://sass-lang.com/documentation/syntax))

## Project Objectives

* Create a practical tool to help solve a real-life problem
* Refamiliarise myself with the ecosystem of VueJS
* Try the indented syntax of SASS
* Acquire further experience with Typescript

## Challenges and Learning Points

* At the time of the project, there were multiple ways use VueJS, namely the **options API** and the newly introduced **compositional API**. I was not able to find a clear explanation of the pros and cons of each choice. I ended up choosing the more common way, just for personal experience.
* Adding more features halfway across the project was a hassle. Vue cli-tool, upon adding *Typescript*, *VueX*, and *Router*, made major changes to the project codes, especially in the entry point component `App.vue`.
* The addition of **VueX** invalidated major portions of my early codebase, such as passing down data from the parent to child components.
* The addition of **Typescript** caused seemingly confusing changes to the way the API functioned. It took me a while to understand how `defineComponent()` worked.
* There were caveats in using the SASS indented syntax (such as the inability to break a line with functions with long arguments).
* Vue 3 invalidates a lot of tutorials due to the lack of the presence of `webpack.config.js`.

## Setup and compilation

```
yarn
yarn serve
```

## License

The project is released under MIT License.