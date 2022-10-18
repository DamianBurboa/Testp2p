import BlockChain from "./blockchain.js";
import Block from "./block.js";


describe('BlockChain', () => {
    let blockchain;
    let blockchainB;

    beforeEach(() => {
        blockchain = new BlockChain();
        blockchainB = new BlockChain();
    });

    it('Valida que la cadena tenga un blocke genesis', () => {
        const [genesisBlock] = blockchain.blocks;

        expect(genesisBlock).toEqual(Block.genesis);
        expect(blockchain.blocks.length).toEqual(1);
    });

    it('Funciona addBlock()', () => {
        const data = 'd4t4';
        blockchain.addBlock(data);

        const [, lastBlock] = blockchain.blocks;

        expect(lastBlock.data).toEqual(data);
        expect(blockchain.blocks.length).toEqual(2);
    });

    it('Prueba de remplazo de cadana con otra cadena valida', () => {
        blockchainB.addBlock('bl4ck-1');
        blockchain.replace(blockchainB.blocks);
    
        expect(blockchain.blocks).toEqual(blockchainB.blocks);
    });
    
    it('No remplaza la cadena con una de menor longitud', () => {
        blockchain.addBlock('block-1');

        expect(() => {
            blockchain.replace(blockchainB.blocks);
        }).toThrowError('La cadena recibida no es más larga que la cadena actual.');
    });

    it('Sin remplazar la cadena con una que es invalida', () => {
        blockchainB.addBlock('block-1');
        blockchainB.blocks[1].data = 'block-h4ck';

        expect(() => {
            blockchain.replace(blockchainB.blocks);
        }).toThrowError('Cadena recibida invalida');
    });
});