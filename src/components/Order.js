import React from 'react';
import './order.css';

export default function Order({ purchase }) {
  const { numero, cpf, valorDesconto, valorFrete, valorTotal } = purchase;

  return (
    <div className="orderContainer">
      <div className="items">
        <span>Pedido: </span>
        <span>{numero}</span>
      </div>
      <div className="items">
        <span>CPF: </span>
        <span>{cpf}</span>
      </div>
      <div className="items">
        <span>Desconto: </span>
        <span>{`R$ ${valorDesconto}`}</span>
      </div>
      <div className="items">
        <span>Frete: </span>
        <span>{`R$ ${valorFrete}`}</span>
      </div>
      <div className="items">
        <span>Total: </span>
        <span>{`R$ ${valorTotal}`}</span>
      </div>
    </div>
  );
}
