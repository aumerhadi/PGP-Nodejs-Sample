# PGP-Nodejs-Sample
Sample Nodejs code use PGP encryption
The code has 3 js files generateKeys, encryptFile, and decryptFile and 1 text file text.txt
* generateKeys.js will generate a public and private keys and save them in 2 separate files in the project folder (public.key and private.key)
* encryptFile.js will use the public key to encrypt the text.txt and save it in a new file (encrypted-message.txt)
* decryptFile.js will decrypt the encrypted file (encrypted-message.txt) by using the private key and save it in a new file (decrypted-message.txt)

## Getting Started
### Prerequisites
* node.js

## prepare the code
Before you start using the code you will need to download all the dependencies, run this command inside the project folder

> npm install (install dependencies)

### To generate public and private key 
> node generateKeys

### to encrypt file
> node encryptFile

### to decrypt file 
> node decryptFile

## Reference
- https://github.com/openpgpjs/openpgpjs
