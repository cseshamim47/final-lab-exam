"use client"
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation"
const Sales = async () => {


  

    const router = useRouter()
    const data = [
        { channel: 'A', today: 10, lastSevenDays: 70 },
        { channel: 'B', today: 20, lastSevenDays: 140 },
        { channel: 'C', today: 30, lastSevenDays: 210 },
      ];

      await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div>
        <h1>Sales</h1>
        {data.map((item, index) => (
        <div key={index}>
          <h2>Channel {item.channel}</h2>
          <p>Products sold today: {item.today}</p>
          <p>Products sold in the last seven days: {item.lastSevenDays}</p>
        </div>
      ))}
        <button onClick={()=>router.push('/system/sales/physical_store')}>Physical Store</button>
        <button onClick={()=>router.push('/system/sales/social_media')}>Social Media</button>
        <button onClick={()=>router.push('/system/sales/ecommerce')}>Ecommerce Web App</button>
    </div>
  )
}
export default Sales