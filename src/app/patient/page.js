export default function PatientOverview() {
    const cards = [
        { label: "Consultations", value: "04", sub: "All time records", icon: "❤️", color: "#fdf2f2" },
        { label: "Prescriptions", value: "01", sub: "Active medicines", icon: "📋", color: "#f7f0ff" },
        { label: "Lab Screenings", value: "04", sub: "Recent test results", icon: "🧪", color: "#fff9f0" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {cards.map((card, i) => (
                    <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '30px', background: card.color, border: 'none' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{card.icon}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.2rem' }}>{card.label}</p>
                                <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{card.sub}</p>
                            </div>
                            <span style={{ fontSize: '1.5rem', fontWeight: 300, opacity: 0.5 }}>→</span>
                        </div>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '1rem' }}>{card.value}</h3>
                    </div>
                ))}
            </div>

            {/* Upcoming Appointments */}
            <div className="glass" style={{ padding: '2rem', borderRadius: '30px', background: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Upcoming <span className="gradient-text">Appointments</span></h3>
                    <button style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', background: 'transparent', border: 'none', cursor: 'pointer' }}>View all</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ padding: '1.5rem', borderRadius: '20px', background: '#fdf2f2', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontWeight: 800, marginBottom: '0.3rem' }}>Hormone Therapy Consultation</p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>👩⚕️ Dr. Chandrahas • 05 March, 2026 • 11:00 AM</p>
                        </div>
                        <button className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>Join Session</button>
                    </div>

                    <div style={{ padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontWeight: 800, marginBottom: '0.3rem' }}>Anatomy Ultrasound</p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>📋 Lab A • 12 March, 2026 • 09:30 AM</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button className="btn glass" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>Reschedule</button>
                            <button className="btn glass" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medications */}
            <div className="glass" style={{ padding: '2rem', borderRadius: '30px', background: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>My <span className="gradient-text">Medications</span></h3>
                    <button style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', background: 'transparent', border: 'none', cursor: 'pointer' }}>View all</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    {[
                        { name: "Prenatal Vitamins", dose: "1 daily", time: "Morning" },
                        { name: "Iron Supplement", dose: "1 daily", time: "Evening" },
                        { name: "Magnesium", dose: "500mg", time: "Night" },
                    ].map((med, i) => (
                        <div key={i} style={{ padding: '1.2rem', borderRadius: '20px', background: '#fdf2f2', border: '1px solid var(--glass-border)' }}>
                            <p style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.2rem' }}>{med.name}</p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{med.dose} • {med.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
