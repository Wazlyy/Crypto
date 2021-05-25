import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
  

  const btc = () => (
    

    <TradingViewWidget
    symbol="BINANCE:UNIUSDT"
    theme={Themes.DARK}
    locale="fr"
  />
  
  );
   

export default btc