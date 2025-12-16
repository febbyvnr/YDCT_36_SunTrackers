import React, { useEffect, useMemo, useState } from "react";
import "../style/MyPanel.css";

const API_BASE = "http://localhost:5000";

const formatIDR = (n) => {
  if (n === null || n === undefined || Number.isNaN(Number(n))) return "-";
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Number(n));
};

const formatDate = (iso) => {
  if (!iso) return "-";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "2-digit" });
};

const MyPanelPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest | oldest

  const fetchPanels = async () => {
    setLoading(true);
    setErr("");
    try {
      const res = await fetch(`${API_BASE}/api/panels`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to fetch panels");
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setErr(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPanels();
  }, []);

  const filtered = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    let arr = [...items];

    if (keyword) {
      arr = arr.filter((it) => {
        const location = (it.location || "").toLowerCase();
        const buildingType = (it.buildingType || "").toLowerCase();
        const roof = (it.roofAvailability || "").toLowerCase();
        return location.includes(keyword) || buildingType.includes(keyword) || roof.includes(keyword);
      });
    }

    arr.sort((a, b) => {
      const ta = new Date(a.createdAt || 0).getTime();
      const tb = new Date(b.createdAt || 0).getTime();
      return sortBy === "oldest" ? ta - tb : tb - ta;
    });

    return arr;
  }, [items, q, sortBy]);

  return (
    <div className="mypanel-container">
      <h1 className="mypanel-title">My Panel Data</h1>
      <p className="mypanel-subtitle">
        Panel data that has been saved from the Add Panel form.
      </p>

      {/* Toolbar */}
      <div className="mypanel-toolbar">
        <div className="mypanel-field">
          <label className="mypanel-label">Search (Location / Type / Roof)</label>
          <input
            className="mypanel-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="e.g. : Depok / Home / Yes"
          />
        </div>

        <div className="mypanel-field">
          <label className="mypanel-label">Sort</label>
          <select
            className="mypanel-input mypanel-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        <div className="mypanel-actions">
          <button className="mypanel-btn" onClick={fetchPanels} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mypanel-section">
        <div className="mypanel-sectionHead">
          <h2 className="mypanel-sectionTitle">Saved Entries</h2>
          <div className="mypanel-divider" />
        </div>

        {loading && <p className="mypanel-muted">Loading data...</p>}

        {!loading && err && (
          <div className="mypanel-alert mypanel-alertError">
            <b>Gagal ambil data:</b> {err}
            <div className="mypanel-muted" style={{ marginTop: 8 }}>
              Pastikan backend jalan dan endpoint <code>/api/panels</code> tersedia.
            </div>
          </div>
        )}

        {!loading && !err && filtered.length === 0 && (
          <p className="mypanel-muted">Belum ada data (atau tidak ada yang cocok dengan pencarian).</p>
        )}

        {!loading && !err && filtered.length > 0 && (
          <div className="mypanel-list">
            {filtered.map((it) => (
              <div className="mypanel-card" key={it._id}>
                <div className="mypanel-cardTop">
                  <div>
                    <div className="mypanel-cardTitle">{it.location || "-"}</div>
                    <div className="mypanel-cardMeta">
                      {it.buildingType || "-"} • Roof: {it.roofAvailability || "-"}
                    </div>
                  </div>

                  <div className="mypanel-cardRight">
                    <div>Installed: {formatDate(it.installationDate)}</div>
                    <div className="mypanel-cardSmall">Created: {formatDate(it.createdAt)}</div>
                  </div>
                </div>

                <div className="mypanel-grid">
                  <div className="mypanel-kpi">
                    <div className="mypanel-kpiLabel">Avg Monthly Bill</div>
                    <div className="mypanel-kpiValue">{formatIDR(it.avgMonthlyElectricityBillIdr)}</div>
                  </div>

                  <div className="mypanel-kpi">
                    <div className="mypanel-kpiLabel">Installation Cost</div>
                    <div className="mypanel-kpiValue">{formatIDR(it.totalInstallationCostRp)}</div>
                  </div>

                  <div className="mypanel-kpi">
                    <div className="mypanel-kpiLabel">Area Covered</div>
                    <div className="mypanel-kpiValue">{it.totalAreaCoveredM2 ?? "-"} m²</div>
                  </div>

                  <div className="mypanel-kpi">
                    <div className="mypanel-kpiLabel">Avg Monthly Consumed</div>
                    <div className="mypanel-kpiValue">{it.avgMonthlyElectricityConsumedKwh ?? "-"} kWh</div>
                  </div>

                  <div className="mypanel-kpi mypanel-kpiWide">
                    <div className="mypanel-kpiLabel">Record ID</div>
                    <div className="mypanel-id">{it._id}</div>
                  </div>

                  <div className="mypanel-kpi">
                    <div className="mypanel-kpiLabel">Updated</div>
                    <div className="mypanel-kpiValue">{formatDate(it.updatedAt)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPanelPage;