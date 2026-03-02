import Link from 'next/link';

export default function AdminLayout({ children }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', minHeight: '100vh' }}>
            <aside className="glass" style={{ padding: '2rem', borderRight: '1px solid var(--glass-border)' }}>
                <Link href="/" className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '3rem', display: 'block' }}>
                    Dr. Admin
                </Link>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href="/admin" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(109, 40, 217, 0.1)', fontWeight: 600 }}>Patients</Link>
                    <Link href="#" style={{ padding: '1rem', opacity: 0.6 }}>Schedule</Link>
                    <Link href="#" style={{ padding: '1rem', opacity: 0.6 }}>Analytics</Link>
                    <Link href="#" style={{ padding: '1rem', opacity: 0.6 }}>Settings</Link>
                </nav>
            </aside>
            <main style={{ padding: '3rem', background: '#F1F5F9' }}>
                {children}
            </main>
        </div>
    );
}
