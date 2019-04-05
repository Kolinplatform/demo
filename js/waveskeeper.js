// JavaScript Document

//If a website is trusted, Waves Keeper public data are returned.
 function trigger(){WavesKeeper.publicState()
        .then(state => {
            console.log(state); //displaying the result in the console
            /*...processing data */
        }).catch(error => {
            console.error(error); // displaying the result in the console
            /*...processing errors */
        })}
//Allows subscribing to Waves Keeper events.
 function subscribe(){ WavesKeeper.on("update", state => {
        //state object as from WavesKeeper.publicState
   });}
//login with Waveskeeper
 function login(x){const authData = { 
        data: "Generated string from server",
        name: "Kolin Private v.0.1",
        icon: "images/favicon.ico",
        referrer: "https://demo.kolinplatform.com",
        successPath: "index.html"
    };
				 

    WavesKeeper.auth(authData).then((data) => {
        //data – data from Waves Keeper
        //verifying signature and saving the address...
        console.log(data);
		 $('.address')
			 .html('Your current active address: <b>' + res.address + '</b>')
    }).catch((error) => {
        //processing the error
		
    }) 
				}
//Sign transference with Waveskeeper
var WavesAddress = document.getElementById("WavesAddress").value;
var Amount = document.getElementById("Amount").value;
function sendkolin(){
	const txData = {
           type: 4,
           data: {
               amount: {
                  assetId: "FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW",
                  tokens: Amount,
               },
               fee: {
                   assetId: "FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW",
                   tokens: "200"
               },
               recipient: WavesAddress,
           }
       };
       WavesKeeper.signAndPublishTransaction(txData).then((data) => {
           //data - a line ready for sending to Waves network's node (server)
       }).catch((error) => { 
           //processing errors
		    console.error("Something went wrong", error);
       });}

//Lease Kolin

function lease(){WavesKeeper.signTransaction({
        type: 8,
        data: {
             "amount": 100000,
			"assetId": "FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW",
             "recipient": "3PGsboZa7nvTMcAhL8jzPtrXGjsgU8yKWeQ",
             fee: {
                 "tokens": "200",
                 "assetId": "FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW"
             }
        }
   }).then((tx) => {
        console.log("You've leased Kolin!");
   }).catch((error) => {
        console.error("This feature isn't still avaialble", error);
   });}

//buykolin
var btotal = parseInt(document.getElementById("btotal").value);
var bprice = parseInt(document.getElementById("bprice").value);
var bamount = parseInt(document.getElementById("bamount").value);
function buybtckolin(){WavesKeeper.signOrder({
        type: 1002,
        data: {
             matcherPublicKey: "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
             orderType: "buy",
             expiration: Date.now() + 100000,
             amount: {
                 tokens: bamount,
                 assetId: "FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW"
             },
             price: {
                 tokens: bprice,
                 assetId: "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS"
             },
             matcherFee: {
                 tokens: "0.03",
                 assetId: "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've signed an order!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });}

//sellkolin
var stotal = document.getElementById("stotal").value;
var sprice = document.getElementById("sprice").value;
var samount = document.getElementById("samount").value;
function sellbtckolin(){WavesKeeper.signOrder({
        type: 1002,
        data: {
             matcherPublicKey: "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
             orderType: "sell",
             expiration: Date.now() + 100000,
             amount: {
                 tokens: samount,
                 assetId: "FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW"
             },
             price: {
                 tokens: sprice,
                 assetId: "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS"
             },
             matcherFee: {
                 tokens: "0.03",
                 assetId: "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've signed an order!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });}
// cancel order
function cancelorder(){WavesKeeper.signAndPublishCancelOrder({
        type: 1003,
        data: {
            id: '31EeVpTAronk95TjCHdyaveDukde4nDr9BfFpvhZ3Sap'
        }
    }).then(() => {
        console.log("Order cancelled");
    }).catch((error) => {
        console.error("Something went wrong", error);
    });}
//create alias

 function alias(){WavesKeeper.signAndPublishTransaction({
        type: 10,
        data: {
             alias: "testAlias",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Your new alias has been created");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });}