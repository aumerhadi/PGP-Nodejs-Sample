'use strict';

import * as openpgp from 'openpgp';
import * as fs from "fs";

const publicKey = fs.readFileSync("./public.key", 'utf8');
const plainData = fs.readFileSync("text.txt", 'utf8');

encrypt();
async function encrypt() {
    const pKay = await openpgp.readKey({ armoredKey: publicKey });
    //console.log(pKay);
    try {  
        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: plainData }),
            encryptionKeys: pKay
        });
        console.log(encrypted)
        fs.writeFileSync("./encrypted-message.txt", encrypted);
    } catch (error) {
        console.error(error);
    }
}