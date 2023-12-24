# Neroi-me

This is my personal website, bootstrapped from the [T3 Stack](https://create.t3.gg/). This repo also serve perpose as a ground zero for my web development learning and experimentation with cuting edge web technologies(so this project will be a mess).

## Upcoming Experiments

- [] git hooks
- [] Subdomain routing
- [] Testing ??? (maybe)

## Refactor

Curently refactoring this porject to use subdomain routing so the web can be split into different sections (mainly work and personal) and migrate from page router to app router.

Note to self:

- To start refactoring first run `pnpm refactor:prepare` (so pages and app router won't conflict)
- after refactoring run `pnpm refactor:restore`(run this before commiting) maybe add a precommit hook to do this automatically.

TODO:

- [] Migrate from page router to app router
- [] Migrate i18n

## Breaking Changes

- i18n
