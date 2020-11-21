# How to contribute to Private Secure Infra?

## Pre-requirements

It's recommended to use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

[NodeJS](https://nodejs.org/)

```bash
nvm install 15 && nvm use 15
```

[Yarn](https://yarnpkg.com/)

```bash
npm i -g yarn
```

Since this repo is using [Zero-Installs](https://yarnpkg.com/features/zero-installs) no further setup is required.

## Clone and Install dependencies

```bash
# Clone and change directory to private-secure-infra
git clone git@github.com:hex22a-streaming/private-secure-infra.git && cd private-secure-infra

# Install dependencies
yarn install
```

## IDE integration

See yarn's [Editor SDKs] page (https://yarnpkg.com/getting-started/editor-sdks)

```bash
# How to add VSCode integration
yarn dlx @yarnpkg/pnpify --sdk vscode
```
