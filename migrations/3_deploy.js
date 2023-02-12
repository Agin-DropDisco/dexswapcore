const WBTC = artifacts.require("WBTC");
const WBNB = artifacts.require("WBNB");
const USDT = artifacts.require("USDT");
const USDC = artifacts.require("USDC");


const argValue = (arg, defaultValue) => process.argv.includes(arg) ? process.argv[process.argv.indexOf(arg) + 1] : defaultValue
const network = () => argValue('--network', 'local')


module.exports = async (deployer) => {

    const BN = web3.utils.toBN;
    const bnWithDecimals = (number, decimals) => BN(number).mul(BN(10).pow(BN(decimals)));
    const senderAccount = (await web3.eth.getAccounts())[0];

    if (network() === "mantleTestnet") {

        console.log();
        console.log(":: Start Deploying Mock WBNB");
        await deployer.deploy(WBNB);
        const WBNBInstance = await WBNB.deployed();


        console.log();
        console.log(":: Start Deploying Mock WBTC");
        await deployer.deploy(WBTC);
        const WBTCInstance = await WBTC.deployed();

        console.log();
        console.log(":: Start Deploying Mock USDT");
        await deployer.deploy(USDT);
        const USDTInstance = await USDT.deployed();

        console.log();
        console.log(":: Start Deploying Mock USDC");
        await deployer.deploy(USDC);
        const USDCnstance = await USDC.deployed();


        console.log("MINT WBTC <> USDT <> USDC <> WBNB");
        await WBNBInstance.mint(senderAccount,    bnWithDecimals(100000, 8),   { from: senderAccount }); 
        await WBTCInstance.mint(senderAccount,    bnWithDecimals(100000, 8),   { from: senderAccount }); 
        await USDTInstance.mint(senderAccount,    bnWithDecimals(100000, 8),   { from: senderAccount }); 
        await USDCnstance.mint(senderAccount,     bnWithDecimals(100000, 8),   { from: senderAccount }); 
        console.log();


        console.log("====================================================================");
        console.log(`WBTC Address:`,         WBTCInstance.address);
        console.log("====================================================================");

        console.log("====================================================================");
        console.log(`WBNB Address:`,         WBNBInstance.address);
        console.log("====================================================================");

        console.log("====================================================================");
        console.log(`USDT Address:`,         USDTInstance.address);
        console.log("====================================================================");

        console.log("====================================================================");
        console.log(`USDC Address:`,         USDCnstance.address);
        console.log("====================================================================");

    } else if (network() === "matic") {
    }
};
