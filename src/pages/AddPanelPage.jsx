import React from "react";

const AddPanelPage = () => {
  return (
    <div className="flex-1 bg-[#0f2418] text-white px-16 py-12 overflow-y-auto">

      {/* TITLE */}
      <h1 className="text-4xl font-semibold">Add Your Solar Panel Details</h1>
      <p className="text-[#6dbb7c] mt-2">
        Provide these details to unlock personalized analysis and AI-powered recommendations.
      </p>

      {/* INSTALLATION DETAILS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Installation Details</h2>
        <div className="h-px bg-[#1e3d2d] mt-2 mb-6" />

        <div className="grid grid-cols-2 gap-8">

          {/* INSTALLATION DATE */}
          <div>
            <label className="block mb-2">Installation Date</label>
            <div className="flex items-center bg-transparent border border-[#2d5a43] rounded-lg px-4 py-3">
              <input
                type="date"
                className="bg-transparent outline-none w-full"
              />
              <span className="material-icons text-[#6dbb7c]">calendar_today</span>
            </div>
          </div>

          {/* INSTALL COST */}
          <div>
            <label className="block mb-2">Total Installation Cost ($)</label>
            <input
              type="number"
              placeholder="e.g., 15000"
              className="w-full bg-transparent border border-[#2d5a43] rounded-lg px-4 py-3 outline-none"
            />
          </div>
        </div>

        {/* AREA COVERED */}
        <div className="mt-6">
          <label className="block mb-2">Total Area Covered (sq ft)</label>
          <input
            type="number"
            placeholder="e.g., 500"
            className="w-full bg-transparent border border-[#2d5a43] rounded-lg px-4 py-3 outline-none"
          />
        </div>
      </div>

      {/* PERFORMANCE DATA */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold">Performance Data</h2>
        <div className="h-px bg-[#1e3d2d] mt-2 mb-6" />

        <div className="grid grid-cols-2 gap-8">
          
          {/* ENERGY GENERATED */}
          <div>
            <label className="block mb-2 flex items-center gap-2">
              Average Monthly Energy Generated (kWh)
            </label>
            <input
              type="number"
              placeholder="e.g., 600"
              className="w-full bg-transparent border border-[#2d5a43] rounded-lg px-4 py-3 outline-none"
            />
          </div>

          {/* PROFIT / SAVINGS */}
          <div>
            <label className="block mb-2">Average Monthly Profit/Savings ($)</label>

            {/* RADIO */}
            <div className="flex items-center gap-6 mb-3">
              <label className="flex items-center gap-2">
                <input type="radio" name="type" className="accent-[#6dbb7c]" />
                Profit
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="type" className="accent-[#6dbb7c]" />
                Savings
              </label>
            </div>

            <input
              type="number"
              placeholder="e.g., 150"
              className="w-full bg-transparent border border-[#2d5a43] rounded-lg px-4 py-3 outline-none"
            />
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-end items-center gap-6 mt-16">
        <button className="text-gray-300 hover:underline">
          Skip for now
        </button>

        <button className="bg-[#34c759] hover:bg-[#2eaf4e] text-black font-semibold px-8 py-3 rounded-lg">
          Save Details
        </button>
      </div>

    </div>
  );
};

export default AddPanelPage;
