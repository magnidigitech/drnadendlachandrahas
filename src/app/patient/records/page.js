"use client";

export default function ReportsModule() {
    const documents = [
        { name: "Complete Blood Count (CBC)", category: "Lab Report", date: "01 March 2026", status: "New", icon: "📄" },
        { name: "Anatomy Ultrasound Scan", category: "Ultrasound", date: "15 Feb 2026", status: "Viewed", icon: "🖼️" },
        { name: "Thyroid Profile (TSH)", category: "Lab Report", date: "10 Feb 2026", status: "Viewed", icon: "📄" },
        { name: "Vitamin Supplements Rx", category: "Prescription", date: "05 Feb 2026", status: "Viewed", icon: "💊" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>MEDICAL DOCUMENTATION</h2>
                <button className="btn" style={{ background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', padding: '0.6rem 1.5rem', fontSize: '0.85rem', fontWeight: 700 }}>+ UPLOAD DOCUMENT</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem' }}>
                {documents.map((doc, i) => (
                    <div key={i} style={{ padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '4px', background: '#f8fafc', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>{doc.icon}</div>
                            <div>
                                <p style={{ fontWeight: 800, marginBottom: '0.2rem', color: 'var(--primary)', fontSize: '0.95rem' }}>{doc.name}</p>
                                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', opacity: 0.6 }}>{doc.category.toUpperCase()} • {doc.date.toUpperCase()}</p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            {doc.status === 'New' && <span style={{ padding: '0.2rem 0.6rem', borderRadius: '2px', background: 'var(--accent)', color: 'white', fontSize: '0.65rem', fontWeight: 900, display: 'inline-block', marginBottom: '0.5rem' }}>NEW</span>}
                            <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'white', fontWeight: 700, display: 'block', width: '100%' }}>DOWNLOAD</button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ padding: '2rem', borderRadius: '8px', background: 'var(--primary-light)', border: '1px dashed var(--glass-border)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>✓</div>
                <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.3rem', fontSize: '0.9rem', fontWeight: 800 }}>SECURE CLOUD STORAGE</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 500, opacity: 0.8 }}>All clinical records are encrypted according to HIPAA-compliant standards. Data is accessible only to you and your authorized medical practitioners.</p>
                </div>
            </div>
        </div>
    );
}
