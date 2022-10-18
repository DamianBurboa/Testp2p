import express from "express";
import bodyParser from "body-parser";

import BlockChain from "../blockchain/blockchain.js";
import { restart } from "nodemon";

const { HTTP_PORT = 3000} = process.env;

const app = express();
const blockchain = new BlockChain();

app.use(bodyParser.json());

app.get('/blocks',  (req, res) => {
    res.json(blockchain.blocks);
});

app.post('/mine', (req, res) => {
    const { body: { data } } = req;
    const block = blockchain.addBlock(data);

    restart.json({
        blocks: blockchain.blocks.length,
        block,
    });
})

app.listen(HTTP_PORT, () => {
    console.log(`Service HTTP: ${HTTP_PORT} listening...`);
});