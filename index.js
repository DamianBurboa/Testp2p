import PKG from './package.json';
import Block from './src/blockchain/block.js';

const { name, version } = PKG;

console.log(`${name} v${version}`);

const { genesis } = Block;
console.log(genesis.toString());

const block = Block.mine(genesis, 'trasact1');
console.log(block.toString());

const block_2 = Block.mine(block, 'trasact2');
console.log(block_2.toString());


/*
const block = new Block(Date.now(), genesis.hash, 'h4sh', 'd4ta');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'h4sh-block2', 'd4ta-2');
console.log(block2.toString());
*/
