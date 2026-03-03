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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Obstetric <span className="gradient-text">Module</span></h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn glass">Export PDF</button>
                    <button className="btn btn-primary">Update Delivery Plan</button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Pregnancy <span className="gradient-text">Details</span></h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <label style={{ fontSize: '0.85rem', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>LMP (Last Menstrual Period)</label>
                            <input
                                type="date"
                                value={lmp}
                                onChange={(e) => setLmp(e.target.value)}
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1px solid var(--glass-border)', outline: 'none' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.85rem', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>EDD (Estimated Due Date)</label>
                            <div style={{ padding: '1rem', borderRadius: '15px', background: 'var(--primary-light)', fontWeight: 800, color: 'var(--primary)', border: '1px solid var(--glass-border)' }}>
                                {calculateEDD(lmp)}
                            </div>
                        </div>
                        <div>
                            <label style={{ fontSize: '0.85rem', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>GPA Status</label>
                            <input
                                type="text"
                                defaultValue="G2 P1 A0"
                                style={{ width: '100%', padding: '1rem', borderRadius: '15px', border: '1px solid var(--glass-border)', outline: 'none' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.85rem', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>Trimester</label>
                            <div style={{ padding: '1rem', borderRadius: '15px', background: 'white', fontWeight: 800, border: '1px solid var(--glass-border)' }}>
                                2nd Trimester (Week 24)
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Fetal Heart Rate Log</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { date: '2026-03-01', rate: '145 bpm', status: 'Normal' },
                                { date: '2026-02-15', rate: '142 bpm', status: 'Normal' },
                                { date: '2026-02-01', rate: '148 bpm', status: 'Normal' },
                            ].map((log, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'white', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
                                    <span style={{ fontWeight: 600 }}>{log.date}</span>
                                    <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{log.rate}</span>
                                    <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 700 }}>{log.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '30px' }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>High-Risk <span className="gradient-text">Factors</span></h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['Gestational Diabetes', 'Mild Hypertension', 'Advanced Maternal Age'].map((f, i) => (
                                <span key={i} style={{ padding: '0.5rem 1rem', borderRadius: '20px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontSize: '0.8rem', fontWeight: 700 }}>
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '2rem', borderRadius: '30px' }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Vaccination <span className="gradient-text">Tracker</span></h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { name: "TT-1", status: "Completed", date: "Week 16" },
                                { name: "TT-2", status: "Pending", date: "Week 28" },
                                { name: "Influenza", status: "Completed", date: "Week 20" },
                            ].map((v, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{v.name}</p>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{v.date}</span>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 800,
                                        color: v.status === 'Completed' ? '#10b981' : 'var(--primary)'
                                    }}>{v.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
