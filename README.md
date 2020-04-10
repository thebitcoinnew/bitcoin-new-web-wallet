# BitcoinNew Web Wallet

BitcoinNew Web Wallet is a fully client-side signing wallet for sending and receiving [Btcnew](https://github.com/btcnewcurrency/raiblocks) 
on your [desktop](https://github.com/thebitcoinnew/bitcoin-new-web-wallet/releases) or [in your browser](https://webwallet.bitev.be)

![BtcnewVault Screenshot](https://s3-us-west-2.amazonaws.com/webwallet.bitev.be/BtcnewVault-Preview.png)
___

# Table of Contents
* [Install](#install-bitcoin-new-web-wallet)
* [Bugs/Feedback](#bugsfeedback)
* [Application Structure](#application-structure)
* [Development Prerequisites](#development-prerequisites)
* [Development Guide](#development-guide)
* [Acknowledgements](#acknowledgements)


# Install BitcoinNew Web Wallet
BitcoinNew Web Wallet is available on your desktop (Windows/Mac/Linux) - just head over to the [releases section](https://github.com/thebitcoinnew/bitcoin-new-web-wallet/releases) and download the latest version for your OS.

You can also use BitcoinNew Web Wallet from any device on the web at [webwallet.bitev.be](https://webwallet.bitev.be)


# Bugs/Feedback
If you run into any issues, please use the [GitHub Issue Tracker](https://github.com/thebitcoinnew/bitcoin-new-web-wallet/issues)
We are continually improving and adding new features based on the feedback you provide, so please let your opinions be known!

___

#### Everything below is only for contributing to the development of BitcoinNew Web Wallet
#### To download BitcoinNew Web Wallet go to the [releases section](https://github.com/thebitcoinnew/bitcoin-new-web-wallet/releases), or use the web wallet at [webwallet.bitev.be](https://webwallet.bitev.be)

___

# Application Structure

The application is broken into a few separate pieces:

- [BitcoinNewVault](https://github.com/thebitcoinnew/bitcoin-new-web-wallet) - The main wallet application (UI + Seed Generation/Block Signing/Etc).
- [BitcoinNewVault-Server](https://github.com/thebitcoinnew/bitcoin-new-web-wallet-server) - Serves the Wallet UI and brokers public communication between the wallet and the Btcnew Node.
- [BitcoinNewVault-WS](https://github.com/thebitcoinnew/bitcoin-new-web-wallet-ws) - Websocket server that receives new blocks from the Btcnew node and sends them in real time to the wallet ui.


# Development Prerequisites
- Node Package Manager: [Install NPM](https://www.npmjs.com/get-npm)
- Angular CLI: `npm install -g @angular/cli`


# Development Guide
#### Clone repository and install dependencies
```bash
git clone https://github.com/thebitcoinnew/bitcoin-new-web-wallet
cd bitcoin-new-web-wallet
npm install
```

#### Run the wallet in dev mode
```bash
npm run wallet:dev
```

## Build Wallet (For Production)
Build a production version of the wallet for web:
```bash
npm run wallet:build
```

Build a production version of the wallet for desktop: *(Required for all desktop builds)*
```bash
npm run wallet:build-desktop
```

## Desktop Builds

*All desktop builds require that you have built a desktop version of the wallet before running!*

Run the desktop wallet in dev mode:
```bash
npm run desktop:dev
```

Build the desktop wallet for your local OS (Will be in `dist-desktop`):
```bash
npm run desktop:local
```

Build the desktop wallet for Windows+Mac+Linux (May require dependencies for your OS [View them here](https://www.electron.build/multi-platform-build)):
```bash
npm run desktop:full
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Acknowledgements
Special thanks to the following!
- [numtel/btcnew-webgl-pow](https://github.com/numtel/btcnew-webgl-pow) - WebGL PoW Implementation
- [jaimehgb/RaiBlocksWebAssemblyPoW](https://github.com/jaimehgb/RaiBlocksWebAssemblyPoW) - CPU PoW Implementation
- [dcposch/blakejs](https://github.com/dcposch/blakejs) - Blake2b Implementation
- [dchest/tweetnacl-js](https://github.com/dchest/tweetnacl-js) - Cryptography Implementation

