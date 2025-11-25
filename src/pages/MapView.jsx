import React from 'react';
import mapImg from "../assets/images/map.png";
import "../style/MapView.css";

const MapView = () => {
    return (
        <div className="mapview-wrapper">

            {/* LEFT SIDEBAR (FORM) */}
            <div className="sidebar-left">
                <h1>Solar Energy Data Map</h1>
                <p className="subtitle">Interactive geographical map of solar usage and installations</p>
                
                {/* Filter by Location */}
                <div className="filter-section">
                    <h2>Filter by Location</h2>
                    <p className="filter-description">Refine the data shown on the map.</p>

                    <div className="filter-group">
                        <label>Select State</label>
                        <select className="filter-select">
                            <option>California</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Select County</label>
                        <select className="filter-select">
                            <option>San Diego County</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Select City</label>
                        <select className="filter-select">
                            <option>San Diego</option>
                        </select>
                    </div>
                </div>

                {/* Filter by Data */}
                <div className="filter-section">
                    <h2>Filter by Data</h2>
                    <a href="http://www.baidu.com" className="date-link">mm/dd/yyyy</a>

                    <div className="filter-group">
                        <label>Unit Consumption (kWh)</label>
                        <select className="filter-select">
                            <option>All</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Data Layers</label>
                        <select className="filter-select">
                            <option>Solar Usage</option>
                        </select>
                    </div>
                </div>

                {/* Usage Levels */}
                <div className="usage-section">
                    <h3>Solar Usage (kWh)</h3>
                    <div className="usage-levels">
                        <div className="usage-item">
                            <span className="usage-dot low"></span>
                            <span>Low</span>
                        </div>
                        <div className="usage-item">
                            <span className="usage-dot medium"></span>
                            <span>Medium</span>
                        </div>
                        <div className="usage-item">
                            <span className="usage-dot high"></span>
                            <span>High</span>
                        </div>
                    </div>
                </div>

                {/* Parks */}
                <div className="park-section">
                    <h3>Park Core</h3>
                    <ul className="park-list">
                        <li className="park-item">Taylor Park Trading Post</li>
                        <li className="park-item">Abbeyville</li>
                    </ul>
                </div>

                {/* Stats */}
                <div className="location-section">
                    <h3>San Diego, CA</h3>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-value">1.2 GIV</div>
                            <div className="stat-label">Total Generation</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">450 kWh</div>
                            <div className="stat-label">Avg. Consumption</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">78,205</div>
                            <div className="stat-label">Installations</div>
                        </div>
                    </div>
                </div>

                {/* AI Recommendation */}
                <div className="ai-recommendation">
                    <h3>AI Recommendation:</h3>
                    <p>High potential for new commercial installations in the North County industrial sector due to favorable insolation and grid capacity.</p>
                </div>
            </div>

            {/* RIGHT MAP PANEL */}
            <div className="map-right">
                <img src={mapImg} alt="Solar Map" className="map-img-rounded" />
            </div>

        </div>
    );
};

export default MapView;
