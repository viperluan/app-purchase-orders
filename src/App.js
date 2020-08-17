import React, { useState, useEffect } from 'react';
import './styles/global.css';

import axios from 'axios';

import PurchaseOrders from './components/PurchaseOrders';

function App() {
  const BASE_URL = 'http://localhost:3001/';

  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [numberOfRequests, setNumberOfRequests] = useState(0);

  useEffect(() => {
    const getPurchases = async () => {
      const response = await axios.get(BASE_URL);
      const orders = response.data.orders;
      const requests = response.data.requests;

      setPurchaseOrders(orders);
      setNumberOfRequests(requests);
    };

    getPurchases();
  }, []);

  return (
    <div>
      <PurchaseOrders
        purchaseOrders={purchaseOrders}
        numberOfRequests={numberOfRequests}
      />
    </div>
  );
}

export default App;
