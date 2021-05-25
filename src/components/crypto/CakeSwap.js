import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
  

  const cake = () => (
    

    <TradingViewWidget
    symbol="BINANCE:CAKEUSDT"
    theme={Themes.DARK}
    locale="fr"
    autosize
    height="500px"
  />
  
  );
   

export default cake