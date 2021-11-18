require('dotenv').config();
const {
    parseBrightPearlResponseIntoObjects,
    mapOrderPaymentStatusName,
    removePaidOrders,
    getOtherOrders,
    processOtherOrders,
    processUnpaidOrders
} = require('./brightpearl');

const {
    getUnpaidBrightpearlOrders,
} = require('./api');

const captureUnpaidSalesOrders = async (i) => {
    console.log('Getting sales orders...');
    const orderData = await getUnpaidBrightpearlOrders(i);
    console.log(orderData.response.results.length, 'sales orders found');

    // Bail if no orders
    if (orderData.response.results.length === 0) {
        return;
    }

    // Translate Brightpearl array-based data structure into plain objects
    // and flesh out the Payment Status data
    const orders = parseBrightPearlResponseIntoObjects(orderData).map(o => {
        return mapOrderPaymentStatusName(o, orderData.reference.orderPaymentStatusNames);
    });
    const unpaidOrders = orders.filter(removePaidOrders);
    const otherOrders = orders.filter(getOtherOrders);

    console.log(unpaidOrders.length + otherOrders.length, 'orders to capture');

    if (unpaidOrders.length === 0 && otherOrders.length === 0) {
        return;
    }

    processUnpaidOrders(unpaidOrders);
    processOtherOrders(otherOrders);
};

const main = (e) => {
    console.log(e);
    captureUnpaidSalesOrders(e);
    // setInterval(captureUnpaidSalesOrders, 30000);
};

module.exports = {
    main
}