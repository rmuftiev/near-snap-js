import "regenerator-runtime/runtime";
import { initContract, login, logout, getCounter, counterIncrement,
         counterDecrement, counterReset } from './near/utils'

function resetUI(){
  document.querySelector('#show').classList.add('loader');
  //document.querySelector('#show').innerText = '';
}

// Buttons - Interact with the Smart Contract
document.querySelector('#plus').addEventListener('click', async () => {
  resetUI();
  await counterIncrement();
  await updateUI();
});

document.querySelector('#minus').addEventListener('click', async  () => {
  resetUI();
  await counterDecrement();
  await updateUI();
});

document.querySelector('#reset').addEventListener('click', async  () => {
  resetUI();
  await counterReset();
  await updateUI();
});

// Log in and log out users using NEAR Wallet
document.querySelector('.sign-in .btn').onclick = login;
document.querySelector('.sign-out .btn').onclick = logout;

// `nearInitPromise` gets called on page load
window.nearInitPromise = initContract()
                    .then(flow)
                    .catch(console.error)

function flow(){
  if (window.walletConnection.isSignedIn()){
    signedInFlow()
  }else{
    signedOutFlow()
  }
  updateUI()
}

// Display the signed-out-flow container
function signedOutFlow() {
  document.querySelector('.sign-in').style.display = 'block';
}

// Displaying the signed in flow container and display counter
async function signedInFlow() {
  document.querySelector('.sign-out').style.display = 'block';
  document.getElementById('account-id').innerText = window.accountId;
}

async function updateUI(){
  let count = await getCounter();
  
  document.querySelector('#show').classList.remove('loader');
  document.querySelector('#show').innerText = count === undefined ? 'calculating...' : count;
}