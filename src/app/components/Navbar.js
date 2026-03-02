import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1rem 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800 }} className="gradient-text">
                    Dr. Chandrahas
                </Link>
                <div style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
                    <Link href="#services">Services</Link>
                    <Link href="#about">About</Link>
                    <Link href="/admin" className="gradient-text" style={{ fontWeight: 700 }}>Admin Portal</Link>
                    <Link href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        Book Appointment
                    </Link>
                </div>
            </div>
        </nav>
    );
}
