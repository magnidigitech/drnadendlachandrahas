"use client";
import { useState } from 'react';

export default function EMRModule() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>VISIT RECORDS (EMR)</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn" style={{ border: '1px solid var(--glass-border)', padding: '0.6rem 1.5rem', borderRadius: '4px', fontSize: '0.9rem' }}>HISTORY</button>
                    <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '4px', fontSize: '0.9rem' }}>SAVE SOAP NOTE</button>
                </div>
            </div>

            <div style={{ padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', paddingBottom: '1.2rem', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ padding: '0.6rem 1.5rem', borderRadius: '4px', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800, border: '1px solid var(--glass-border)', fontSize: '0.9rem' }}>SOAP NOTES</div>
                    <div style={{ padding: '0.6rem 1.5rem', opacity: 0.4, fontWeight: 700, fontSize: '0.9rem' }}>DIAGNOSIS</div>
                    <div style={{ padding: '0.6rem 1.5rem', opacity: 0.4, fontWeight: 700, fontSize: '0.9rem' }}>PRESCRIPTIONS</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {[
                        { title: 'Subjective', placeholder: 'Patient reports mild nausea in the morning...' },
                        { title: 'Objective', placeholder: 'BP: 110/80, Weight: 62kg, Fetal heart rate: 145 bpm...' },
                        { title: 'Assessment', placeholder: 'Healthy singleton pregnancy, 24 weeks gestation...' },
                        { title: 'Plan', placeholder: 'Continue prenatal vitamins, follow-up in 4 weeks...' }
                    ].map((section, idx) => (
                        <div key={idx}>
                            <h4 style={{ marginBottom: '0.8rem', fontWeight: 800, fontSize: '0.85rem', color: 'var(--primary)', textTransform: 'uppercase' }}>{section.title}</h4>
                            <textarea
                                placeholder={section.placeholder}
                                style={{ width: '100%', height: '140px', padding: '1.2rem', borderRadius: '4px', border: '1px solid var(--glass-border)', outline: 'none', resize: 'none', fontSize: '0.9rem', background: '#fcfdfe' }}
                            ></textarea>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid #f1f5f9' }}>
                    <button className="btn" style={{ padding: '0.8rem 1.5rem', border: '1px dashed var(--accent)', color: 'var(--accent)', borderRadius: '4px', background: 'white', fontWeight: 700 }}>📷 UPLOAD SCAN/REPORT</button>
                    <p style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 500 }}>Supported formats: PDF, JPG, PNG (Max 10MB)</p>
                </div>
            </div>
        </div>
    );
}
