"use client";
import { useState } from 'react';

export default function GynecologyModule() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>GYNECOLOGY SECTION</h2>
                <button className="btn" style={{ background: 'var(--primary)', color: 'white', borderRadius: '4px', padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>+ NEW EVALUATION</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Menstrual History</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.6rem' }}>CYCLE REGULARITY</p>
                            <div style={{ padding: '0.8rem 1rem', borderRadius: '4px', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', border: '1px solid var(--glass-border)' }}>Regular (28-30 days)</div>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.6rem' }}>FLOW INTENSITY</p>
                            <div style={{ padding: '0.8rem 1rem', borderRadius: '4px', background: 'white', border: '1px solid var(--glass-border)', fontSize: '0.9rem' }}>Moderate</div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.6rem' }}>LAST PERIOD</p>
                                <div style={{ padding: '0.8rem 1rem', borderRadius: '4px', background: 'white', border: '1px solid var(--glass-border)', fontSize: '0.9rem' }}>15 Feb 2026</div>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.6rem' }}>DURATION</p>
                                <div style={{ padding: '0.8rem 1rem', borderRadius: '4px', background: 'white', border: '1px solid var(--glass-border)', fontSize: '0.9rem' }}>5 Days</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                    <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Condition Tracking</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {[
                            { label: 'PCOS Status', value: 'Managed', color: '#10b981' },
                            { label: 'Endometriosis', value: 'Observation', color: 'var(--accent)' },
                            { label: 'Pap Smear', value: 'Normal (June 2025)', color: '#10b981' },
                            { label: 'HPV Vaccination', value: 'Completed', color: '#10b981' },
                        ].map((cond, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f8fafc', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                                <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{cond.label}</span>
                                <span style={{ fontWeight: 800, color: cond.color, fontSize: '0.85rem' }}>{cond.value.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', gridColumn: 'span 2' }}>
                    <h3 style={{ marginBottom: '1.8rem', fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Fertility Treatment Logs</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
                        {[
                            { date: 'Jan 2026', treatment: 'Follicular Study', result: 'Dominant follicle seen' },
                            { date: 'Dec 2025', treatment: 'Hormonal Profile', result: 'TSH slightly elevated' },
                            { date: 'Nov 2025', treatment: 'Initial Consultation', result: 'Primary Infertility' },
                        ].map((log, i) => (
                            <div key={i} style={{ padding: '1.5rem', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                                <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.5rem' }}>{log.date.toUpperCase()}</p>
                                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{log.treatment}</p>
                                <p style={{ fontSize: '0.85rem', opacity: 0.6, lineHeight: 1.5 }}>{log.result}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
