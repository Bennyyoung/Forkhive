import React from 'react';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';

const config = {
    reference: (new Date()).getTime(),
    email: "softbloom28@gmail.com",
    amount: 20000,
    publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button style={{color: 'white', backgroundColor: '#eba937', padding: '5px 10px', borderRadius: '8px'}} onClick={() => {
                initializePayment()
            }}>Pay</button>
        </div>
    );
};

function Payment() {
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

export default Payment