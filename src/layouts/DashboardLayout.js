import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Home, Calendar, Book, Calculator, Bell, LogOut, Settings } from "lucide-react";

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { name: "Home", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Timetable", icon: <Calendar size={20} />, path: "/dashboard/timetable" },
    { name: "CGPA", icon: <Calculator size={20} />, path: "/dashboard/cgpa" },
    { name: "Courses", icon: <Book size={20} />, path: "/dashboard/courses" },
    { name: "Reminders", icon: <Bell size={20} />, path: "/dashboard/reminders" },
    { name: "Settings", icon: <Settings size={20} />, path: "/dashboard/settings" },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg flex flex-col transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {sidebarOpen && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-800">StudiRad</h2>
              <p className="text-xs text-gray-400 mt-1">Student Portal</p>
            </div>
          )}
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "❮" : "❯"}
          </button>
        </div>

        <nav className="flex-1 px-2 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-indigo-100 to-purple-50 text-indigo-700 font-semibold shadow"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {item.icon}
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full bg-indigo-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-indigo-500 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
              S
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
