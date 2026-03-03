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
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Education <span className="gradient-text">Hub</span></h2>
                <div className="glass" style={{ padding: '0.5rem 1.5rem', borderRadius: '50px' }}>
                    <input placeholder="Search articles..." style={{ border: 'none', background: 'transparent', outline: 'none' }} />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                {articles.map((art, i) => (
                    <div key={i} className="glass" style={{ padding: '2.5rem', borderRadius: '35px', background: 'white', border: 'none', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{art.icon}</div>
                        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{art.category}</p>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>{art.title}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.6, fontSize: '0.85rem' }}>
                            <span>{art.read} read</span>
                            <span>Read More →</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass" style={{ padding: '2.5rem', borderRadius: '40px', background: 'var(--primary)', color: 'white' }}>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Weekly Health Tips</h3>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>"Stay hydrated and maintain a light walking routine of 20 minutes daily. This helps in better circulation and reduces leg swelling during the final weeks of pregnancy."</p>
            </div>
        </div>
    );
}
