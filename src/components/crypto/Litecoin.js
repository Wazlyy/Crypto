import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
  

  const ltc = () => (
    

    <TradingViewWidget
    symbol="BINANCE:LTCUSDT"
    theme={Themes.DARK}
    locale="fr"
    autosize
    height="500px"
  />
  
  );
   

export default ltc