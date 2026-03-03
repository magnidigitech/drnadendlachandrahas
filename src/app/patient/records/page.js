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
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Medical <span className="gradient-text">Documents</span></h2>
                <button className="btn btn-primary">+ Upload Document</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {documents.map((doc, i) => (
                    <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '25px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s ease' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{doc.icon}</div>
                            <div>
                                <p style={{ fontWeight: 800, marginBottom: '0.2rem' }}>{doc.name}</p>
                                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{doc.category} • {doc.date}</p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            {doc.status === 'New' && <span style={{ padding: '0.3rem 0.8rem', borderRadius: '20px', background: 'var(--primary)', color: 'white', fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>NEW</span>}
                            <button className="btn glass" style={{ padding: '0.4rem 1rem', fontSize: '0.75rem' }}>Download</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '30px', background: 'var(--primary-light)', border: '1px dashed var(--primary)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Secure Storage</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>All your medical records are encrypted and stored securely. Only you and your healthcare provider can access these documents.</p>
            </div>
        </div>
    );
}
