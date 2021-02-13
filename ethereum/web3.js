import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined'){
    // in browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}
else{
    // we are on the server or user do not have metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/3f2f5e20071a4cbe9dd30a0090ff6402'
    );
    web3 = new Web3(provider);
}
export default web3;