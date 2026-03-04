export default function DoctorOverview() {
    const stats = [
        { label: "Today's Appointments", value: "12", sub: "4 Completed", color: "var(--accent)" },
        { label: "Total Patients", value: "1,284", sub: "+5 this week", color: "var(--secondary)" },
        { label: "High-Risk Patients", value: "8", sub: "Needs urgent review", color: "#ef4444" },
        { label: "Pending Reports", value: "15", sub: "Ready for signature", color: "var(--secondary)" },
    ];

    const quickActions = [
        { label: "New Patient", icon: "👤" },
        { label: "Prescription", icon: "💊" },
        { label: "Scan Upload", icon: "🖼️" },
        { label: "Schedule Surgery", icon: "🏥" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.2rem' }}>
                {stats.map((s, i) => (
                    <div key={i} style={{ padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                        <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</p>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--primary)' }}>{s.value}</h3>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: s.color }}>{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div>
                <h2 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>QUICK ACTIONS</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {quickActions.map((action, i) => (
                        <button key={i} className="btn" style={{ flex: 1, padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'white', transition: 'all 0.1s ease', color: 'var(--primary)' }}>
                            <span style={{ fontSize: '1.2rem' }}>{action.icon}</span>
                            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{action.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area: Appointments & Reports */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Today's Appointments</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                            { time: "09:00 AM", name: "Lakshmi Devi", type: "Prenatal Checkup", status: "In Consultation" },
                            { time: "10:30 AM", name: "Padma Rao", type: "Gynecological Exam", status: "Waiting" },
                            { time: "11:45 AM", name: "Anjali Reddy", type: "Post-op Follow-up", status: "Waiting" },
                        ].map((apt, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>{apt.name}</p>
                                    <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{apt.type} • {apt.time}</p>
                                </div>
                                <span style={{
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '4px',
                                    fontSize: '0.7rem',
                                    fontWeight: 800,
                                    background: apt.status === 'In Consultation' ? 'var(--primary-light)' : '#f8fafc',
                                    color: apt.status === 'In Consultation' ? 'var(--accent)' : 'var(--secondary)',
                                    border: '1px solid var(--glass-border)'
                                }}>{apt.status.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Lab Reports</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {[
                            { patient: "Nisha Sharma", test: "Hemoglobin Panel", urgency: "Normal" },
                            { patient: "Meera Kaur", test: "Anatomy Scan", urgency: "Review Needed" },
                        ].map((rep, i) => (
                            <div key={i} style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.2rem' }}>{rep.patient}</p>
                                <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '0.8rem' }}>{rep.test}</p>
                                <button className="btn" style={{ padding: '0.5rem', fontSize: '0.75rem', width: '100%', justifyContent: 'center', background: 'var(--primary)', color: 'white', borderRadius: '4px' }}>Sign & Approve</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
