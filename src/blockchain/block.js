import { SHA256 } from 'crypto-js';

class Block{
    constructor(timeStamp, previousHash, hash, data) {
        this.timeStamp = timeStamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;

    }

    static get genesis(){
        const timeStamp = (new Date(2000, 0, 1)).getTime();
        return new this(timeStamp, undefined, 'g3n3sis-h4sh', 'g3n3sis-d4t4');
    }

    static mine(previousBlock, data) {
        const timeStamp = Date.now();
        const { hash: previousHash } = previousBlock;
        const hash = Block.hash(timeStamp, previousHash, data);
       

        return new this(timeStamp, previousHash, hash, data);
    }

    static hash(timeStamp, previousBlock, data){
        return SHA256(`${timeStamp}${previousBlock}${data}`).toString();
    }

    toString() {
        const { timeStamp, previousHash, hash, data } = this;

        return `Block -
            timeStamp: ${timeStamp}
            previousHash: ${previousHash}
            hash: ${hash}
            data: ${data}
            `
    }
}

export default Block;