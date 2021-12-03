require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind essay hidden enroll frame that'; 
let testAccounts = [
"0xc50224dcfb62063fbc42051facd65a003487cb61c3bf452bf5937bd381f70d51",
"0x64fb32f206445a0d76fcf36f9ae50fe9f7fd85fd1081d51e8d9dae8b5a67f09c",
"0xbdbf6e842b27450e59ce41802476039b4d5776c52bd9a6f97e9ab73b28baea1e",
"0x293ece603f69665eb7290441b37983fa1c5310cc0aace5a3ff100c306266df0b",
"0xed6152aebb69d5ff9fcceb53f03d4dde4ce9125a5d94afde679aaf42397693be",
"0x4fbb438535869050f0687c52c3aaaaf4e4ff75980abe4f359a65df85a932271f",
"0x130e255f467af8211df4aa9edbc72168d201cc5e1c98b5b9e8af305e1a61cb46",
"0xe6ef397037bc906df1527c6e38445fe19f3a6ccd70c119ce46e4c5c4d96bc86b",
"0x9261a33bb1ced2e548449a8183551b20c8e40a7e7b98d06842099088247aa852",
"0xa8299d5c1a032ba981ec95a43d972c0bee2f832dbdce5bdd2bdbc1065bca7b83"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

