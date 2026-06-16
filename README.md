# Aoyuki

![Aoyuki](/public/assets/repo/aoyuki-demo.png "Aoyuki")


Aoyuki is a static blog template in Astro, forked from Fuwari and Yukina, optimized for Github Pages and other static hosters.

## Installation

In a new repo, run:
```sh
git clone https://github.com/wlft/aoyuki.git aoyuki
```

Then, remove the `.git` folder manually or by running `rm -rf .git` to remove the history. After that, you can either run `git init` or use any other version manager as usual, or none!

## Running

1. [Install NodeJS v24 or above](https://nodejs.org/en), if not already installed
2. Enable pnpm:
   - `corepack enable`
   - `corepack enable pnpm`
3. Run `pnpm install`
4. Run either `pnpm run build` or `pnpm run dev` to host Aoyuki on your local machine.

## Deploying to GitHub Pages

Aoyuki was re-designed from its predecessors in order to be easy to use when it comes to static hosters such as GitHub Pages. In most cases, Aoyuki can be deployed in minutes just from GitHub.com. To deploy Aoyuki yourself, start at your GitHub repository that has Aoyuki inside. From there, open the (repository) Settings page ath the top, then find the Pages button. Next, enable GitHub pages and choose to deploy from Actions. You may need to wait a few minutes before Aoyuki is deployed to <your-username>.github.io/<repository-name>. Please note that for normal GitHub users without a PRO subscription that repositories must be public to access GitHub Pages. If the `.github` deploy CI script is not there, Aoyuki will fail to deploy.
