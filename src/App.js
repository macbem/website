import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__content">
          <div className="app__header">
            <div className="app__logo"></div>
          </div>
          <div className="app__top">
            <div className="app__main-text-wrapper">
              <div className="app__main-text">
                Uniswap is a protocol for automated token exchange on Ethereum.
              </div>
            </div>
            <button className="btn__primary">Read the docs</button>
          </div>
          <div className="app__arrows">
            <div className="app__line" />
            <div className="app__curves">
              <div className="app__curve-up">
                <i className="app__curve-up__arrow" />
              </div>
              <div className="app__curve-down">
                <i className="app__curve-down__arrow" />
              </div>
            </div>
          </div>
          <div className="app__bottom">
            <div className="app__main-text-wrapper">
              <div className="app__point">• Become a liquidity provider for any ERC20 token</div>
              <div className="app__point">• Pool liquidity to create to create</div>
              <div className="app__point">• Pool liquidity</div>
              <div className="app__point">• Trade any ERC20 for any ERC20 in a single transaction</div>
            </div>
            <button className="btn__primary">Swap Tokens</button>
          </div>
        </div>
        <div className="app__footer">
          <div className="app__special-text">Ethereum Foundation grant recipient</div>
          <div className="app__actions">
            <a href="https://github.com/Uniswap/uniswap-frontend" target="_blank">Github</a>
            <a href="https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig">Whitepaper</a>
            <a href="https://twitter.com/UniswapExchange">Twitter</a>
            <a href="https://www.reddit.com/r/UniSwap/">Reddit</a>
            <a href="#">Email</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
