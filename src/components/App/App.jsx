import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import './App.css';

function App () {

    return (
        <>
        <div className="App">
            <h1 className="headerName">Heat Transfer Warehouse Admin Portal</h1>
        </div>
        <section>
            <div className="container">
                <h3>Affiliate App</h3>
                <ul>
                    <li><a href="https://affiliates.heattransferwarehouse.com/" target="_blank"><LaunchIcon/></a></li>
                    <li><a href="https://github.com/cneisen234/affiliate_orders" target="_blank"><GitHubIcon/></a></li>
                </ul>
            </div>
            <div className="container">
                <h3>Decoqueue</h3>
                <ul>
                    <li><a href="https://decoqueue.heattransferwarehouse.com/" target="_blank"><LaunchIcon/></a></li>
                    <li><a href="https://github.com/cneisen234/decovibe_queue" target="_blank"><GitHubIcon/></a></li>
                </ul>
            </div>
            <div className="container">
                <h3>Order Calculator</h3>
                <ul>
                    <li><a href="http://orderapp.heattransferwarehouse.com/" target="_blank"><LaunchIcon/></a></li>
                    <li><a href="https://github.com/cneisen234/order_calc" target="_blank"><GitHubIcon/></a></li>
                </ul>
            </div>
            <div className="container">
                <h3>No Stock Notify</h3>
                <ul>
                    <li><a href="https://nostock.heattransferwarehouse.com/" target="_blank"><LaunchIcon/></a></li>
                    <li><a href="https://github.com/Traizel/HTW-No-Stock-Nofify" target="_blank"><GitHubIcon/></a></li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default App;