"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PhysicalStore = () => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const history = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    history.push('/system/sales/physical_store');
  }

  return (
    <div>
      <h1>Physical Store</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Product Id" value={productId} onChange={(e) => setProductId(e.target.value)} />
        <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
        <input type="text" placeholder="Unit Price" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
        <input type="text" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <input type="text" placeholder="Total Price" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => history.push('/system/sales/physical_store/sales_log')}>View Sales Log</button>
      <div>
        <h2>Dashboard</h2>
        <p>Items sold today: 10</p>
        <p>Items sold in the last seven days: 70</p>
        <p>Most sold item: Item A</p>
        <p>Average sales this month: $100</p>
      </div>
    </div>
  );
}

export default PhysicalStore;