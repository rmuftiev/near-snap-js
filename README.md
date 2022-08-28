SNAP Connection with NEAR Counter Example in Rust
=================================

## To run SNAP

`git clone https://github.com/rmuftiev/snap-near-js-api.git`
`cd snap-near-rpc`
`chmod +x ./scripts/cleanup.sh`
`./scripts/cleanup.sh`
`yarn install`
`yarn add @metamask/key-tree`
`yarn build`
`yarn run serve`



Smart Contract in NEAR
=================================

## Description

This contract is an example of a Smart contract in Rust. implements simple counter backed by storage on blockchain.
Contract in `contract/src/lib.rs` provides methods to increment / decrement counter and get it's current value or reset.

Plus and minus buttons increase and decrease value correspondingly.


## Steps to follow 

Clone the repo
```
git clone https://github.com/rmuftiev/hackdays-rust-counter-simple.git 
```

Go to the folder
```
cd hackdays-rust-counter-simple
```

Install dependencies:

```
yarn
```

If you don't have `Rust` installed, complete the following 3 steps:

1) Install Rustup by running:

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```


2) Configure your current shell by running:

```
source $HOME/.cargo/env
```

3) Add wasm target to your toolchain by running:

```
rustup target add wasm32-unknown-unknown
```


Optional - Put your contract address in neardev/dev-account


Go for it

```
yarn start
```


## Near Account Creation

Go to https://wallet.testnet.near.org/ and follow rthe steps to create an account in testnet



## Optional - Near Installation

Next, make sure you have `near-cli` by running:

```
near --version
```

If you need to install `near-cli`:

```
npm install near-cli -g
```

## Optional - Near Login

If you want to create a NEAR account in Mainnet, please create one with [NEAR Wallet](https://wallet.testnet.near.org).

In the project root, login with `near-cli` by following the instructions after this command:

```
near login
```

Modify the top of `src/config.js`, changing the `CONTRACT_NAME` to be the NEAR account that was just used to log in.

```javascript
…
const CONTRACT_NAME = 'YOUR_ACCOUNT_NAME_HERE'; /* TODO: fill this in! */
…
```

## To Explore

- `contract/src/lib.rs` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract
