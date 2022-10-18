import Block from "../block.js";

export default(blockchain) => {
    const [ genesisBlock, ...blocks ] = blockchain;
    if(JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis)) throw Error('Bloque genesis invalido');

    for(let i = 0; i < blocks.length; i++){

        const { previousHash, timeStamp, hash, data } = blocks[i];

        const previousBlock = blockchain[i];

        if(previousHash !== previousBlock.hash) throw Error('Hash previo invalido o corrupto');
        if(hash !== Block.hash(timeStamp, previousHash, data)) throw Error('Hash invalido');
    }

    return true;
}