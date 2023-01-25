import { getPublicKey, recoverPublicKey, secp, sign, } from "ethereum-cryptography/secp256k1"
import { toHex } from "ethereum-cryptography/utils"
import { useState } from "react"
import server from "./server";
import { useContext } from "react";
import { AppContext } from "./App";


const Confirmation = (props) => {
	const [signature, setSignature] = useState("")
	const [recoveryBit, setRecoveryBit] = useState(0)
	const [transactionWorked, setTransactionWorked] = useState("")
	const {fulfillTransaction, setFulfillTransaction} = useContext(AppContext)
	

/*	async function testing(event) {
		event.preventDefault(); // 👈️ prevent page refresh
		const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
		const [sig, recoveryBit] = await sign(props.hash, PRIVATE_KEY, {recovered: true})
		const publicKey = getPublicKey(PRIVATE_KEY)
		
		const recovered = recoverPublicKey(props.hash, toHex(sig), recoveryBit);
	}*/
	
	async function recoverKey(event) {
		event.preventDefault(); // 👈️ prevent page refresh
		try {			
			const public_key = recoverPublicKey(props.hash, signature, 0)
			if (toHex(public_key) == props.address)
			{	
				setTransactionWorked("Success! Transaction Confirmed.")
				setFulfillTransaction("Fulfilled")
			}
			else {
				setTransactionWorked("Denied! Something went wrong... Try again.")
			}
		}
		catch (error) {
			console.log(error)
			setTransactionWorked("Denied! Something went wrong... Try again.")
		}
	}
	
	return (
		props.show == false ? <div></div> :
		<div className="container transfer">
			<h1>Your Hash for this transaction: </h1>
			<p>{props.hash}</p>
		<form onSubmit={recoverKey}>
			<h2>Please sign this transaction offline and provide the following:</h2>
		<label>
			Signature (Hexadecimal)
			<input placeholder="Ex: 304502..." value={signature} onChange={(event) => {setSignature(event.target.value)}}/>
			<br></br>
			Recovery Bit
			<input placeholder="Ex: 0" value={recoveryBit} onChange={(event) => setRecoveryBit(event.target.value)}/>
		</label>
		<input type="submit" className="button" value="Transfer" />
		</form>
		{ {transactionWorked} ? <h2>Status: {transactionWorked}</h2> : <h2>Status: ...</h2>}
		</div>
	)
}

export default Confirmation