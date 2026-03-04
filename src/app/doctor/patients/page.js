"use client";
import { useState } from 'react';

export default function DoctorPatients() {
    const [searchTerm, setSearchTerm] = useState('');

    const patients = [
        { id: 1, name: "Lakshmi Devi", age: 28, group: "O+", status: "High Risk", lastVisit: "2026-03-01" },
        { id: 2, name: "Padma Rao", age: 31, group: "A+", status: "Healthy", lastVisit: "2026-02-25" },
        { id: 3, name: "Anjali Reddy", age: 26, group: "B-", status: "Healthy", lastVisit: "2026-02-20" },
        { id: 4, name: "Nisha Sharma", age: 29, group: "AB+", status: "Observation", lastVisit: "2026-03-02" },
    ];

    const filteredPatients = patients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>PATIENT DATABASE</h2>
                <button className="btn" style={{ background: 'var(--primary)', color: 'white', borderRadius: '4px', padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>+ ADD NEW PATIENT</button>
            </div>

            <div style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', display: 'flex', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Search by name, ID or contact..."
                    style={{ flex: 1, padding: '0.8rem 1.2rem', borderRadius: '4px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '0.9rem' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #e2e8f0', outline: 'none', background: 'white', fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 600 }}>
                    <option>STATUS: ALL</option>
                    <option>HIGH RISK</option>
                    <option>HEALTHY</option>
                    <option>OBSERVATION</option>
                </select>
            </div>

            <div style={{ borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'white', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid var(--glass-border)' }}>
                        <tr>
                            <th style={{ padding: '1.2rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase' }}>Patient Name</th>
                            <th style={{ padding: '1.2rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase' }}>Age</th>
                            <th style={{ padding: '1.2rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase' }}>Blood</th>
                            <th style={{ padding: '1.2rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase' }}>Status</th>
                            <th style={{ padding: '1.2rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase' }}>Last Visit</th>
                            <th style={{ padding: '1.2rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map(p => (
                            <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '1.2rem', fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>{p.name}</td>
                                <td style={{ padding: '1.2rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>{p.age}</td>
                                <td style={{ padding: '1.2rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>{p.group}</td>
                                <td style={{ padding: '1.2rem' }}>
                                    <span style={{
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '4px',
                                        fontSize: '0.7rem',
                                        fontWeight: 800,
                                        background: p.status === 'High Risk' ? 'rgba(239, 68, 68, 0.05)' : 'var(--primary-light)',
                                        color: p.status === 'High Risk' ? '#ef4444' : 'var(--accent)',
                                        border: `1px solid ${p.status === 'High Risk' ? 'rgba(239, 68, 68, 0.1)' : 'var(--glass-border)'}`
                                    }}>{p.status.toUpperCase()}</span>
                                </td>
                                <td style={{ padding: '1.2rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>{p.lastVisit}</td>
                                <td style={{ padding: '1.2rem', textAlign: 'right' }}>
                                    <button className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'white', fontWeight: 700 }}>VIEW FILE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
