import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState, createContext } from "react";
import Confirmation from "./Confirmation";

export const AppContext = createContext()

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [fulfillTransaction, setFulfillTransaction] = useState("Not Fulfilled")

  return (
    <div className="app">
	<AppContext.Provider value={{fulfillTransaction, setFulfillTransaction}}>	
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
		/>
      <Transfer setBalance={setBalance} address={address} />
	  <Confirmation show={false}/>
	</AppContext.Provider>
    </div>
  );
}

export default App;
