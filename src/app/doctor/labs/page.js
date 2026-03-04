"use client";

export default function LabModule() {
    const reports = [
        { id: 1, patient: "Lakshmi Devi", test: "Complete Blood Count", date: "2026-03-01", result: "Abnormal", value: "Hb 9.2 (Low)", color: "#ef4444" },
        { id: 2, patient: "Padma Rao", test: "Thyroid Profile", date: "2026-02-28", result: "Normal", value: "TSH 2.5", color: "#10b981" },
        { id: 3, patient: "Anjali Reddy", test: "GTT (Sugar)", date: "2026-02-25", result: "Normal", value: "98 mg/dL", color: "#10b981" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>LAB RESULTS & ORDERS</h2>
                <button className="btn" style={{ background: 'var(--primary)', color: 'white', borderRadius: '4px', padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>+ ORDER NEW INVESTIGATION</button>
            </div>

            <div style={{ padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Recent Laboratory Findings</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {reports.map((r) => (
                        <div key={r.id} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr 1.2fr 100px', alignItems: 'center', padding: '1rem 1.2rem', background: '#fcfdfe', borderRadius: '4px', border: '1px solid #f1f5f9' }}>
                            <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>{r.patient}</span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 600 }}>{r.test}</span>
                            <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>{r.date}</span>
                            <span style={{ fontWeight: 800, color: r.color, fontSize: '0.9rem' }}>{r.value.toUpperCase()}</span>
                            <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'white', fontWeight: 700 }}>VIEW REPORT</button>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ padding: '1.5rem 2rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>!</div>
                <div>
                    <h4 style={{ color: '#ef4444', marginBottom: '0.3rem', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase' }}>Critical Alert</h4>
                    <p style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 500, lineHeight: 1.5 }}>
                        <strong>Lakshmi Devi</strong> presents with clinically low Hemoglobin levels (9.2 g/dL). Immediate anemia management and nutritional intervention protocols are recommended.
                    </p>
                </div>
            </div>
        </div>
    );
}
