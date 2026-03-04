"use client";
import { useState } from 'react';

export default function PeriodTracker() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>CYCLE TRACKING</h2>
                <button className="btn" style={{ background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', padding: '0.6rem 1.5rem', fontSize: '0.85rem', fontWeight: 700 }}>LOG CYCLE START</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Ovulation Window</h3>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '0.3rem' }}>12 Days</div>
                        <p style={{ opacity: 0.6, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Predicted High Fertility</p>
                    </div>
                </div>

                <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Cycle Insights</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.8rem', borderBottom: '1px solid #f1f5f9' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--secondary)' }}>Average Cycle Length</span>
                            <span style={{ fontWeight: 800, color: 'var(--primary)' }}>28 Days</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.8rem' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--secondary)' }}>Typical Duration</span>
                            <span style={{ fontWeight: 800, color: 'var(--primary)' }}>5 Days</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Symptoms Tracking */}
            <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Recent Symptom Logs</h3>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    {['Cramps', 'Headache', 'Mood Fluctuations', 'Fatigue'].map((s, i) => (
                        <div key={i} style={{ padding: '0.6rem 1.2rem', borderRadius: '4px', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800, border: '1px solid var(--glass-border)', fontSize: '0.75rem' }}>
                            {s.toUpperCase()}
                        </div>
                    ))}
                    <button style={{ padding: '0.6rem 1.2rem', borderRadius: '4px', border: '1px dashed var(--accent)', background: 'transparent', color: 'var(--accent)', fontWeight: 800, cursor: 'pointer', fontSize: '0.75rem' }}>+ ADD SYMPTOM</button>
                </div>
            </div>
        </div>
    );
}
