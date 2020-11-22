import React from 'react';
import './App.css';
import { PSWidget } from 'paraswap-widget';
import 'paraswap-widget/dist/PSWidget.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PSWidget
          referrer="my_company"
          providerUrl={'https://mainnet.infura.io/v3/3c9b697bcf414df8b2e59f7f5523a93a' + process.env.INFURA_ID}
          unlimitedAllowance={false}
          bgColor={'#DDD'}
          defaultPair={{ from: 'ETH', to: 'DAI', amount: '1' }}
        />
      </header>
    </div>
  );
}

export default App;
