import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at top right, rgba(238, 149, 158, 0.08), transparent), radial-gradient(circle at bottom left, rgba(244, 114, 182, 0.05), transparent)'
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Compassionate <span className="gradient-text">Women's Care</span> by Dr. Chandrahas
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Specializing in High-Risk Pregnancy Management, Infertility, and Advanced Laparoscopic Surgery with over 8 years of dedicated clinical excellence.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#contact" className="btn btn-primary">Book Consultation</a>
              <a href="#services" className="btn glass" style={{ padding: '0.8rem 2rem' }}>Our Services</a>
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem' }}>
              <div>
                <h3 className="gradient-text" style={{ fontSize: '2rem' }}>8+</h3>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.6 }}>Years Exp.</p>
              </div>
              <div>
                <h3 className="gradient-text" style={{ fontSize: '2rem' }}>5000+</h3>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.6 }}>Happy Mothers</p>
              </div>
              <div>
                <h3 className="gradient-text" style={{ fontSize: '2rem' }}>99%</h3>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, opacity: 0.6 }}>Success rate</p>
              </div>
            </div>
          </div>

          <div className="glass" style={{
            height: '600px',
            borderRadius: '40px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '80%',
              height: '80%',
              background: 'linear-gradient(135deg, var(--primary-light), var(--secondary))',
              borderRadius: '30px',
              opacity: 0.1,
              position: 'absolute'
            }}></div>
            <p style={{ fontWeight: 700, opacity: 0.5 }}>[ Professional Image of Dr. Chandrahas ]</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Expert Medical <span className="gradient-text">Services</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.7 }}>
              Providing comprehensive gynecological and obstetric care with a focus on patient-centric, evidence-based protocols.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              {
                title: "High-Risk Pregnancy",
                desc: "Comprehensive care for complex pregnancies, ensuring safety for both mother and child.",
                icon: "🍼"
              },
              {
                title: "Laparoscopic Surgery",
                desc: "Minimally invasive procedures for faster recovery and minimal scarring.",
                icon: "🔬"
              },
              {
                title: "Infertility Support",
                desc: "Advanced evaluation and personalized fertility treatments to help you start your journey.",
                icon: "✨"
              }
            ].map((s, i) => (
              <div key={i} className="glass" style={{ padding: '3rem 2rem', borderRadius: '30px', transition: 'transform 0.3s ease' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{s.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
          <div className="glass" style={{ height: '500px', borderRadius: '40px' }}></div>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Meet <span className="gradient-text">Dr. Nadendla Chandrahas</span></h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', opacity: 0.8 }}>
              Dr. Nadendla Chandrahas is an experienced Consultant Obstetrician and Gynaecologist with over 8 years of dedicated clinical experience in comprehensive women's healthcare.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', opacity: 0.8 }}>
              She is trained in delivering evidence-based, protocol-driven, and patient-centric obstetric and gynecological care, encompassing preventive, diagnostic, and therapeutic services.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)', background: 'rgba(238, 149, 158, 0.05)' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Education</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>MBBS | MS | FMAS</p>
              </div>
              <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary)', background: 'rgba(244, 114, 182, 0.05)' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Specialization</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Obstetrician & Gynaecologist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Mock */}
      <section id="contact" className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>Ready to Consult?</h2>
          <p style={{ marginBottom: '3rem', opacity: 0.9 }}>Book your appointment online or visit our clinic.</p>
          <a href="#" className="btn glass" style={{ fontSize: '1.2rem', padding: '1rem 3rem', background: 'white', color: 'var(--primary)' }}>Get in Touch</a>
        </div>
      </section>

      <footer className="section-padding" style={{ textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
        <p>© 2026 Dr. Nadendla Chandrahas. All rights reserved.</p>
      </footer>
    </main>
  );
}
