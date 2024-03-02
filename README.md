# Neroi-me

This is my personal website, bootstraped from the [T3 Stack](https://create.t3.gg/). This repo also serve perpose as a ground zero for my web development learning and experimentation with cuting edge web technologies(so this project will be a mess).

## Resources

[Can I redirect from a subdomain to a subpath?](https://vercel.com/guides/can-i-redirect-from-a-subdomain-to-a-subpath#configuring-a-rewrite-with-'has'-field)

## Before you start

edit your hosts file to add the following line

```txt
127.0.0.1   work.localhost
127.0.0.1   personal.localhost
```

now you can access the website at `work.localhost:3000` or `personal.localhost:3000`

## Upcoming Experiments

- ~~git hooks~~
- ~~Subdomain routing~~
- Testing ??? (maybe)

## Refactor

Curently refactoring this porject to use subdomain routing so the web can be split into different sections (mainly work and personal) and migrate from page router to app router.

Note to self:

- To start refactoring first run `pnpm refactor:prepare` (so pages and app router won't conflict)
- after refactoring run `pnpm refactor:restore`(run this before commiting) maybe add a precommit hook to do this automatically.

TODO:

- ~~Migrate from page router to app router~~
- ~~Migrate i18n~~
- Migrate next-auth to authjs

## Breaking Changes

- ~~i18n~~
