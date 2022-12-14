import BlockChain from '../blockchain.js';
import validate from './validate.js';

describe('validate()', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new BlockChain();
    });

    it('Crear cadena valida', () => {
        blockchain.addBlock('transact0');
        blockchain.addBlock('transact1');

        expect(validate(blockchain.blocks)).toBe(true);
    });

    it('Invalidando cadena con un genesis block corrupto', () => {
        blockchain.blocks[0].data = 'h4ck-data';


        expect(() => {
            validate(blockchain.blocks);
        }).toThrowError('Bloque genesis invalido');

    });

    it('Invalidando una cadena con un previousHash corrupto en un block', () => {
        blockchain.addBlock('transact2');
        blockchain.blocks[1].previousHash = 'h4ck-previousHash';


        expect(() => {
            validate(blockchain.blocks);
        }).toThrowError('Hash previo invalido o corrupto');
    });

    it('Invalidando una cadena con un previousHash corrupto en un block', () => {
        blockchain.addBlock('transact3');
        blockchain.blocks[1].hash = 'h4ck-hash';


        expect(() => {
            validate(blockchain.blocks);
        }).toThrowError('Hash invalido');
    });


})