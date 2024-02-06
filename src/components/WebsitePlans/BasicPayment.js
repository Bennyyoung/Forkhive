import React from 'react';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';

const FullPaymentConfig = {
    reference: (new Date()).getTime(),
    email: "hello@forkhive.com",
    amount: 4350000,
    publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};

const Pay60PercentConfig = {
    reference: (new Date()).getTime(),
    email: "hello@forkhive.com",
    amount: 2610000,
    publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};

const Pay40PercentConfig = {
    reference: (new Date()).getTime(),
    email: "hello@forkhive.com",
    amount: 1710000,
    publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};


const FullPayment = () => {
    const initializePayment = usePaystackPayment(FullPaymentConfig);
    return (
        <div style={{cursor: 'pointer'}} onClick={() => {
            initializePayment()
        }} className="button button-primary mt-2">
            Pay Full ₦43,500
        </div>
    );
};

const Pay60Percent = () => {
    const initializePayment = usePaystackPayment(Pay60PercentConfig);
    return (
        <div style={{cursor: 'pointer'}} onClick={() => {
            initializePayment()
        }} className="button button-primary mt-2">
            Pay 60% downpayment - ₦26,100
        </div>
    );
};

const Pay40Percent = () => {
    const initializePayment = usePaystackPayment(Pay40PercentConfig);
    return (
        <span style={{cursor: 'pointer'}} onClick={() => {
            initializePayment()
        }} className="button button-primary mt-2">
            Complete your payment - ₦17,400
        </span>
    );
};

function BasicPayment() {
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

export default BasicPayment