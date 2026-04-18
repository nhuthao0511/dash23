import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Components
import Sidebar from './components/Sidebar';

// Import Pages
import Dashboard from './page/Dashboard';
import PayoutDashboard from './page/PayoutDashboard';
import Leaderboard from './page/Leaderboard';
import OrderList from './page/OrderList';
import BuyChallenge from './page/BuyChallenge';
import Assets from './page/Assets';
import Settings from './page/Settings';

/**
 * File App.jsx tổng hợp
 * Đã bao gồm đầy đủ tất cả các route theo yêu cầu của bạn.
 */
const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-indigo-500/30">
        
        {/* Sidebar cố định bên trái */}
        <Sidebar />

        {/* Vùng nội dung chính bên phải */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          
          {/* Vùng cuộn nội dung tự động với thanh cuộn tùy chỉnh */}
          <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 custom-scrollbar">
            
            <Routes>
              {/* Trang mặc định khi mở app */}
              <Route path="/" element={<Navigate to="/dashboard" />} />
              
              {/* Định nghĩa các Route tương ứng với menu */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/payout" element={<PayoutDashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/order-list" element={<OrderList />} />
              <Route path="/buy" element={<BuyChallenge />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/settings" element={<Settings />} />

              {/* Redirect nếu người dùng nhập sai đường dẫn */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>

            {/* Tạo khoảng trống ở cuối để tránh nội dung bị sát mép dưới */}
            <div className="h-20" />
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;