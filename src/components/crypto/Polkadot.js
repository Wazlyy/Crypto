import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
  

  const dot = () => (
    

    <TradingViewWidget
    symbol="BINANCE:DOTUSDT"
    theme={Themes.DARK}
    locale="fr"
    autosize
    height="500px"
  />
  
  );
   

export default dot