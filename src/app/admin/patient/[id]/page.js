export default function PatientTracking({ params }) {
    const { id } = params;

    return (
        <div>
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem' }}>Tracking: <span className="gradient-text">Lakshmi Devi</span></h1>
                <p style={{ opacity: 0.6 }}>Stage: 24 Weeks | Normal Progress</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
                {[
                    { label: 'Weight', value: '62 kg', status: '+2kg this month' },
                    { label: 'Blood Pressure', value: '110/70', status: 'Optimal' },
                    { label: 'Fetal Movements', value: '12/day', status: 'Healthy' },
                ].map((stat, i) => (
                    <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '0.5rem' }}>{stat.label}</p>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{stat.value}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>{stat.status}</p>
                    </div>
                ))}
            </div>

            <h2 style={{ marginBottom: '2rem' }}>Symptom <span className="gradient-text">Logs</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                    { date: '2026-03-01', symptom: 'Mild Fatigue', intensity: 'Low', note: 'Likely due to increased activity.' },
                    { date: '2026-02-25', symptom: 'Back Pain', intensity: 'Medium', note: 'Recommended prenatal yoga.' },
                    { date: '2026-02-20', symptom: 'None', intensity: 'None', note: 'Follow-up went smooth.' },
                ].map((log, i) => (
                    <div key={i} className="glass" style={{ padding: '1.5rem 2rem', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontWeight: 700, marginBottom: '0.2rem' }}>{log.symptom}</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{log.note}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{log.date}</p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Intensity: {log.intensity}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '3rem' }}>
                <button className="btn btn-primary">Add New Entry</button>
            </div>
        </div>
    );
}
