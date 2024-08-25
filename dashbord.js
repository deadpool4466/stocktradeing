import React from 'react';


import './Dashboard.css'; 


function Dashboard() {
  return (
    <div className="bg-container">
      <div className="menu-items-container">
        <h1 className="icon-heading">
          STOKS<br /> <span className="second-heading">TRADE</span>
        </h1>
        <div className="menu">
          <div>
            <ul className="menu-list">
              <li className="menu-item-selected">
                <img className="icon" src='./images/dashboard.png' alt='dashboard'/>
                <p className='para-items'>Dashboard</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/crm.png' alt='crm'/>
                <p className='para-items'>CRM</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/stock.png' alt='mam'/>
                <p className='para-items'>MAM</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/tax.png' alt='pamm'/>
                <p className='para-items'>PAMM</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/stock-market.png' alt='trade'/>
                <p className='para-items'>Trade</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/wallet.png' alt='wallet'/>
                <p className='para-items'>Wallet</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/accounting.png' alt='acc'/>
                <p className='para-items'>Accounts</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/history.png' alt='history'/>
                <p className='para-items'>History</p>
              </li>
            </ul>
          </div>
          <div className="menu-list-2">
            <ul className="menu-list">
              <li className="menu-item">
                <img className="icon" src='./images/active.png' alt='notify'/>
                <p className='para-items'>Notification</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/settings.png' alt='setting'/>
                <p className='para-items'>Settings</p>
              </li>
              <li className="menu-item">
              <img className="icon" src='./images/customer-support.png' alt='help'/>
                <p className='para-items'>Help & Support</p>
              </li>
              <li className="menu-item">
                <img className="icon" src='./images/logout.png' alt='logout'/>
                <p className='para-items'>Log Out</p>
              </li>
            </ul>
            <hr />
            <div className="profile-det">
            <img className="profile-icon" src='./images/user (1).png' alt='profile'/>
              <div>
                <h1 className="profile-heading">Shyam Shakur</h1>
                <p className="profile-para">shyam01.shankur@gm..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content">
            <div class="Dashboard-container">

                <div class="Dashboard-top-content">
                    <h1 class="main-heading">Dashboard</h1>
                    <div class="search-box">
                        <img className='icon' src='./images/search (2).png' alt='seacrch'/>
                        <input type="search" class="search-input" placeholder="Search" />
                        <img className="icon" src='./images/active.png' alt='notify'/>
                    </div>
                </div>

                <div class="section-01">
                    <div>
                    <div className="Quick-Links-container">
                <h1 className="Quick-Links-heading">Quick Links</h1>
                <div className="Quick-Links-card-contanier">
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/deposit.png' alt='dep'/>
                    <p className="Quick-Links-card-para">Deposit</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/money-withdrawal.png' alt='with'/>
                    <p className="Quick-Links-card-para">Withdraw</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/settings.png' alt='setting'/>
                    <p className="Quick-Links-card-para">Setting</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/search (3).png' alt='verfy'/>
                    <p className="Quick-Links-card-para">Verification</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/money-transfer.png' alt='mts'/>
                    <p className="Quick-Links-card-para">MTS</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/in-stock.png' alt='trans'/>
                    <p className="Quick-Links-card-para">Transfer</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/bonus.png' alt='bo'/>
                    <p className="Quick-Links-card-para">Bonuses</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/collaborate.png' alt='patt'/>
                    <p className="Quick-Links-card-para">Partner</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/exchange.png' alt='exch'/>
                    <p className="Quick-Links-card-para">Exchange</p>
                  </div>
                  <div className="Quick-Links-card">
                    <img className="icon" src='./images/data.png' alt='mts'/>
                    <p className="Quick-Links-card-para">Analytics</p>
                  </div>
                </div>
              </div>

              <div className="bar-graph-container">
                <div className="bar-graph-container-heading-section">
                  <h1 className="Quick-Links-heading">Overview</h1>
                  <p className="para"><img className="icon" src='./images/file.png' alt='download'/>Download Report</p>
                </div>
                <div className="month-box">
                  <p className="month-para">Monthly</p>
                  <button className="btn-year">Yearly</button>
                </div>
                <div className="bar-graph">
                  <div className="bar" style={{ height: '60%' }}></div>
                  <div className="bar" style={{ height: '80%' }}></div>
                  <div className="bar" style={{ height: '40%' }}></div>
                  <div className="bar" style={{ height: '70%' }}></div>
                  <div className="bar" style={{ height: '90%' }}></div>
                  <div className="bar" style={{ height: '80%' }}></div>
                  <div className="bar" style={{ height: '40%' }}></div>
                  <div className="bar" style={{ height: '70%' }}></div>
                  <div className="bar" style={{ height: '90%' }}></div>
                  <div className="bar" style={{ height: '40%' }}></div>
                  <div className="bar" style={{ height: '70%' }}></div>
                  <div className="bar" style={{ height: '90%' }}></div>
                  <div className="bar" style={{ height: '80%' }}></div>
                </div>
                <div className='btn-box'>
                  <button className='buy-btn'>Buy/Long</button>
                  <button className='sell-btn'>Sell/Short</button>
                </div>
              </div>

                    </div>
                    <div>
                    <div className="trading-acc-conatiner">
                <h1 className="trading-acc-heading">Trading Account</h1>
                <div className="trading-acc-card">
                  <p className="trading-acc-para">Master Account</p>
                  <p className="trading-acc-para2">CTrader</p>
                  <p className="usd-text">0.00 <label className="usdt-text">USD</label><img className="icon3" src='./images/dollar.png' alt='mts'/></p>
                </div>
                <div className="trading-acc-card">
                  <p className="trading-acc-para">Master Account</p>
                  <p className="trading-acc-para2">CTrader</p>
                  <p className="usd-text">0.00 <label className="usdt-text">USD</label><img className="icon3" src='./images/dollar.png' alt='mts'/></p>
                </div>
              </div>

                        <div class="Open-Trades-container">
                            <h1 class="trading-acc-heading">Open Trades</h1>
                            <div class="Open-Trades-card">
                                <h1 class="Open-Trades-card-heading">GBPUSD <label class="Open-Trades-card-heading2">Long</label><label class="Open-Trades-card-para">0.12</label></h1>
                                <p class="money-in-usd">+56.00<label class="USD-text01">USD</label></p>
                            </div>

                            <div class="Open-Trades-card">
                                <h1 class="Open-Trades-card-heading">USDJPY <label class="Open-Trades-card-heading2">Long</label><label class="Open-Trades-card-para">0.52</label></h1>
                                <p class="money-in-usd-red">-0.09<label class="USD-text01">USD</label></p>
                            </div>

                            <div class="Open-Trades-card">
                                <h1 class="Open-Trades-card-heading">EURUSD <label class="Open-Trades-card-heading2-red">Short</label><label class="Open-Trades-card-para">0.34</label></h1>
                                <p class="money-in-usd-red">-1.09<label class="USD-text01">USD</label></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
