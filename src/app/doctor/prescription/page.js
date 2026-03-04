"use client";
import { useState } from 'react';

export default function PrescriptionModule() {
    const [items, setItems] = useState([{ id: 1, name: '', dose: '', timing: '' }]);

    const addItem = () => setItems([...items, { id: Date.now(), name: '', dose: '', timing: '' }]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>DIGITAL PRESCRIPTION</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn" style={{ border: '1px solid var(--glass-border)', padding: '0.6rem 1.5rem', borderRadius: '4px', fontSize: '0.9rem' }}>PRE-SET TEMPLATES</button>
                    <button className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '4px', fontSize: '0.9rem' }}>PRINT / GENERATE PDF</button>
                </div>
            </div>

            <div style={{ padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Rx MEDICATION DETAILS</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {items.map((item, index) => (
                            <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr auto', gap: '1rem', alignItems: 'center' }}>
                                <input
                                    placeholder="Medicine Name (e.g. Iron Supplement)"
                                    style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '0.9rem' }}
                                />
                                <input
                                    placeholder="Dosage (e.g. 500mg)"
                                    style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '0.9rem' }}
                                />
                                <select style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #e2e8f0', outline: 'none', background: 'white', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                                    <option>1-0-1 (Twice daily)</option>
                                    <option>1-1-1 (Thrice daily)</option>
                                    <option>0-0-1 (Night only)</option>
                                    <option>1-0-0 (Morning only)</option>
                                </select>
                                <button style={{ border: 'none', background: 'transparent', color: '#ef4444', fontWeight: 800, cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={addItem} style={{ marginTop: '1.5rem', padding: '0.6rem 1.2rem', borderRadius: '4px', border: '1px dashed var(--accent)', background: 'transparent', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>
                        + ADD MEDICINE ROW
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '2.5rem', borderTop: '1px solid #f1f5f9' }}>
                    <label style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--primary)', textTransform: 'uppercase' }}>Clinical Advice & Notes</label>
                    <textarea
                        placeholder="Drink plenty of water, avoid heavy lifting, and maintain a high-protein diet..."
                        style={{ width: '100%', height: '120px', padding: '1.2rem', borderRadius: '4px', border: '1px solid var(--glass-border)', outline: 'none', resize: 'none', fontSize: '0.9rem', background: '#fcfdfe' }}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
