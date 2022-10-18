import Block from './block.js';


describe('Block', () => {
    let timeStamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timeStamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 'transaction0';
        hash = 'hash0';

    });

    it('Crear instancia con parametros', () => {
        const block = new Block(timeStamp, previousBlock.hash, hash, data);

        expect(block.timeStamp).toEqual(timeStamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);

    });

    it('Usando static mine', () => {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('Usando static hash', () => {
        hash = Block.hash(timeStamp, previousBlock.hash, data);
        const hashOutput = 'f49da68b1fa021d220698745e235e79a4c2178d8a7ea455af41fc31062d1b15c';

        expect(hash).toEqual(hashOutput);
    });

    it('Usando toString', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});