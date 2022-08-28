import { getBIP44AddressKeyDeriver } from '@metamask/key-tree';
import "regenerator-runtime/runtime";
//import { getConfig } from './assets/js/near/config.js';
//import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
//import { initContract, login, logout, getCounter, counterIncrement, counterDecrement, counterReset } from './assets/js/near/utils.js';


async function getFees() {
  let response = await fetch('https://etherchain.org/api/gasnow');
  return response.text();
}


module.exports.onRpcRequest = async ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      const metadata = JSON.parse(await getFees());
      const fees = metadata.data;
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `Hello, ${origin}!`,
            description:
              'This custom confirmation is just for display purposes.',
            textAreaContent:
              'Standard fees: ' + fees.standard.toString(),
          },
        ],
      });

    case 'custom':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `We are in, ${origin}!`,
            description:
              '<p>This one is just testing</p>',
            textAreaContent:
              '<input>Hmmm we need to think out</input>',
          },
        ],
      });

    case 'entropy':
      const nearNode = await wallet.request({
        method: 'snap_getBip44Entropy_397',//NEAR
      });
    
      const deriveNearAddress = await getBIP44AddressKeyDeriver(nearNode);
      // m / 44' / 3' / 0' / 0 / 0
      const addressKey0 = await deriveNearAddress(0);
      // m / 44' / 3' / 0' / 0 / 1
      const addressKey1 = await deriveNearAddress(1);
      console.log(addressKey0);
      console.log(addressKey1);

    case 'notify':
      return wallet.request({
        method: 'snap_notify',
        params: [
          {
            type: 'inApp',
            message: `Hello, world!`,
          },
        ],
      });

    default:
      throw new Error('Method not found.');
  }
};
