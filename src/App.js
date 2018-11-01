import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.scss';

const b = text => <span className="text--bold">{text}</span>;

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__content">
          <div className="app__header">
            <div className="app__logo">
              <img src={logo} />
            </div>
          </div>
          <div className="app__spacing" />
          <div className="app__top">
            <div className="app__main-text-wrapper">
              <div className="app__main-text">
                Uniswap is a protocol for automated token exchange on Ethereum.
              </div>
            </div>
            <div className="app__mobile-button-group">
              <button
                className="btn__primary"
                onClick={() => window.open('https://docs.uniswap.io/', '_blank')}
              >
                Read the docs
              </button>
              <button
                className="btn__primary"
                onClick={() => window.open('https://uniswap.exchange/', '_self')}
              >
                Swap Tokens
              </button>
            </div>
            <button className="btn__primary" onClick={() => window.open('https://docs.uniswap.io/', '_blank')}>Read the docs</button>
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
              <div className="app__point">
                -> A <a href="https://github.com/Uniswap/contracts-vyper" target="_blank" rel="noopener">{b`simple smart contract`}</a> interface for swapping ERC20 tokens
              </div>
              <div className="app__point">
                -> A <a href="https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf" target="_blank" rel="noopener">{b`formalized model`}</a> for pooling liquidity reserves
              </div>
              <div className="app__point">
                -> An <a href="https://github.com/Uniswap/uniswap-frontend" target="_blank" rel="noopener">{b`open source frontend`}</a> interface for traders and liquidity providers
              </div>
              <div className="app__point">
                -> A commitment to free and decentralized asset exchange
              </div>
            </div>
            <button className="btn__primary" onClick={() => window.open('https://uniswap.exchange/', '_self')}>
              Swap Tokens
            </button>
          </div>
        </div>
        <div className="app__footer">
          <div
            className="app__special-text"
            onClick={() => window.open('https://blog.ethereum.org/2018/08/17/ethereum-foundation-grants-update-wave-3/', '_blank')}
          >
            Ethereum Foundation grant recipient ↗
          </div>
          <div className="app__actions">
            <a href="https://github.com/Uniswap" target="_blank" rel="noopener">GitHub</a>
            <a href="https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig" target="_blank" rel="noopener">Whitepaper</a>
            <a href="https://twitter.com/UniswapExchange" target="_blank" rel="noopener">Twitter</a>
            <a href="https://www.reddit.com/r/UniSwap/" target="_blank" rel="noopener">Reddit</a>
            <a href="mailto:contact@uniswap.io">Email</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
