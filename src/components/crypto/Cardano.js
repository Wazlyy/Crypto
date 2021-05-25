import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
  

  const ada = () => (
    

    <TradingViewWidget
    symbol="BINANCE:ADAUSDT"
    theme={Themes.DARK}
    locale="fr"
    autosize
    height="500px"
  />
  
  );
   

export default ada