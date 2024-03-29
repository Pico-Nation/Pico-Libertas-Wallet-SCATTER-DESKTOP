const {assert} = require('chai');
require('electron-mocha');
require("babel-polyfill");
const ecc = require('picojs-ec');
const Signature = require('elliptic/lib/elliptic/ec/signature');
const LedgerWallet = require("../../electron/hardware/LedgerWallet");


let ledger;
describe('ledger', () => {

	it('should be able to open a transport', done => {
		new Promise(async() => {
			const setup = await LedgerWallet.setup();
			assert(setup, 'Did not set the ledger up');
			ledger = new LedgerWallet('pico');
			ledger.open();
			done();
		})
	})

	it('should be able to get public keys for PICOIO', done => {
		new Promise(async() => {
			const key = await ledger.getAddress(0);
			console.log('key', key);
			done();
		})
	})


});