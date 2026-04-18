import React from 'react';
import { Tag, Clock, CheckCircle2 } from 'lucide-react';

const OrderList = () => {
  const orders = [
    { id: "ORD-9921", plan: "Pro $50k Challenge", date: "Apr 12, 2026", status: "Active", price: "$299.00" },
    { id: "ORD-8854", plan: "Starter $10k Challenge", date: "Mar 20, 2026", status: "Completed", price: "$99.00" },
  ];

  return (
    <div className="flex-1">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white mb-1">Order List</h1>
        <p className="text-gray-500 text-sm">Track your purchase history and active plans.</p>
      </div>

      <div className="bg-[#141414] rounded-[24px] border border-gray-800/50 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#1a1a1a]/50 text-gray-500 text-[11px] uppercase tracking-widest">
            <tr>
              <th className="px-8 py-5">Order ID</th>
              <th className="py-5">Plan Name</th>
              <th className="py-5">Purchase Date</th>
              <th className="py-5">Price</th>
              <th className="py-5">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-800/50 text-gray-300">
                <td className="px-8 py-6 font-medium text-indigo-400">{order.id}</td>
                <td className="py-6 font-bold text-white">{order.plan}</td>
                <td className="py-6">{order.date}</td>
                <td className="py-6 font-bold">{order.price}</td>
                <td className="py-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase 
                    ${order.status === 'Active' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-green-500/10 text-green-500'}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;