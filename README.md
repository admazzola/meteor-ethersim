# Meteor EtherSim
The EtherSim provider package wrapped for MeteorJS. Now you can simulate an Ethereum node provider within your Meteor dApps. The `ethersim` node will be run by the Meteor apps server. Please remove `ethersim` as an RPC provider for production use.

## Installation

    First, clone this repo into the 'packages' folder inside of your meteor app.  Create the 'packages' folder if it does not exist.  Then run:

    $ meteor add silentcicero:ethersim

## Usage as Lib

Note, `ethersim` is made a window global.

```javascript
web3.setProvider(ethersim.web3Provider());
```

## Ethersim Github

https://github.com/iurimatias/EtherSim
