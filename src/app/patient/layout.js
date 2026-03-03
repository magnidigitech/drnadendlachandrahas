import Sidebar from '../components/Sidebar';

export default function PatientLayout({ children }) {
    const patientLinks = [
        { href: '/patient', label: 'Dashboard', icon: '🏠' },
        { href: '/patient/progress', label: 'My Progress', icon: '📈' },
        { href: '/patient/appointments', label: 'Appointments', icon: '📅' },
        { href: '/patient/records', label: 'Medical Records', icon: '📂' },
        { href: '/patient/education', label: 'Education Hub', icon: '🎓' },
        { href: '/patient/settings', label: 'Settings', icon: '⚙️' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#fdf2f2' }}>
            <Sidebar links={patientLinks} userType="patient" />
            <main style={{ marginLeft: '280px', flex: 1, padding: '2rem 3rem' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Welcome <span className="gradient-text">Olivia</span></h1>
                        <p style={{ opacity: 0.6 }}>You have got no appointments for today</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="glass" style={{ padding: '0.8rem', borderRadius: '50%', cursor: 'pointer' }}>🔔</div>
                        <div className="glass" style={{ padding: '0.8rem', borderRadius: '50%', cursor: 'pointer' }}>🛒</div>
                        <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>OR</div>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Olivia Roye</p>
                                <p style={{ fontSize: '0.7rem', opacity: 0.6 }}>Patient</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
                    <div>{children}</div>
                    <aside>
                        {/* Contextual Right Sidebar for Patient Info */}
                        <div className="glass" style={{ padding: '2rem', borderRadius: '30px', position: 'sticky', top: '2rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary-light)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👩</div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Olivia Roye</h3>
                                <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>36 Weeks Pregnant</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem', textAlign: 'center' }}>
                                <div><p style={{ fontSize: '0.7rem', opacity: 0.6 }}>Blood</p><p style={{ fontWeight: 700, color: 'var(--secondary)' }}>AB+</p></div>
                                <div><p style={{ fontSize: '0.7rem', opacity: 0.6 }}>Height</p><p style={{ fontWeight: 700 }}>160 cm</p></div>
                                <div><p style={{ fontSize: '0.7rem', opacity: 0.6 }}>Weight</p><p style={{ fontWeight: 700 }}>54 kg</p></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <button className="btn glass" style={{ width: '100%', justifyContent: 'space-between', padding: '1rem' }}>
                                    <span>Health Plans</span> <span>→</span>
                                </button>
                                <button className="btn glass" style={{ width: '100%', justifyContent: 'space-between', padding: '1rem' }}>
                                    <span>Medical Records</span> <span>→</span>
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
