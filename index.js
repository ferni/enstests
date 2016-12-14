var ENS = require('ethereum-ens');
var Web3 = require('web3');
var Registrar = require('eth-registrar-ens')

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var ens = new ENS(web3, '0x112234455c3a32fd11230c42e7bccd4a84e02010');

var registrar = new Registrar(web3, ens.owner('eth'), 7, 'eth', ens.registry.address);
registrar.getEntry('exchange', (err, res) => console.log(res));
