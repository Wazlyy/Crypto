import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
  

  const uni = () => (
    

    <TradingViewWidget
    symbol="BINANCE:UNIUSDT"
    theme={Themes.DARK}
    locale="fr"
  />
  
  );
   

export default uni