import SimpleCrypto from "simple-crypto-js"
// const crypto = require('crypto');
// const keyLength = 32; // Length of the key in bytes
// const cipherKey1 = crypto.randomBytes(keyLength).toString('hex');
// console.log(cipherKey1);

const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "0x90aa3955beee615558d1100c5ab1f7a79288cb554b04535bbc635073fe210ca2";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "0x03A25c6E4BcCD4c5F28b2F0cf62d144bC1d4a6d4";

/*
Global Configurations
*/

/*
Polygon Mumbai Testnet
*/
export var mumErc20 = "";
export var mumCustody = "";
export var mumBridgeNFT = "";
export var mumrpc = "https://matic-mumbai.chainstacklabs.com";

/*
Ethereum Goerli Testnet
*/
export var goeErc20 = "0x503455126A7d4e96d4a309bcCD8C582ceAeC09Be";
export var goeCustody = "0xa439a2D33042A2AD578f3B69923d3613C60d5D37";
export var goeNFT = "0x54f19E17F96Ad3021F566591Dea8e2d2D379B970";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

/*
BSC Testnet
*/
export var bsctErc20 = "0x28740Af9F1cC01Ce1300A46E2406501c7822DEAB";
export var bsctCustody = "0x1F0024f8Bf3Bfc5A0fEcfF42bA2CB42d2865B718";
export var bsctNFT = "0x41874ab9B6f08fCC6ae63253A3d0C9D824bC06d2";
export var bsctrpc = "https://data-seed-prebsc-1-s3.binance.org:8545";

/*
Ethereum Mainnet
*/
export var ethrpc = "https://rpc.ankr.com/eth";

/*
BSC Mainnet
*/

export var bscrpc = "https://bsc-dataseed.binance.org";