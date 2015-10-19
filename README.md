# Meteor Ethersim
The ethersim provider package wrapped for MeteorJS. Now you can simulate an Ethereum node provider within Meteor.

## Installation

    $ meteor add silentcicero:ethersim

## Usage as Lib

```javascript
var ethersim = require('ethersim');
var web3 = require('web3');

web3.setProvider(ethersim.web3Provider());
```

## Ethersim Github

https://github.com/iurimatias/EtherSim
