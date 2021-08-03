'use strict';

import * as openpgp from 'openpgp';
import * as fs from "fs";

generate();
async function generate() {

    var val = {
        userIDs: [{ name: "Aumer", email: "info@aumerhadi.com" }],
        curve: "curve25519",
        passphrase: "happy"
    }
    try {
        const {privateKey, publicKey} = await openpgp.generateKey(val);
        console.log(privateKey);
        console.log(publicKey);
        fs.writeFileSync("./private.key", privateKey);
        fs.writeFileSync("./public.key", publicKey);
        console.log(`keys generated and written to file...`);
    } catch (error) {
        console.error(error);
    }
}