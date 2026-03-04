"use client";
import { useState } from 'react';

export default function ObstetricModule() {
    const [lmp, setLmp] = useState('2025-10-15');

    // Simple EDD calculation (LMP + 280 days)
    const calculateEDD = (dateStr) => {
        if (!dateStr) return 'N/A';
        const date = new Date(dateStr);
        date.setDate(date.getDate() + 280);
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>OBSTETRIC MANAGEMENT</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn" style={{ border: '1px solid var(--glass-border)', padding: '0.6rem 1.2rem', borderRadius: '4px', fontSize: '0.9rem' }}>Export Patient Summary</button>
                    <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '4px', fontSize: '0.9rem' }}>Update Delivery Plan</button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Pregnancy Overview</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', display: 'block', marginBottom: '0.6rem' }}>LMP (LAST MENSTRUAL PERIOD)</label>
                            <input
                                type="date"
                                value={lmp}
                                onChange={(e) => setLmp(e.target.value)}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--glass-border)', outline: 'none', fontSize: '0.9rem' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', display: 'block', marginBottom: '0.6rem' }}>EDD (ESTIMATED DUE DATE)</label>
                            <div style={{ padding: '0.8rem', borderRadius: '4px', background: 'var(--primary-light)', fontWeight: 700, color: 'var(--primary)', border: '1px solid var(--glass-border)', fontSize: '0.9rem' }}>
                                {calculateEDD(lmp)}
                            </div>
                        </div>
                        <div>
                            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', display: 'block', marginBottom: '0.6rem' }}>GPA STATUS</label>
                            <input
                                type="text"
                                defaultValue="G2 P1 A0"
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--glass-border)', outline: 'none', fontSize: '0.9rem' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', display: 'block', marginBottom: '0.6rem' }}>CURRENT GESTATION</label>
                            <div style={{ padding: '0.8rem', borderRadius: '4px', background: 'white', fontWeight: 700, border: '1px solid var(--glass-border)', fontSize: '0.9rem' }}>
                                2nd Trimester (24 Weeks)
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '2.5rem' }}>
                        <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)' }}>FETAL HEART RATE MONITORING</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {[
                                { date: '2026-03-01', rate: '145 bpm', status: 'Normal' },
                                { date: '2026-02-15', rate: '142 bpm', status: 'Normal' },
                                { date: '2026-02-01', rate: '148 bpm', status: 'Normal' },
                            ].map((log, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8fafc', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                                    <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{log.date}</span>
                                    <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.85rem' }}>{log.rate}</span>
                                    <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 800 }}>{log.status.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                        <h3 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>High-Risk Factors</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['Gestational Diabetes', 'Mild Hypertension', 'Advanced Maternal Age'].map((f, i) => (
                                <span key={i} style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.05)', color: '#ef4444', fontSize: '0.7rem', fontWeight: 800 }}>
                                    {f.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                        <h3 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Vaccination Status</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {[
                                { name: "TT-1", status: "Completed", date: "Week 16" },
                                { name: "TT-2", status: "Pending", date: "Week 28" },
                                { name: "Influenza", status: "Completed", date: "Week 20" },
                            ].map((v, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.8rem', borderBottom: '1px solid #f1f5f9' }}>
                                    <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{v.name}</p>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>{v.date}</span>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 800,
                                        color: v.status === 'Completed' ? '#10b981' : 'var(--accent)'
                                    }}>{v.status.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
