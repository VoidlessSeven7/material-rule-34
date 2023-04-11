# Rule 34 App

A Progressive Web App to browse popular Rule 34 Hentai Porn for free.

## Usage

Use the following link to use it on any device that has a _modern_ internet browser.
_This includes Android, iOS and most consoles like the PS4 And Xbox One._

**[✨ https://r34.app ✨](https://r34.app/?utm_source=Reddit&utm_medium=New_Post)**

## Screenshots

![Posts](https://i.imgur.com/uOiZbXw_d.png?maxwidth=400&fidelity=high) ![Search](https://i.imgur.com/DmsT5TA_d.png?maxwidth=400&fidelity=high)

## Information

### Supported Boorus

This app can browse the following Boorus.

- rule34.xxx
- rule34.paheal.net
- danbooru.donmai.us
- gelbooru.com
- e621.net
- safebooru.org
- e926.net

### Documentation

Links to useful information.

- [Frequently Asked Questions](https://docs.r34.app/frequently-asked-questions)
- [How to install the App](https://docs.r34.app/app-installation)

## Social

### Twitter

Follow the Rule 34 App on **[Twitter](https://twitter.com/Rule34App)** for announcements, tips, discount codes and more.

![Twitter badge](https://img.shields.io/twitter/follow/Rule34App?style=for-the-badge)

### Discord

Join the **[Discord](https://redirect.r34.app/discord)** community to keep up with the updates of the project and
receive support.

![Discord badge](https://img.shields.io/discord/656241666553806861?style=for-the-badge)

## Support

This project has various costs: domain, email, hosting, Cloudflare worker, maintenance, etc.

I am a student, so I'm not really in a position to maintain everything from my pocket...

So if you want to help me continue working on the App, you can [make a donation](https://docs.r34.app/donations).

## Technicalities

### Languages

HTML, CSS, JavaScript, NodeJS, NPM.

### Frameworks and tools

NuxtJS, VueJS, TailwindCSS, Webpack, etc.

## API

This App uses an [API](https://github.com/Rule-34/API) to communicate with all the Boorus.

## Development

### Requirements

- NodeJS >= 12
- NPM

### Setup

#### Git Submodules

Use `git clone --recursively` because [this repository](https://github.com/Rule-34/Shared-Resources) is used to share
some necessary resources.

#### Environment variables

```bash
# Modify .env file
cp .env.example .env
```

#### NodeJS

```bash
# Install dependencies
npm install

# Serve with hot reload at localhost:8080
npm run dev

# Generate static project
npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
