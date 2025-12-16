import React, { useMemo, useState } from "react";
import "../style/AddPanel.css";

const AddPanelPage = () => {
  const [form, setForm] = useState({
    location: "",
    avgMonthlyElectricityBillIdr: "",
    buildingType: "",
    roofAvailability: "",
    installationDate: "",
    totalInstallationCostRp: "",
    totalAreaCoveredM2: "",
    avgMonthlyElectricityConsumedKwh: "",
    avgMonthlyElectricityCostRp: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isEmpty = (v) => String(v ?? "").trim() === "";

  const missingFields = useMemo(() => {
    const missing = [];
    if (isEmpty(form.location)) missing.push("Location");
    if (isEmpty(form.avgMonthlyElectricityBillIdr)) missing.push("Avg Monthly Electricity Bill");
    if (isEmpty(form.buildingType)) missing.push("Building Type");
    if (isEmpty(form.roofAvailability)) missing.push("Roof Availability");
    if (isEmpty(form.installationDate)) missing.push("Installation Date");
    if (isEmpty(form.totalInstallationCostRp)) missing.push("Total Installation Cost");
    if (isEmpty(form.totalAreaCoveredM2)) missing.push("Total Area Covered");
    if (isEmpty(form.avgMonthlyElectricityConsumedKwh)) missing.push("Average Monthly Electricity Consumed");
    if (isEmpty(form.avgMonthlyElectricityCostRp)) missing.push("Average Monthly Electricity Cost");
    return missing;
  }, [form]);

  const canSubmit = missingFields.length === 0 && !isSubmitting;

  const toNumberStrict = (v) => {
    // karena required, kalau kosong harus error (bukan 0)
    const n = Number(v);
    if (Number.isNaN(n)) throw new Error("Invalid number");
    return n;
  };

  const onSubmit = async () => {
    setStatus({ type: "", message: "" });

    if (missingFields.length > 0) {
      setStatus({
        type: "error",
        message: `Isi dulu: ${missingFields.join(", ")}`,
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      location: form.location.trim(),
      avgMonthlyElectricityBillIdr: toNumberStrict(form.avgMonthlyElectricityBillIdr),
      buildingType: form.buildingType,
      roofAvailability: form.roofAvailability,
      installationDate: new Date(form.installationDate),
      totalInstallationCostRp: toNumberStrict(form.totalInstallationCostRp),
      totalAreaCoveredM2: toNumberStrict(form.totalAreaCoveredM2),
      avgMonthlyElectricityConsumedKwh: toNumberStrict(form.avgMonthlyElectricityConsumedKwh),
      avgMonthlyElectricityCostRp: toNumberStrict(form.avgMonthlyElectricityCostRp),
    };

    try {
      const res = await fetch("http://localhost:5000/api/panels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || data?.message || "Unknown error");
      }

      setStatus({ type: "success", message: "Saved ✅ Data berhasil disimpan ke database." });

      setForm({
        location: "",
        avgMonthlyElectricityBillIdr: "",
        buildingType: "",
        roofAvailability: "",
        installationDate: "",
        totalInstallationCostRp: "",
        totalAreaCoveredM2: "",
        avgMonthlyElectricityConsumedKwh: "",
        avgMonthlyElectricityCostRp: "",
      });
    } catch (err) {
      setStatus({ type: "error", message: `Gagal menyimpan ❌ ${err.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="addPanel-container relative z-0">
      <h1 className="title-heading">Add Your Solar Panel Details</h1>
      <p className="subtitle-text">
        Provide these details to unlock personalized analysis and AI-powered recommendations.
      </p>

      {/* USER INPUTS */}
      <div className="section-spacing">
        <h2 className="section-title">User Inputs</h2>
        <div className="section-divider" />

        <div className="grid-2col">
          <div>
            <label className="label-normal">Location (District / Village)</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={onChange}
              required
              className="input-full"
              placeholder="e.g., Depok / Sukabumi"
            />
          </div>

          <div>
            <label className="label-normal">Avg Monthly Electricity Bill (IDR)</label>
            <input
              type="number"
              name="avgMonthlyElectricityBillIdr"
              value={form.avgMonthlyElectricityBillIdr}
              onChange={onChange}
              required
              min={0}
              className="input-full"
              placeholder="e.g., 750000"
            />
          </div>
        </div>

        <div className="grid-2col mt-6-block">
          <div>
            <label className="label-normal">Building Type</label>
            <div className="radio-group">
              {["School", "Small Business", "Home", "Farm"].map((opt) => (
                <label className="radio-label" key={opt}>
                  <input
                    type="radio"
                    name="buildingType"
                    className="radio-input"
                    value={opt}
                    checked={form.buildingType === opt}
                    onChange={onChange}
                    required
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="label-normal">Roof Availability</label>
            <div className="radio-group">
              {["Yes", "No"].map((opt) => (
                <label className="radio-label" key={opt}>
                  <input
                    type="radio"
                    name="roofAvailability"
                    className="radio-input"
                    value={opt}
                    checked={form.roofAvailability === opt}
                    onChange={onChange}
                    required
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* INSTALLATION DETAILS */}
      <div className="section-spacing">
        <h2 className="section-title">Installation Details</h2>
        <div className="section-divider" />

        <div className="grid-3col">
          <div>
            <label className="label-normal">Installation Date</label>
            <div className="input-wrapper">
              <input
                type="date"
                name="installationDate"
                value={form.installationDate}
                onChange={onChange}
                required
                className="input-clear"
              />
            </div>
          </div>

          <div>
            <label className="label-normal">Total Installation Cost (Rp)</label>
            <input
              type="number"
              name="totalInstallationCostRp"
              value={form.totalInstallationCostRp}
              onChange={onChange}
              required
              min={0}
              className="input-full"
              placeholder="e.g., 150000"
            />
          </div>

          <div>
            <label className="label-normal">Total Area Covered (m2)</label>
            <input
              type="number"
              name="totalAreaCoveredM2"
              value={form.totalAreaCoveredM2}
              onChange={onChange}
              required
              min={0}
              className="input-full"
              placeholder="e.g., 500"
            />
          </div>
        </div>
      </div>

      {/* PERFORMANCE DATA */}
      <div className="section-spacing">
        <h2 className="section-title">Performance Data</h2>
        <div className="section-divider" />

        <div className="grid-2col">
          <div>
            <label className="label-flex">Average Monthly Electricity Consumed (kWh)</label>
            <input
              type="number"
              name="avgMonthlyElectricityConsumedKwh"
              value={form.avgMonthlyElectricityConsumedKwh}
              onChange={onChange}
              required
              min={0}
              className="input-full"
              placeholder="e.g., 600"
            />
          </div>

          <div>
            <label className="label-normal">Average Monthly Electricity Cost (Rp)</label>
            <input
              type="number"
              name="avgMonthlyElectricityCostRp"
              value={form.avgMonthlyElectricityCostRp}
              onChange={onChange}
              required
              min={0}
              className="input-full"
              placeholder="e.g., 350000"
            />
          </div>
        </div>
      </div>

      {/* STATUS */}
      {status.message && (
        <div style={{ marginTop: 12, padding: 10, borderRadius: 10, border: "1px solid" }}>
          {status.message}
        </div>
      )}

      <div className="button-row">
        <button
          className="btn-save"
          onClick={onSubmit}
          disabled={!canSubmit}
          title={!canSubmit ? `Masih ada yang kosong: ${missingFields.join(", ")}` : "Save"}
        >
          {isSubmitting ? "Saving..." : "Save Details"}
        </button>
      </div>
    </div>
  );
};

export default AddPanelPage;