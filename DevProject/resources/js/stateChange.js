window.onload = function () {

    // check to see if user has metamask addon installed on his browser. check to make sure web3 is defined
    if (window.ethereum) {
        window.ethereum.enable().catch((err) =>
            alert("You need to allow metamask accounts access to use this website.")
        );
    } else {
        document.getElementById('metamask').innerHTML = 'You need <a href=”https://metamask.io/">MetaMask</a> browser plugin to run this example';
    }
    // call the getvalue function here
    getvalue();
}

function setValueSimple() {
    try {
        // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
        var abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "storeData",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x4abe3052"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "new_value",
                        "type": "string"
                    }
                ],
                "name": "setValue",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x93a09352"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getValue",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x20965255"
            }
        ]

        //contract address. please change the address to your own
        var contractaddress = "0x9CA27E862f33FC3c049828aD37618D48d690252f";

        //instantiate and connect to contract address via Abi
        var myAbi = web3.eth.contract(abi);
        var myfunction = myAbi.at(contractaddress);

        //call the get function of our SimpleStorage contract
        myfunction.setValue.sendTransaction(document.getElementById("xvalue").value,
            {from: web3.eth.accounts[0], gas: 4000000}, function (error, result) {
                if (err) {
                    console.log(err)
                }
                if (xname) {
                    //display value on the webpage
                    document.getElementById("xbalance").innerHTML = xname;
                }
            });
    }
    catch (err) {
        document.getElementById("xbalance").innerHTML = err;
    }
}

function setValue() {
    try {

        var abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "storeData",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x4abe3052"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "new_value",
                        "type": "string"
                    }
                ],
                "name": "setValue",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x93a09352"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getValue",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x20965255"
            }
        ]

        var contractAddress = "0x9CA27E862f33FC3c049828aD37618D48d690252f";
        var value = document.getElementById("xvalue").value;
        var web3js = new Web3(window.web3.currentProvider);

        var MyContract = new web3js.eth.Contract(abi, contractAddress ,{from :"0xF86B30C63E068dBB6bdDEa6fe76bf92F194Dc53c" });

        MyContract.methods.setValue(value).send()
            .on("transactionHash",hash=> {
                console.log("transactionHash :: ");
                console.log(hash);
            })
            .once("confirmation",hash=>{
                getvalue();
                console.log(hash);
            })
            .on("receipt", (receipt) => {
                console.log("receipt :: ");
                console.log(result);
            })
            .on('error', console.error);

       /* MyContract.methods.setValue(value).send()
            .then(function (result) {
                alert(result);
                return result;
            }).on("confirmation",hash=>{
                console.log(hash);
        });*/
    }
    catch (err) {
        document.getElementById("xbalance").innerHTML = err;
    }
}

//function to retrieve the last inserted value on the blockchain
function getvalue() {
    try {
        // contract Abi defines all the variables,constants and functions of the smart contract. replace with your own abi
        var abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "storeData",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x4abe3052"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "new_value",
                        "type": "string"
                    }
                ],
                "name": "setValue",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function",
                "signature": "0x93a09352"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getValue",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function",
                "signature": "0x20965255"
            }
        ]

        //contract address. please change the address to your own
        var contractaddress = '0x9CA27E862f33FC3c049828aD37618D48d690252f';

        //instantiate and connect to contract address via Abi
        var myAbi = web3.eth.contract(abi);
        var myfunction = myAbi.at(contractaddress);
        //call the get function of our SimpleStorage contract
        myfunction.getValue.call(function (err, xname) {
            if (err) {
                console.log(err)
            }
            if (xname) {
                //display value on the webpage
                document.getElementById("xbalance").innerHTML = xname;
            }
        });
    }
    catch (err) {
        document.getElementById("xbalance").innerHTML = err;
    }
}