const url = "wss://ws-feed.pro.coinbase.com";

const ws = new WebSocket(url)


  ws.onopen = () => {
    const msg = {
      type: "subscribe",
      channels: ["full"],
      product_ids: ["BTC-USD"],
    };
    ws.send(JSON.stringify(msg));
  };   ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
 // console.log(data)
  };