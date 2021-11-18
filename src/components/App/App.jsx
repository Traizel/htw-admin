import React, { useState } from "react";
import './App.css';
const {
    main
} = require('../server/index');

function App () {

    const [interval, setInterval] = useState(3);

    const BPOrderCapture = () => {
        main(interval)
    }

    return (
        <>
        <div className="App">
            <h1>Heat Transfer Warehouse Admin Portal</h1>
        </div>
        <section>
            <div className="container">
                <h3>Affiliate App</h3>
                <ul>
                    <li><a href="https://affiliates.heattransferwarehouse.com/" target="_blank">Open App</a></li>
                    <li><a href="https://github.com/cneisen234/affiliate_orders" target="_blank">Github</a></li>
                </ul>
            </div>
            <div className="container">
                <h3>Decoqueue</h3>
                <ul>
                    <li><a href="https://decoqueue.heattransferwarehouse.com/" target="_blank">Open App</a></li>
                    <li><a href="https://github.com/cneisen234/decovibe_queue" target="_blank">Github</a></li>
                </ul>
            </div>
            <div className="container">
                <h3>Order Calculator</h3>
                <ul>
                    <li><a href="http://orderapp.heattransferwarehouse.com/" target="_blank">Open App</a></li>
                    <li><a href="https://github.com/cneisen234/order_calc" target="_blank">Github</a></li>
                </ul>
            </div>
            <div className="container">
                <h3>No Stock Notify</h3>
                <ul>
                    <li><a href="https://nostock.heattransferwarehouse.com/" target="_blank">Open App</a></li>
                    <li><a href="https://github.com/Traizel/HTW-No-Stock-Nofify" target="_blank">Github</a></li>
                </ul>
            </div>
        </section>
        <div>
            <h3>Interval (Minutes)</h3>
            <input type="number" value={interval} onChange={(e) => (setInterval(e.target.value))}/>
            <br/>
            <br/>
            <button onClick={(e) => (BPOrderCapture())}>Manual Order Capture (BrightPearl)</button>
        </div>
        </>
    )
}

export default App;