import React from "react";
import img from "../assets/images/homePage.jpeg"; // gambar utamamu
import "../style/Dashboard.css";
export default function DashboardPage() {
  return (
    <div className="dashboard-wrapper">

    {/* TOP SECTION */}
    <h1 className="title-large">Welcome back, Alex!</h1>
    <p className="subtitle-gray">Here's your system-wide overview for today.</p>

    {/* 4 STAT CARDS */}
    <div className="stat-grid">
        <div className="panel-card">
            <p className="card-subtext">Total MW Capacity</p>
            <h2 className="card-number">1,204 MW</h2>
            <p className="card-indicator">↑ +1.2%</p>
        </div>

        <div className="panel-card">
            <p className="card-subtext">Active Projects</p>
            <h2 className="card-number">86</h2>
            <p className="card-indicator">↑ +2.1%</p>
        </div>

        <div className="panel-card">
            <p className="card-subtext">System Alerts</p>
            <h2 className="card-number">3</h2>
            <p className="card-indicator">↓ -5.0%</p>
        </div>

        <div className="panel-card">
            <p className="card-subtext">CO2 Savings</p>
            <h2 className="card-number">5.8M Tons</h2>
            <p className="card-indicator">↑ +0.8%</p>
        </div>
    </div>

    {/* MAP + RECOMMENDATIONS */}
    <div className="map-section">
        <div className="map-card">
            <h2 className="map-title">Project Geographic Overview</h2>
            <img src={img} className="map-image" />
        </div>

        <div className="right-panel">
            <h2 className="right-title">
            <span className="text-green-400">✦</span> AI Recommendations
        </h2>

        <div className="recommend-card">
            <p className="recommend-title">Performance Anomaly Detected</p>
            <p className="recommend-desc">Output in Alpine Solar Array is 12% below forecast.</p>
            <p className="recommend-action">Investigate →</p>
        </div>

        <div className="recommend-card">
            <p className="recommend-title">Efficiency Opportunity</p>
            <p className="recommend-desc">Panel cleaning for Coastal Wind Farm could increase output by 3–5%.</p>
            <p className="recommend-pointer">Schedule Maintenance →</p>
        </div>
        </div>
    </div>

    {/* PROJECT TABLE + ACTIVITY */}
    <div className="activity-section">

        <div className="active-projects-card">
        <div className="active-header">
            <h2 className="active-title">Active Projects</h2>
            <p className="active-view-all">View All Projects</p>
        </div>

        <table className="active-table">
            <thead>
            <tr className="active-thead-row">
                <th className="active-th">Project Name</th>
                <th>Status</th>
                <th>Location</th>
                <th>Capacity</th>
            </tr>
            </thead>

            <tbody className="active-tbody">
            <tr>
                <td className="active-td">Desert Sun Facility</td>
                <td><span className="status-online">Online</span></td>
                <td>Nevada, USA</td>
                <td>150 MW</td>
            </tr>
            <tr>
                <td className="active-td">Coastal Wind Farm</td>
                <td><span className="status-online">Online</span></td>
                <td>Orkney, UK</td>
                <td>95 MW</td>
            </tr>
            <tr>
                <td className="active-td">Alpine Solar Array</td>
                <td><span className="status-maintenance">Maintenance</span></td>
                <td>Bavaria, DE</td>
                <td>75 MW</td>
            </tr>
            <tr>
                <td className="active-td">Project Phoenix</td>
                <td><span className="status-offline">Offline</span></td>
                <td>Gobi, China</td>
                <td>250 MW</td>
            </tr>
            </tbody>
        </table>
        </div>

        <div className="recent-activity-card">
        <h2 className="recent-title">Recent Activity</h2>

        <div className="recent-list">
            <div>
            <p>New project <span className="font-semibold">"Sahara Grid"</span> added by Admin.</p>
            <p className="recent-time">2 hours ago</p>
            </div>

            <div>
            <p>Alert triggered for <span className="font-semibold">"Project Phoenix"</span>.</p>
            <p className="recent-time">5 hours ago</p>
            </div>

            <div>
            <p>Q3 performance report generated for "Desert Sun Facility".</p>
            <p className="recent-time">1 day ago</p>
            </div>
        </div>
        </div>

    </div>

    </div>

  );
}
