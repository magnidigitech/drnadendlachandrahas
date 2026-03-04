"use client";

export default function BillingModule() {
    const stats = [
        { label: "Daily Revenue", value: "₹45,200", trend: "+12%" },
        { label: "Pending Claims", value: "8", trend: "Review" },
        { label: "Consultation Fee", value: "₹500", trend: "Fixed" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>BILLING & CLINICAL ANALYTICS</h2>
                <button className="btn" style={{ background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', padding: '0.6rem 1.5rem', fontSize: '0.9rem', fontWeight: 700 }}>GENERATE INVOICE</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
                {stats.map((s, i) => (
                    <div key={i} style={{ padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>{s.label}</p>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--primary)' }}>{s.value}</h3>
                        <span style={{ fontSize: '0.75rem', color: s.trend.includes('+') ? '#10b981' : 'var(--accent)', fontWeight: 800 }}>{s.trend.toUpperCase()}</span>
                    </div>
                ))}
            </div>

            <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Treatment outcomes & Metrics</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                        { type: "Natural Deliveries", count: "45", percent: "65%" },
                        { type: "C-Section", count: "24", percent: "35%" },
                        { type: "Laparoscopic Procedures", count: "18", percent: "100% SUCCESS" },
                    ].map((outcome, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem', background: '#fcfdfe', borderRadius: '4px', border: '1px solid #f1f5f9' }}>
                            <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)' }}>{outcome.type}</span>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ fontWeight: 900, color: 'var(--accent)', fontSize: '1.1rem' }}>{outcome.count}</p>
                                <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--secondary)', opacity: 0.7 }}>{outcome.percent}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
