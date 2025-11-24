// src/pages/AddPanelPage.jsx
import React from "react";

export default function AddPanelPage() {
  return (
    <main className="flex-1 p-6 lg:p-10">
      <div className="mx-auto max-w-4xl">

        <div className="flex flex-wrap justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 dark:text-white text-4xl font-black tracking-[-0.033em]">
              Add Your Solar Panel Details
            </h1>
            <p className="text-gray-600 dark:text-primary/70 text-base">
              Provide these details to unlock personalized analysis and AI-powered recommendations.
            </p>
          </div>
        </div>

        <div className="space-y-10">

          {/* Installation Details */}
          <section>
            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold pb-3 border-b border-gray-200 dark:border-primary/20">
              Installation Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-6">
              <InputWithIcon label="Installation Date" placeholder="Select a date" icon="calendar_today" />

              <TextInput label="Total Installation Cost ($)" placeholder="e.g., 15000" />

              <TextInput label="Total Area Covered (sq ft)" placeholder="e.g., 500" />
            </div>
          </section>

          {/* Performance Data */}
          <section>
            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold pb-3 border-b border-gray-200 dark:border-primary/20">
              Performance Data
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-6">
              <TextInput label="Average Monthly Energy Generated (kWh)" placeholder="e.g., 600" />

              <div className="flex flex-col">
                <p className="text-gray-800 dark:text-white text-base font-medium pb-2">
                  Average Monthly Profit/Savings ($)
                </p>

                <div className="flex items-center space-x-4">
                  <Radio name="ps" id="profit" label="Profit" checked />
                  <Radio name="ps" id="savings" label="Savings" />
                </div>

                <input
                  type="text"
                  placeholder="e.g., 150"
                  className="form-input mt-2 h-12 px-4 rounded-lg border dark:border-[#326744] bg-white dark:bg-[#193322] text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 dark:border-primary/20">
            <button className="px-6 py-3 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary/10">
              Skip for now
            </button>

            <button className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90">
              Save Details
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}

function InputWithIcon({ label, placeholder, icon }) {
  return (
    <label className="flex flex-col">
      <p className="text-gray-800 dark:text-white text-base font-medium pb-2">{label}</p>

      <div className="flex items-stretch rounded-lg">
        <input
          type="text"
          placeholder={placeholder}
          className="form-input flex w-full h-12 px-4 rounded-l-lg border dark:border-[#326744] bg-white dark:bg-[#193322]"
        />
        <div className="flex items-center justify-center pr-4 rounded-r-lg border dark:border-[#326744] bg-white dark:bg-[#193322]">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </label>
  );
}

function TextInput({ label, placeholder }) {
  return (
    <label className="flex flex-col">
      <p className="text-gray-800 dark:text-white text-base font-medium pb-2">{label}</p>
      <input
        type="text"
        placeholder={placeholder}
        className="form-input h-12 px-4 rounded-lg border dark:border-[#326744] bg-white dark:bg-[#193322] text-gray-900 dark:text-white"
      />
    </label>
  );
}

function Radio({ id, label, checked, name }) {
  return (
    <label className="flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        defaultChecked={checked}
        className="form-radio h-4 w-4 text-primary"
      />
      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{label}</span>
    </label>
  );
}
