import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.2rem 0',
            background: 'var(--background)',
            borderBottom: '1px solid var(--glass-border)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--primary)' }}>
                    DR. CHANDRAHAS
                </Link>
                <div style={{ display: 'flex', gap: '2.5rem', fontWeight: 500, alignItems: 'center', fontSize: '0.95rem' }}>
                    <Link href="#services" style={{ opacity: 0.8 }}>Services</Link>
                    <Link href="#about" style={{ opacity: 0.8 }}>About</Link>
                    <Link href="/doctor" style={{ fontWeight: 600, color: 'var(--accent)' }}>Doctor Portal</Link>
                    <Link href="#contact" className="btn" style={{
                        padding: '0.6rem 1.5rem',
                        background: 'var(--primary)',
                        color: 'white',
                        fontSize: '0.9rem',
                        borderRadius: '6px'
                    }}>
                        Book Appointment
                    </Link>
                </div>
            </div>
        </nav>
    );
}
