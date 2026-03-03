"use client";
import { useState } from 'react';

export default function PrescriptionModule() {
    const [items, setItems] = useState([{ id: 1, name: '', dose: '', timing: '' }]);

    const addItem = () => setItems([...items, { id: Date.now(), name: '', dose: '', timing: '' }]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Digital <span className="gradient-text">Prescription</span></h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn glass">Templates</button>
                    <button className="btn btn-primary">Print / PDF</button>
                </div>
            </div>

            <div className="glass" style={{ padding: '2.5rem', borderRadius: '30px' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Rx <span className="gradient-text">Details</span></h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {items.map((item, index) => (
                            <div key={item.id} style={{ display: 'contents' }}>
                                <input
                                    placeholder="Medicine Name (e.g. Iron)"
                                    style={{ padding: '1rem', borderRadius: '15px', border: '1px solid var(--glass-border)', outline: 'none' }}
                                />
                                <input
                                    placeholder="Dosage (e.g. 500mg)"
                                    style={{ padding: '1rem', borderRadius: '15px', border: '1px solid var(--glass-border)', outline: 'none' }}
                                />
                                <select style={{ padding: '1rem', borderRadius: '15px', border: '1px solid var(--glass-border)', outline: 'none', background: 'white' }}>
                                    <option>1-0-1 (Twice daily)</option>
                                    <option>1-1-1 (Thrice daily)</option>
                                    <option>0-0-1 (Night only)</option>
                                    <option>1-0-0 (Morning only)</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    <button onClick={addItem} style={{ marginTop: '1.5rem', padding: '0.8rem 1.5rem', borderRadius: '12px', border: '1px dashed var(--primary)', background: 'transparent', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}>
                        + Add Another Medicine
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <label style={{ fontWeight: 800 }}>Advice / Notes</label>
                    <textarea
                        placeholder="Drink plenty of water, avoid heavy lifting..."
                        style={{ width: '100%', height: '100px', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', outline: 'none', resize: 'none' }}
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
