"use client";
import { useState } from 'react';

export default function EMRModule() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Visit <span className="gradient-text">Records (EMR)</span></h2>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <button className="btn glass">History</button>
                    <button className="btn btn-primary">Save SOAP Note</button>
                </div>
            </div>

            <div className="glass" style={{ padding: '3rem', borderRadius: '40px' }}>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div className="glass" style={{ padding: '1rem 2rem', borderRadius: '50px', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800 }}>SOAP Notes</div>
                    <div style={{ padding: '1rem 2rem', opacity: 0.5, fontWeight: 600 }}>Diagnosis</div>
                    <div style={{ padding: '1rem 2rem', opacity: 0.5, fontWeight: 600 }}>Prescriptions</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                    <div>
                        <h4 style={{ marginBottom: '1rem', fontWeight: 800 }}>Subjective</h4>
                        <textarea
                            placeholder="Patient reports mild nausea in the morning..."
                            style={{ width: '100%', height: '120px', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', outline: 'none', resize: 'none' }}
                        ></textarea>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem', fontWeight: 800 }}>Objective</h4>
                        <textarea
                            placeholder="BP: 110/80, Weight: 62kg, Fetal heart rate: 145 bpm..."
                            style={{ width: '100%', height: '120px', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', outline: 'none', resize: 'none' }}
                        ></textarea>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem', fontWeight: 800 }}>Assessment</h4>
                        <textarea
                            placeholder="Healthy singleton pregnancy, 24 weeks gestation..."
                            style={{ width: '100%', height: '120px', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', outline: 'none', resize: 'none' }}
                        ></textarea>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem', fontWeight: 800 }}>Plan</h4>
                        <textarea
                            placeholder="Continue prenatal vitamins, follow-up in 4 weeks..."
                            style={{ width: '100%', height: '120px', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', outline: 'none', resize: 'none' }}
                        ></textarea>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <button className="btn glass" style={{ padding: '1.2rem 2.5rem' }}>📷 Upload Scan/Report</button>
                    <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>Supported formats: PDF, JPG, PNG (Max 10MB)</p>
                </div>
            </div>
        </div>
    );
}
