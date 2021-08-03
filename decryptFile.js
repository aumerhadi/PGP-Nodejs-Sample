'use strict';

import * as openpgp from 'openpgp';
import * as fs from "fs";

const privateKey = fs.readFileSync("./private.key", 'utf8');
const encryptedMessage = fs.readFileSync("encrypted-message.txt", 'utf8');

decryptMessage();
async function decryptMessage() {
    const passphrase = `happy`;
    const pKey = await openpgp.decryptKey({
        privateKey: await openpgp.readPrivateKey({ armoredKey: privateKey }),
        passphrase
    });

    console.log(pKey);
    try {  
        const { data: decrypted, signatures } = await openpgp.decrypt({
            message: await openpgp.readMessage({ armoredMessage: encryptedMessage }),
            decryptionKeys: pKey
        });
        console.log(decrypted)
        fs.writeFileSync("./decrypted-message.txt", decrypted);
    } catch (error) {
        console.error(error);
    }
}