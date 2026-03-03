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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Patient <span className="gradient-text">Management</span></h2>
                <button className="btn btn-primary">+ New Patient</button>
            </div>

            <div className="glass" style={{ padding: '1.5rem', borderRadius: '20px', display: 'flex', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Search patients by name..."
                    style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '15px', border: '1px solid var(--glass-border)', outline: 'none', fontSize: '1rem' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select style={{ padding: '1rem', borderRadius: '15px', border: '1px solid var(--glass-border)', outline: 'none', background: 'white' }}>
                    <option>All Status</option>
                    <option>High Risk</option>
                    <option>Healthy</option>
                    <option>Observation</option>
                </select>
            </div>

            <div className="glass" style={{ borderRadius: '30px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                        <tr>
                            <th style={{ padding: '1.5rem' }}>Name</th>
                            <th style={{ padding: '1.5rem' }}>Age</th>
                            <th style={{ padding: '1.5rem' }}>Blood Group</th>
                            <th style={{ padding: '1.5rem' }}>Status</th>
                            <th style={{ padding: '1.5rem' }}>Last Visit</th>
                            <th style={{ padding: '1.5rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map(p => (
                            <tr key={p.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <td style={{ padding: '1.5rem', fontWeight: 700 }}>{p.name}</td>
                                <td style={{ padding: '1.5rem' }}>{p.age}</td>
                                <td style={{ padding: '1.5rem' }}>{p.group}</td>
                                <td style={{ padding: '1.5rem' }}>
                                    <span style={{
                                        padding: '0.4rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        background: p.status === 'High Risk' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(238, 149, 158, 0.1)',
                                        color: p.status === 'High Risk' ? '#ef4444' : 'var(--primary)'
                                    }}>{p.status}</span>
                                </td>
                                <td style={{ padding: '1.5rem' }}>{p.lastVisit}</td>
                                <td style={{ padding: '1.5rem' }}>
                                    <button className="btn glass" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>View Profile</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
