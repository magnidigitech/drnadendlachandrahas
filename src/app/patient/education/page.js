"use client";

export default function EducationHub() {
    const articles = [
        { title: "Nutrition in Trimester 3", category: "Pregnancy Tips", read: "5 min", icon: "🍎" },
        { title: "Managing PCOS Naturally", category: "Wellness", read: "8 min", icon: "🌱" },
        { title: "Preparing for Childbirth", category: "Obstetrics", read: "12 min", icon: "🤱" },
        { title: "Benefits of Breastfeeding", category: "Infant Care", read: "6 min", icon: "✨" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>PATIENT EDUCATION</h2>
                <div style={{ padding: '0.6rem 1.2rem', borderRadius: '4px', background: 'white', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', minWidth: '300px' }}>
                    <span style={{ marginRight: '0.8rem', opacity: 0.4 }}>🔍</span>
                    <input placeholder="Search health archives..." style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', width: '100%' }} />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {articles.map((art, i) => (
                    <div key={i} style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', transition: 'all 0.2s ease', cursor: 'pointer' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1.2rem', padding: '1rem', background: '#f8fafc', display: 'inline-block', borderRadius: '4px' }}>{art.icon}</div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>{art.category}</p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.2rem', color: 'var(--primary)' }}>{art.title}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.6, fontSize: '0.8rem', fontWeight: 600 }}>
                            <span>⏱️ {art.read.toUpperCase()} READ</span>
                            <span style={{ color: 'var(--primary)', fontWeight: 800 }}>ACCESS ARTICLE →</span>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ padding: '2.5rem', borderRadius: '8px', background: 'var(--primary)', color: 'white', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.1)' }}>
                <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase' }}>Weekly Practitioner's Insight</h3>
                <p style={{ opacity: 0.9, lineHeight: 1.7, fontSize: '0.95rem', fontWeight: 500 }}>
                    "Hydration is critical. Maintain a consistent intake of 3 liters of water daily and incorporate light isometric exercises. Modern clinical studies suggest that low-impact movement significantly improves maternal circulatory health during late-stage gestation."
                </p>
            </div>
        </div>
    );
}
