import React from 'react'

class Trending extends React.Component {      
      test() {
        const script = document.createElement("script");
        script.src = "./test.js";
        script.async = true;
        document.body.appendChild(script);
          };

    render() { 
      return (
        <div className="tab">
          <p>test</p>
       <button className="tablinks" onClick="openView(event, 'btc')" id="defaultOpen">Bitcoin</button>
      <button className="tablinks" onClick="openView(event, 'eth')">Ethereum</button>
      <button className="tablinks" onClick="openView(event, 'ltc')">Litecoin</button>
      <button className="tablinks" onClick="openView(event, 'ada')">Cardano</button>
      <button className="tablinks" onClick="openView(event, 'dot')">Polkadot</button>
      <button className="tablinks" onClick="openView(event, 'link')">Chainlink</button>
      <button className="tablinks" onClick="openView(event, 'bnb')">Binance</button>
      <button className="tablinks" onClick="openView(event, 'beam')">Beam</button>
      <button className="tablinks" onClick="openView(event, 'grt')">The Graph</button>
      <button className="tablinks" onClick="openView(event, 'sol')">Solana</button> */}
    </div>
        
      );
  };
}
export default Trending