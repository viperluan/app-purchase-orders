import React from 'react';
import Order from './Order';

import './purchaseOrders.css';

export default function PurchaseOrders({ purchaseOrders, numberOfRequests }) {
  console.log(purchaseOrders);

  const orders = purchaseOrders.map((order) => {
    const {
      numero,
      cpfCnpjCliente,
      valorDesconto,
      valorFrete,
      valorTotal,
    } = order;

    return {
      numero,
      cpf: cpfCnpjCliente,
      valorDesconto,
      valorFrete,
      valorTotal,
    };
  });

  return (
    <div id="flexBox">
      <div id="requests">Requests: {numberOfRequests}</div>
      {orders.map((order) => {
        return <Order key={order.numero} purchase={order} />;
      })}
    </div>
  );
}
