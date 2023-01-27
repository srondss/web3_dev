const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/QVTDR1fBoaYUwTovCllv79lrvSOvMCgq";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBalance",
  params: [
    "0xb6ba287fEC37e74682D06D068144eD821C6B9969", // my address
"latest"
  ]
}).then((response) => {
  console.log(response.data.result);
});


