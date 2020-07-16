import React from 'react';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';

const config = {
    reference: (new Date()).getTime(),
    email: "softbloom28@gmail.com",
    amount: 9850000,
    publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div style={{cursor: 'pointer'}} onClick={() => {
            initializePayment()
        }} className="button button-primary mt-2">
            Pay ₦98,500
        </div>
    );
};

function SilverPayment() {
    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: () => null,
        onClose: () => null
    };

  return (
    <div>
        <PaystackHookExample />
        {/* <PaystackButton {...componentProps} />
        <PaystackConsumer {...componentProps} >
            {({initializePayment}) => <button onClick={() => initializePayment()}>Paystack Consumer Implementation</button>}
        </PaystackConsumer> */}
    </div>
  );
}

export default SilverPayment