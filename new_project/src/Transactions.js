import { Alchemy, Network } from "alchemy-sdk";
import { Utils } from "alchemy-sdk";
import { useState } from "react";
import MoreInfoTx from "./MoreInfoTx";

export const Transactions = (props) => {
  let i = 0;

  const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");
  let [amount, setAmount] = useState(0);
  let [selectedIndex, setSelectedIndex] = useState(null);

  async function getMoreInfo(hash) {
    try {
      let response = await alchemy.core.getTransaction(hash);
      setFrom(response.from);
      setTo(response.to);
      setAmount(Utils.formatEther(parseInt(response.value._hex).toString()));
      setSelectedIndex(hash);
    } catch {
      alert("Something went wrong... Try again!");
    }
  }

  return (
    <div className="transactions">
      <h1>List of Txs:</h1>
      {props.txs.map((el, i) => {
        return (
          <ul key={i}>
            {el}{" "}
            <button
              onClick={() => {
                getMoreInfo(el);
              }}
            >
              More Info
            </button>
            {selectedIndex === el && (
              <MoreInfoTx from={from} to={to} amount={amount} />
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default Transactions;
