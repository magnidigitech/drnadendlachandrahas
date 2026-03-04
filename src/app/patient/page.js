export default function PatientOverview() {
    const cards = [
        { label: "Consultations", value: "04", sub: "All time records", icon: "❤️" },
        { label: "Prescriptions", value: "01", sub: "Active medicines", icon: "📋" },
        { label: "Lab Screenings", value: "04", sub: "Recent test results", icon: "🧪" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
                {cards.map((card, i) => (
                    <div key={i} style={{ padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.icon}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <p style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.2rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{card.label}</p>
                                <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{card.sub}</p>
                            </div>
                        </div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.8rem', color: 'var(--primary)' }}>{card.value}</h3>
                    </div>
                ))}
            </div>

            {/* Upcoming Appointments */}
            <div style={{ padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Upcoming Appointments</h3>
                    <button style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', background: 'transparent', border: 'none', cursor: 'pointer' }}>VIEW ALL</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <div style={{ padding: '1.2rem', borderRadius: '6px', background: 'var(--primary-light)', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontWeight: 700, marginBottom: '0.2rem', fontSize: '0.95rem' }}>Hormone Therapy Consultation</p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>👨⚕️ Dr. Chandrahas • 05 March, 2026 • 11:00 AM</p>
                        </div>
                        <button className="btn" style={{ padding: '0.6rem 1.2rem', background: 'var(--primary)', color: 'white', fontSize: '0.8rem', borderRadius: '4px' }}>Join Session</button>
                    </div>

                    <div style={{ padding: '1.2rem', borderRadius: '6px', border: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontWeight: 700, marginBottom: '0.2rem', fontSize: '0.95rem' }}>Anatomy Ultrasound</p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>📋 Lab A • 12 March, 2026 • 09:30 AM</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem', border: '1px solid #e2e8f0', borderRadius: '4px' }}>Reschedule</button>
                            <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem', border: '1px solid #e2e8f0', borderRadius: '4px' }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medications */}
            <div style={{ padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Current Medications</h3>
                    <button style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', background: 'transparent', border: 'none', cursor: 'pointer' }}>VIEW ALL</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {[
                        { name: "Prenatal Vitamins", dose: "1 daily", time: "Morning" },
                        { name: "Iron Supplement", dose: "1 daily", time: "Evening" },
                        { name: "Magnesium", dose: "500mg", time: "Night" },
                    ].map((med, i) => (
                        <div key={i} style={{ padding: '1rem', borderRadius: '6px', background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                            <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.2rem', fontSize: '0.9rem' }}>{med.name}</p>
                            <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{med.dose} • {med.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
