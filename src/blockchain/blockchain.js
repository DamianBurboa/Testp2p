import Block from "./block.js";
import validate from "./modules/validate.js";

class BlockChain {
    constructor() {
        this.blocks = [Block.genesis];
    }

    addBlock(data) {
        const previousBlock = this.blocks[this.blocks.length - 1];
        const block = Block.mine(previousBlock, data);

        this.blocks.push(block);

        return block;
    }

    replace(newBlocks = []) {
        if (newBlocks.length < this.blocks.length) throw Error('La cadena recibida no es más larga que la cadena actual.');
        try {
          validate(newBlocks);
        } catch (error) {
          throw Error('Cadena recibida invalida');
        }
    
        this.blocks = newBlocks;
    
        return this.blocks;
      }
}

export default BlockChain;