import React from "react";
import "../style/AddPanel.css";
const AddPanelPage = () => {
  return (
    <div className="addPanel-container relative z-0">

      {/* TITLE */}
      <h1 className="title-heading">Add Your Solar Panel Details</h1>
      <p className="subtitle-text">
        Provide these details to unlock personalized analysis and AI-powered recommendations.
      </p>

      {/* INSTALLATION DETAILS */}
      <div className="section-spacing">
        <h2 className="section-title">Installation Details</h2>
        <div className="section-divider" />

        <div className="grid-2col">

          {/* INSTALLATION DATE */}
          <div>
            <label className="label-normal">Installation Date</label>
            <div className="input-wrapper">
              <input
                type="date"
                className="input-clear"
              />
              <span className="icon-green material-icons">calendar_today</span>
            </div>
          </div>

          {/* INSTALL COST */}
          <div>
            <label className="label-normal">Total Installation Cost ($)</label>
            <input
              type="number"
              placeholder="e.g., 15000"
              className="input-full"
            />
          </div>
        </div>

        {/* AREA COVERED */}
        <div className="mt-6-block">
          <label className="label-normal">Total Area Covered (sq ft)</label>
          <input
            type="number"
            placeholder="e.g., 500"
            className="input-full"
          />
        </div>
      </div>

      {/* PERFORMANCE DATA */}
      <div className="mt-14">
        <h2 className="section-title">Performance Data</h2>
        <div className="section-divider" />

        <div className="grid-2col">
          
          {/* ENERGY GENERATED */}
          <div>
            <label className="label-flex">
              Average Monthly Energy Generated (kWh)
            </label>
            <input
              type="number"
              placeholder="e.g., 600"
              className="input-full"
            />
          </div>

          {/* PROFIT / SAVINGS */}
          <div>
            <label className="label-normal">Average Monthly Profit/Savings ($)</label>

            {/* RADIO */}
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="type" className="radio-input" />
                Profit
              </label>

              <label className="radip-group">
                <input type="radio" name="type" className="radio-input" />
                Savings
              </label>
            </div>

            <input
              type="number"
              placeholder="e.g., 150"
              className="input-full"
            />
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="button-row">
        <button className="btn-skip">Skip for now</button>
        <button className="btn-save">Save Details</button>
      </div>

    </div>
  );
};

export default AddPanelPage;
