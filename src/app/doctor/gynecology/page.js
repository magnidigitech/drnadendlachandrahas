"use client";
import { useState } from 'react';

export default function GynecologyModule() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Gynecology <span className="gradient-text">Module</span></h2>
                <button className="btn btn-primary">+ New Evaluation</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Menstrual <span className="gradient-text">History</span></h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '0.5rem' }}>Cycle Regularity</p>
                            <div style={{ padding: '0.8rem 1.2rem', borderRadius: '12px', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>Regular (28-30 days)</div>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '0.5rem' }}>Flow Intensity</p>
                            <div style={{ padding: '0.8rem 1.2rem', borderRadius: '12px', background: 'white', border: '1px solid var(--glass-border)' }}>Moderate</div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '0.5rem' }}>Last Period</p>
                                <div style={{ padding: '0.8rem 1.2rem', borderRadius: '12px', background: 'white', border: '1px solid var(--glass-border)' }}>15 Feb 2026</div>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '0.5rem' }}>Duration</p>
                                <div style={{ padding: '0.8rem 1.2rem', borderRadius: '12px', background: 'white', border: '1px solid var(--glass-border)' }}>5 Days</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Condition <span className="gradient-text">Tracking</span></h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { label: 'PCOS Status', value: 'Managed', color: '#10b981' },
                            { label: 'Endometriosis', value: 'Observation', color: 'var(--primary)' },
                            { label: 'Pap Smear', value: 'Normal (June 2025)', color: '#10b981' },
                            { label: 'HPV Vaccination', value: 'Completed', color: '#10b981' },
                        ].map((cond, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'white', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
                                <span style={{ fontWeight: 600 }}>{cond.label}</span>
                                <span style={{ fontWeight: 800, color: cond.color }}>{cond.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px', gridColumn: 'span 2' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Fertility <span className="gradient-text">Treatment Logs</span></h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {[
                            { date: 'Jan 2026', treatment: 'Follicular Study', result: 'Dominant follicle seen' },
                            { date: 'Dec 2025', treatment: 'Hormonal Profile', result: 'TSH slightly elevated' },
                            { date: 'Nov 2025', treatment: 'Initial Consultation', result: 'Primary Infertility' },
                        ].map((log, i) => (
                            <div key={i} style={{ padding: '1.5rem', borderRadius: '20px', background: 'white', border: '1px solid var(--glass-border)' }}>
                                <p style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.5rem' }}>{log.date}</p>
                                <p style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>{log.treatment}</p>
                                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{log.result}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
