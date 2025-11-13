import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return navigate("/login");
      const userDoc = await getDoc(doc(db, "users", currentUser.uid));
      if (!userDoc.exists()) return navigate("/login");
      setUser(userDoc.data());
    };
    fetchUser();
  }, [navigate]);

  if (!user) return <p>Loading dashboard...</p>;

  const studyData = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 3 },
    { day: "Wed", hours: 4 },
    { day: "Thu", hours: 3 },
    { day: "Fri", hours: 5 },
    { day: "Sat", hours: 1 },
    { day: "Sun", hours: 2 },
  ];

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome back, {user.fullName.split(" ")[0]} 👋
        </h2>
        <p className="text-gray-500 mt-1">
          Your personalized analytics at a glance.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Courses", value: 5 },
          { title: "Study Hours", value: 20 },
          { title: "CGPA", value: 3.8 },
          { title: "Reminders", value: 3 },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white/60 backdrop-blur-md shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <p className="text-gray-400 text-sm">{card.title}</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">{card.value}</h3>
          </div>
        ))}
      </div>

      {/* Study Hours Chart */}
      <div className="bg-white/60 backdrop-blur-md shadow-md rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Study Hours Trend
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={studyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="hours" stroke="#6366F1" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/60 backdrop-blur-md shadow-md rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
        <ul className="space-y-2">
          <li className="p-3 rounded-lg hover:bg-gray-100 transition flex justify-between">
            <span>Completed Chapter 3 in Anatomy</span>
            <span className="text-gray-400 text-sm">2h ago</span>
          </li>
          <li className="p-3 rounded-lg hover:bg-gray-100 transition flex justify-between">
            <span>Joined new course: Radiography Basics</span>
            <span className="text-gray-400 text-sm">5h ago</span>
          </li>
          <li className="p-3 rounded-lg hover:bg-gray-100 transition flex justify-between">
            <span>Set a new reminder for Monday</span>
            <span className="text-gray-400 text-sm">1d ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
