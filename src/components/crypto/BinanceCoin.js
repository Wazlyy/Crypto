import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
  

  const bnb = () => (
    

    <TradingViewWidget
    symbol="BINANCE:BNBUSDT"
    theme={Themes.DARK}
    locale="fr"
    autosize
    height="500px"
  />
  
  );
   

export default bnb