"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ links, userType }) {
    const pathname = usePathname();

    return (
        <aside className="glass" style={{
            width: '280px',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            borderRight: '1px solid var(--glass-border)',
            zIndex: 100,
            background: 'white'
        }}>
            <div style={{ marginBottom: '3rem', padding: '0 0.5rem' }}>
                <Link href="/" className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 900 }}>
                    {userType === 'doctor' ? 'Dr. Admin' : 'MyHealth'}
                </Link>
            </div>

            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 1.2rem',
                                borderRadius: '16px',
                                fontWeight: isActive ? 700 : 500,
                                color: isActive ? 'var(--primary)' : 'var(--foreground)',
                                background: isActive ? 'rgba(238, 149, 158, 0.1)' : 'transparent',
                                transition: 'all 0.2s ease',
                                opacity: isActive ? 1 : 0.7
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) e.currentTarget.style.background = 'rgba(238, 149, 158, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>{link.icon}</span>
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            <div style={{ marginTop: 'auto', padding: '1.5rem', borderRadius: '20px', background: 'var(--primary-light)', border: '1px solid var(--glass-border)' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>Need Help?</p>
                <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>Contact support or view FAQs in our education hub.</p>
            </div>
        </aside>
    );
}
