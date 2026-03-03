import Sidebar from '../components/Sidebar';

export default function DoctorLayout({ children }) {
    const doctorLinks = [
        { href: '/doctor', label: 'Overview', icon: '🏠' },
        { href: '/doctor/patients', label: 'Patients', icon: '👥' },
        { href: '/doctor/appointments', label: 'Schedule', icon: '📅' },
        { href: '/doctor/surgeries', label: 'Surgeries', icon: '🏥' },
        { href: '/doctor/billing', label: 'Billing', icon: '💳' },
        { href: '/doctor/analytics', label: 'Analytics', icon: '📊' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#fdf2f2' }}>
            <Sidebar links={doctorLinks} userType="doctor" />
            <main style={{ marginLeft: '280px', flex: 1, padding: '2rem 3rem' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Clinical <span className="gradient-text">Efficiency</span></h1>
                        <p style={{ opacity: 0.6 }}>Welcome back, Dr. Chandrahas</p>
                    </div>
                    <div className="glass" style={{ padding: '0.5rem 1.5rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>🔔</span>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>DC</div>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
