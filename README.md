# StateChangeUI
Interact with Smart Contract to send a transaction to change the state of a variable on Ethereum Block chain.

### Pre-requisites :
1. Install Metamask in your browser (Chrome : webstore , Mozilla: Add-ons). Code will show a message if its not installed.
2. Signup in Metamask and add some ether in your Ropsten Test Network because all the transactions fee will be deducted from you account..

## How to run the code.
Open index.html in your browser. You can see the existing value like "last inserted value into the blockchain is :	Hello User"

Enter a new value in the given text box "Insert a new value" and click "Add to blockchain", it will open your metamask notification screen. Press "confirm" to move forward.

After the confirmation the transaction will be sent to the blockchain and after few seconds , the new will appear on the screen.

## How to see my transaction on exchange.
Press F12, while doing the transaction. Here you can see a Transaction hash like

"0x4c37f91b3aa15c2f2a3a6f......"

Copy your transaction hash and open "https://ropsten.etherscan.io/" and enter your transaction hash in the search box.

You will see the *status* as "pending" or "successfull" with some additional details of your transaction like Transaction Fee, input Data.
