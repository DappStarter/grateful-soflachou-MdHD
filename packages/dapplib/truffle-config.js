require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remind hospital grid glide flee space'; 
let testAccounts = [
"0xfff1b62cbbd04fcdb304aa213590cd4ae373533c6db2443c23db20e701d5ec03",
"0x5e3ebeadb4f105d16d12f801598c3a17feb1cae13e23ca66e9b28774b5190bd8",
"0x049a2a54c1b2d7b2591e4e8027da93001c412e28a2e1e80713c3206bb09071bf",
"0x08023f2f4aa837f2e3cdac6677c05e58bf15e4b3892fb785596587e090225fad",
"0x6f7b911da76542a0f64539029022da2b770937a31e1994c452caff83cf4a9242",
"0x28da2efb5518bd68812d577b176e7e789e879cb11da529a1318340c86b57feb7",
"0xbaa485fbdc6b68ef917a72205a477551b56d468ca8d8f007811208ab792967ec",
"0x3cef7b799ee6fabc0f4d9b7b5d7728fe04d4bc6418372311ded969f3332c9da3",
"0x10ac2510a516052d01299045ffdb09b044bc0220f004beeeddb2126a8753373a",
"0x6340cdbf06f41bdc5e45330461657995d3c407f170325f06f30a76796795d983"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


