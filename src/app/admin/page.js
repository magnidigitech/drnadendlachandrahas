"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/patients.php')
            .then(res => res.json())
            .then(data => {
                setPatients(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch patients:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem' }}>Patient <span className="gradient-text">Overview</span></h1>
                <button className="btn btn-primary">+ New Patient</button>
            </header>

            <div className="glass" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>Loading Patients...</div>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                            <tr>
                                <th style={{ padding: '1.5rem' }}>Name</th>
                                <th style={{ padding: '1.5rem' }}>Stage</th>
                                <th style={{ padding: '1.5rem' }}>Current Status</th>
                                <th style={{ padding: '1.5rem' }}>Next Appointment</th>
                                <th style={{ padding: '1.5rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(p => (
                                <tr key={p.id} style={{ borderTop: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: 600 }}>{p.name}</td>
                                    <td style={{ padding: '1.5rem' }}>{p.weeks_pregnant} Weeks</td>
                                    <td style={{ padding: '1.5rem' }}>
                                        <span style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            background: p.status.includes('reported') ? 'rgba(219, 39, 119, 0.1)' : 'rgba(45, 212, 191, 0.1)',
                                            color: p.status.includes('reported') ? 'var(--secondary)' : 'var(--accent)'
                                        }}>{p.status}</span>
                                    </td>
                                    <td style={{ padding: '1.5rem' }}>{p.next_appointment}</td>
                                    <td style={{ padding: '1.5rem' }}>
                                        <Link href={`/admin/patient/${p.id}`} className="btn glass" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>Track Symptoms</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
