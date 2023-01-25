import { useState } from "react";
import server from "./server";
import Confirmation from "./Confirmation";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils"
import { keccak256 } from "ethereum-cryptography/keccak"
import { useContext } from "react";
import { AppContext } from "./App";

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const {fulfillTransaction, setFulfillTransaction} = useContext(AppContext)

  const setValue = (setter) => (evt) => setter(evt.target.value);
  
  
  async function transfer() {
    // evt.preventDefault();
	if (fulfillTransaction == "Fulfilled") {	
		try {
			const {
				data: { balance },
			} = await server.post(`send`, {
				sender: address,
				amount: parseInt(sendAmount),
				recipient,
			});
			setBalance(balance);
			setFulfillTransaction("Not Fulfilled")
			alert("Success! Reloading page...")
			window.location.reload(false)
		} catch (ex) {
			alert(ex.response.data.message);
		}
	}
  }
  
  const [hashedMessage, setHashedMessage] = useState("")
  
  const provideHash = (evt) => {
	evt.preventDefault(); // 👈️ prevent page refresh
	let message = `Send ${parseInt(sendAmount)} ETH to ${recipient} from ${address}`
	let utf8_message = utf8ToBytes(message)
	let hashed_message = keccak256(utf8_message)
	setHashedMessage(toHex(hashed_message))
}

  return (
	<div>
	    <form className="container transfer" onSubmit={provideHash}>
      <h1>Transaction Details</h1>
      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
		  ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
		  ></input>
      </label>
      <input type="submit" className="button" value="Get Hash" />
    </form>
	{hashedMessage ? <Confirmation hash={hashedMessage} address={address}/> : <div></div> }
	{fulfillTransaction === "Fulfilled" ? <button className="button" onClick={transfer}>Confirm Transaction</button> : <div></div>}
	</div>
  );
}

export default Transfer;
