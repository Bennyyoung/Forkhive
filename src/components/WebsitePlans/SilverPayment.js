import React from 'react';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';

const FullPaymentConfig = {
    reference: (new Date()).getTime(),
    email: "softbloom28@gmail.com",
    amount: 9650000,
    publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};

const Pay60PercentConfig = {
    reference: (new Date()).getTime(),
    email: "softbloom28@gmail.com",
    amount: 5790000,
    publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};

const Pay40PercentConfig = {
    reference: (new Date()).getTime(),
    email: "softbloom28@gmail.com",
    amount: 3860000,
    publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};


const FullPayment = () => {
    const initializePayment = usePaystackPayment(FullPaymentConfig);
    return (
        <div style={{cursor: 'pointer'}} onClick={() => {
            initializePayment()
        }} className="button button-primary mt-2">
            Pay FULL ₦96,500
        </div>
    );
};

const Pay60Percent = () => {
    const initializePayment = usePaystackPayment(Pay60PercentConfig);
    return (
        <div style={{cursor: 'pointer'}} onClick={() => {
            initializePayment()
        }} className="button button-primary mt-2">
            Pay 60% DOWNPAYMENT - ₦57,900
        </div>
    );
};

const Pay40Percent = () => {
    const initializePayment = usePaystackPayment(Pay40PercentConfig);
    return (
        <div style={{cursor: 'pointer'}} onClick={() => {
            initializePayment()
        }} className="button button-primary mt-2">
            Complete your payment  - ₦38,600
        </div>
    );
};

function SilverPayment() {
    // const componentProps = {
    //     ...config,
    //     text: 'Paystack Button Implementation',
    //     onSuccess: () => null,
    //     onClose: () => null
    // };

  return (
    <div>
        <FullPayment />
        <div><b>OR</b></div> 
        <Pay60Percent />
        <div><b>Then</b></div>
        <Pay40Percent />
        {/* <PaystackButton {...componentProps} />
        <PaystackConsumer {...componentProps} >
            {({initializePayment}) => <button onClick={() => initializePayment()}>Paystack Consumer Implementation</button>}
        </PaystackConsumer> */}
    </div>
  );
}

export default SilverPayment