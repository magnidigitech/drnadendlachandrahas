"use client";
import { useState } from 'react';

export default function PregnancyTracker() {
    const [kicks, setKicks] = useState(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Pregnancy <span className="gradient-text">Journey</span></h2>
                <div className="glass" style={{ padding: '0.8rem 1.5rem', borderRadius: '50px', fontWeight: 800, color: 'var(--primary)' }}>Week 36 • Trimester 3</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                {/* Baby Development */}
                <div className="glass" style={{ padding: '2.5rem', borderRadius: '40px', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Baby's <span className="gradient-text">Growth</span></h3>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🍈</div>
                        <div>
                            <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Your baby is the size of a Honeydew Melon!</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.6 }}>At 36 weeks, your baby is packing on the pounds and getting ready for the big day. Their lungs are almost fully developed, and they are practicing breathing.</p>
                        </div>
                    </div>
                </div>

                {/* Kick Counter */}
                <div className="glass" style={{ padding: '2.5rem', borderRadius: '40px', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'white' }}>Kick Counter</h3>
                    <p style={{ fontSize: '0.85rem', opacity: 0.9, marginBottom: '1.5rem' }}>A healthy baby should kick about 10 times in 2 hours.</p>
                    <div style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem' }}>{kicks}</div>
                    <button
                        onClick={() => setKicks(kicks + 1)}
                        style={{ padding: '1rem 2rem', borderRadius: '50px', border: 'none', background: 'white', color: 'var(--primary)', fontWeight: 800, cursor: 'pointer', transition: 'transform 0.2s ease' }}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        👣 Record Kick
                    </button>
                </div>
            </div>

            {/* Visual Charts Mock */}
            <div className="glass" style={{ padding: '2.5rem', borderRadius: '40px', background: 'white' }}>
                <h3 style={{ marginBottom: '2rem' }}>Weight & <span className="gradient-text">Blood Pressure Log</span></h3>
                <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '1rem', paddingBottom: '1rem', borderBottom: '2px solid var(--primary-light)' }}>
                    {[30, 45, 60, 55, 75, 80, 95].map((h, i) => (
                        <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--primary)', borderRadius: '10px 10px 0 0', opacity: 0.3 + (i * 0.1) }}></div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', opacity: 0.5, fontSize: '0.8rem' }}>
                    <span>Week 30</span>
                    <span>Week 32</span>
                    <span>Week 34</span>
                    <span>Week 36 (Current)</span>
                </div>
            </div>
        </div>
    );
}
