"use client";

export default function LabModule() {
    const reports = [
        { id: 1, patient: "Lakshmi Devi", test: "Complete Blood Count", date: "2026-03-01", result: "Abnormal", value: "Hb 9.2 (Low)", color: "#ef4444" },
        { id: 2, patient: "Padma Rao", test: "Thyroid Profile", date: "2026-02-28", result: "Normal", value: "TSH 2.5", color: "#10b981" },
        { id: 3, patient: "Anjali Reddy", test: "GTT (Sugar)", date: "2026-02-25", result: "Normal", value: "98 mg/dL", color: "#10b981" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Lab <span className="gradient-text">Reports & Orders</span></h2>
                <button className="btn btn-primary">+ Order New Test</button>
            </div>

            <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Recent <span className="gradient-text">Results</span></h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {reports.map((r) => (
                        <div key={r.id} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr 1fr 100px', alignItems: 'center', padding: '1.2rem', background: 'white', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                            <span style={{ fontWeight: 800 }}>{r.patient}</span>
                            <span style={{ opacity: 0.7 }}>{r.test}</span>
                            <span style={{ fontSize: '0.85rem' }}>{r.date}</span>
                            <span style={{ fontWeight: 800, color: r.color }}>{r.value}</span>
                            <button className="btn glass" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}>Details</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '30px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                <h4 style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    ⚠️ Abnormal Alert
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                    <strong>Lakshmi Devi</strong> shows low Hemoglobin levels (9.2 g/dL). Anemia management protocol recommended.
                </p>
            </div>
        </div>
    );
}
