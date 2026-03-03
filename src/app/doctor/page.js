export default function DoctorOverview() {
    const stats = [
        { label: "Today's Appointments", value: "12", sub: "4 Completed", color: "var(--primary)" },
        { label: "Total Patients", value: "1,284", sub: "+5 this week", color: "var(--secondary)" },
        { label: "High-Risk Patients", value: "8", sub: "Needs urgent review", color: "#ef4444" },
        { label: "Pending Reports", value: "15", sub: "Ready for signature", color: "var(--accent)" },
    ];

    const quickActions = [
        { label: "New Patient", icon: "👤" },
        { label: "Prescription", icon: "💊" },
        { label: "Scan Upload", icon: "🖼️" },
        { label: "Schedule Surgery", icon: "🏥" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                {stats.map((s, i) => (
                    <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '30px', borderLeft: `6px solid ${s.color}` }}>
                        <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '0.5rem' }}>{s.label}</p>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>{s.value}</h3>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: s.color }}>{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Quick <span className="gradient-text">Actions</span></h2>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {quickActions.map((action, i) => (
                        <button key={i} className="glass btn" style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: '25px', transition: 'transform 0.2s ease' }}>
                            <span style={{ fontSize: '2.5rem' }}>{action.icon}</span>
                            <span style={{ fontWeight: 700 }}>{action.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area: Appointments & Reports */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Today's <span className="gradient-text">Appointments</span></h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { time: "09:00 AM", name: "Lakshmi Devi", type: "Prenatal Checkup", status: "In Consultation" },
                            { time: "10:30 AM", name: "Padma Rao", type: "Gynecological Exam", status: "Waiting" },
                            { time: "11:45 AM", name: "Anjali Reddy", type: "Post-op Follow-up", status: "Waiting" },
                        ].map((apt, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                                <div>
                                    <p style={{ fontWeight: 800 }}>{apt.name}</p>
                                    <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{apt.type} • {apt.time}</p>
                                </div>
                                <span style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    background: apt.status === 'In Consultation' ? 'rgba(238, 149, 158, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                                    color: apt.status === 'In Consultation' ? 'var(--primary)' : 'inherit'
                                }}>{apt.status}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Lab <span className="gradient-text">Reports</span></h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { patient: "Nisha Sharma", test: "Hemoglobin Panel", urgency: "Normal" },
                            { patient: "Meera Kaur", test: "Anatomy Scan", urgency: "Review Needed" },
                        ].map((rep, i) => (
                            <div key={i} style={{ background: 'white', padding: '1.2rem', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>{rep.patient}</p>
                                <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.8rem' }}>{rep.test}</p>
                                <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.75rem', width: '100%', justifyContent: 'center' }}>Sign & Approve</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
