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

      {/* USER INPUTS */}
      <div className="section-spacing">
        <h2 className="section-title">User Inputs</h2>
        <div className="section-divider" />

        <div className="grid-2col">
          {/* LOCATION */}
          <div>
            <label className="label-normal">Location (District / Village)</label>
            <input
              type="text"
              placeholder="e.g., Depok / Sukabumi"
              className="input-full"
            />
          </div>

          {/* AVG MONTHLY ELECTRICITY BILL (IDR) */}
          <div>
            <label className="label-normal">Avg Monthly Electricity Bill (IDR)</label>
            <input
              type="number"
              placeholder="e.g., Rp 750000"
              className="input-full"
            />
          </div>
        </div>

        {/* BUILDING TYPE + ROOF AVAILABILITY (2 COL) */}
        <div className="grid-2col mt-6-block">
          {/* BUILDING TYPE */}
          <div>
            <label className="label-normal">Building Type</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="buildingType" className="radio-input" />
                School
              </label>
              <label className="radio-label">
                <input type="radio" name="buildingType" className="radio-input" />
                Small Business
              </label>
              <label className="radio-label">
                <input type="radio" name="buildingType" className="radio-input" />
                Home
              </label>
              <label className="radio-label">
                <input type="radio" name="buildingType" className="radio-input" />
                Farm
              </label>
            </div>
          </div>

          {/* ROOF AVAILABILITY */}
          <div>
            <label className="label-normal">Roof Availability</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="roofAvailability" className="radio-input" />
                Yes
              </label>
              <label className="radio-label">
                <input type="radio" name="roofAvailability" className="radio-input" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* INSTALLATION DETAILS */}
      <div className="section-spacing">
        <h2 className="section-title">Installation Details</h2>
        <div className="section-divider" />

        <div className="grid-3col">
          {/* INSTALLATION DATE */}
          <div>
            <label className="label-normal">Installation Date</label>
            <div className="input-wrapper">
              <input type="date" className="input-clear" />
            </div>
          </div>

          {/* INSTALL COST */}
          <div>
            <label className="label-normal">Total Installation Cost (Rp)</label>
            <input type="number" placeholder="e.g., Rp 150000" className="input-full" />
          </div>

          {/* AREA COVERED */}
          <div>
            <label className="label-normal">Total Area Covered (m2)</label>
            <input type="number" placeholder="e.g., 500 m2" className="input-full" />
          </div>
        </div>
      </div>

      {/* PERFORMANCE DATA */}
      <div className="section-spacing">
        <h2 className="section-title">Performance Data</h2>
        <div className="section-divider" />

        <div className="grid-2col">
          {/* ELECTRICITY CONSUMED */}
          <div>
            <label className="label-flex">Average Monthly Electricity Consumed (kWh)</label>
            <input type="number" placeholder="e.g., 600 kWh" className="input-full" />
          </div>

          {/* ELECTRICITY COSTS */}
          <div>
            <label className="label-normal">Average Monthly Electricity Cost (Rp)</label>
            <input type="number" placeholder="e.g., 350000" className="input-full" />
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="button-row">
        <button className="btn-save">Save Details</button>
      </div>
    </div>
  );
};

export default AddPanelPage;