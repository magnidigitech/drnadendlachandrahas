"use client";
import { useState } from 'react';

export default function PeriodTracker() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Cycle <span className="gradient-text">Tracking</span></h2>
                <button className="btn btn-primary">Log Period Start</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                <div className="glass" style={{ padding: '2.5rem', borderRadius: '40px', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Next <span className="gradient-text">Ovulation</span></h3>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem' }}>12 Days</div>
                        <p style={{ opacity: 0.6 }}>High Fertility Window</p>
                    </div>
                </div>

                <div className="glass" style={{ padding: '2.5rem', borderRadius: '40px', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Cycle <span className="gradient-text">Insights</span></h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ opacity: 0.6 }}>Average Cycle</span>
                            <span style={{ fontWeight: 800 }}>28 Days</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ opacity: 0.6 }}>Period Duration</span>
                            <span style={{ fontWeight: 800 }}>5 Days</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Symptoms Tracking */}
            <div className="glass" style={{ padding: '2.5rem', borderRadius: '40px', background: 'white' }}>
                <h3 style={{ marginBottom: '2rem' }}>Recent <span className="gradient-text">Symptoms</span></h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {['Cramps', 'Headache', 'Mood Swings', 'Fatigue'].map((s, i) => (
                        <div key={i} style={{ padding: '1rem 2rem', borderRadius: '20px', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700, border: '1px solid var(--glass-border)' }}>
                            {s}
                        </div>
                    ))}
                    <button style={{ padding: '1rem 2rem', borderRadius: '20px', border: '1px dashed var(--primary)', background: 'transparent', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}>+ Add Symptom</button>
                </div>
            </div>
        </div>
    );
}
