const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/b5a6f22685a2490bb87e57582c3e3e75')

web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'Wei'))
})

console.log(web3.utils.sha3('BlockChain'))
console.log(web3.utils.keccak256('BlockChain'))

console.log(web3.utils.soliditySha3('BlockChain'))