import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
  

  const doge = () => (
    

    <TradingViewWidget
    symbol="BINANCE:DOGEUSDT"
    theme={Themes.DARK}
    locale="fr"
    autosize
    height="500px"
  />
  
  );
   

export default doge