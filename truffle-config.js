const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

const mnemonic = process.env.MNEMONIC;
// const { TruffleProvider } = require('@harmony-js/core');




module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {

    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`),
      network_id: 4,
      gas: 0,
      gasPrice: 2100000001, //3 Gwei,
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, "https://polygon-testnet.public.blastapi.io"),
      network_id: 80001,
      gas: 0,
      gasPrice: 2100000001, //3 Gwei,
      skipDryRun: true
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },

  build: {},

  compilers: {
    solc: {
      version: '0.5.16',
      settings: {
        evmVersion: 'istanbul',
      }
    }
  },
  
  mocha: {
    // timeout: 100000
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
};
