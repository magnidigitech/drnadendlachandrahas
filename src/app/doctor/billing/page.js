"use client";

export default function BillingModule() {
    const stats = [
        { label: "Daily Revenue", value: "₹45,200", trend: "+12%" },
        { label: "Pending Claims", value: "8", trend: "Review" },
        { label: "Consultation Fee", value: "₹500", trend: "Fixed" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Billing & <span className="gradient-text">Analytics</span></h2>
                <button className="btn btn-primary">Generate Invoice</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {stats.map((s, i) => (
                    <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '30px' }}>
                        <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '0.5rem' }}>{s.label}</p>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>{s.value}</h3>
                        <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>{s.trend}</span>
                    </div>
                ))}
            </div>

            <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Treatment <span className="gradient-text">Outcomes</span></h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { type: "Natural Deliveries", count: "45", percent: "65%" },
                        { type: "C-Section", count: "24", percent: "35%" },
                        { type: "Laparoscopic", count: "18", percent: "100% Success" },
                    ].map((outcome, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                            <span style={{ fontWeight: 700 }}>{outcome.type}</span>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ fontWeight: 800, color: 'var(--primary)' }}>{outcome.count}</p>
                                <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{outcome.percent}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
