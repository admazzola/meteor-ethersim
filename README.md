# Meteor Ethersim
The ethersim provider package wrapped for MeteorJS. Now you can simulate an Ethereum node provider within Meteor. The `ethersim` server will be run in the backend by the Meteor dApp server. Please remove `ethersim` as an RPC provider for production use.

## Installation

    $ meteor add silentcicero:ethersim

## Usage as Lib

Note, `ethersim` is made a window global.

```javascript
web3.setProvider(ethersim.web3Provider());
```

## Ethersim Github

https://github.com/iurimatias/EtherSim
