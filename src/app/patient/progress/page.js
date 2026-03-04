"use client";
import { useState } from 'react';

export default function PregnancyTracker() {
    const [kicks, setKicks] = useState(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>PREGNANCY JOURNEY</h2>
                <div style={{ padding: '0.6rem 1.2rem', borderRadius: '4px', background: 'var(--primary-light)', color: 'var(--primary)', border: '1px solid var(--glass-border)', fontWeight: 800, fontSize: '0.85rem' }}>WEEK 36 • TRIMESTER 3</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                {/* Baby Development */}
                <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Fetal Growth Overview</h3>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#f8fafc', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>🍈</div>
                        <div>
                            <p style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary)' }}>Size Reference: Honeydew Melon</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary)', lineHeight: 1.6, opacity: 0.8 }}>At 36 weeks, your baby is reaching full-term development. Lungs are maturing rapidly, and they are preparing for birth through coordinated breathing movements.</p>
                        </div>
                    </div>
                </div>

                {/* Kick Counter */}
                <div style={{ padding: '2.5rem', borderRadius: '8px', background: 'var(--primary)', color: 'white', textAlign: 'center', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.1)' }}>
                    <h3 style={{ marginBottom: '0.8rem', color: 'white', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase' }}>Fetal Activity Tracker</h3>
                    <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Count 10 kicks within a 2-hour window.</p>
                    <div style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem' }}>{kicks}</div>
                    <button
                        onClick={() => setKicks(kicks + 1)}
                        style={{ padding: '0.8rem 1.5rem', borderRadius: '4px', border: 'none', background: 'white', color: 'var(--primary)', fontWeight: 800, cursor: 'pointer', fontSize: '0.85rem' }}
                    >
                        👣 RECORD ACTIVITY
                    </button>
                </div>
            </div>

            {/* Visual Charts Mock */}
            <div style={{ padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Weight & Vital Trends</h3>
                <div style={{ height: '150px', display: 'flex', alignItems: 'flex-end', gap: '0.8rem', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
                    {[30, 45, 60, 55, 75, 80, 95].map((h, i) => (
                        <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? 'var(--accent)' : '#eaeff2', borderRadius: '2px 2px 0 0' }}></div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--secondary)', opacity: 0.5, fontSize: '0.7rem', fontWeight: 700 }}>
                    <span>WEEK 30</span>
                    <span>WEEK 32</span>
                    <span>WEEK 34</span>
                    <span style={{ color: 'var(--primary)', opacity: 1 }}>WEEK 36 (CURRENT)</span>
                </div>
            </div>
        </div>
    );
}
