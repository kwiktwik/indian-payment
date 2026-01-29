import React, { useEffect } from 'react';

const providers = [
  {
    name: "Razorpay",
    description: "The only payments solution in India that allows businesses to accept, process and disburse payments with its product suite.",
    color: "#3395ff"
  },
  {
    name: "PhonePe",
    description: "India's leading digital payments app. Send money, recharge mobiles, pay bills and buy gold/investments.",
    color: "#5f259f"
  },
  {
    name: "Paytm",
    description: "India's Most Trusted Brand for Digital Payments. Pay using Wallet, UPI, Cards or Net Banking.",
    color: "#00b9f5"
  },
  {
    name: "Juspay",
    description: "Building the most reliable payment infrastructure for India. Trusted by leading companies.",
    color: "#f6a72c"
  }
];

function App() {
  useEffect(() => {
    // Simple intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <header>
        <div className="container">
          <nav>
            <div className="logo">India<span>Payments</span></div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#providers">Providers</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Login</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1 className="animate-on-scroll">
              Simplify Payments <br />
              <span className="text-gradient">For India</span>
            </h1>
            <p className="animate-on-scroll">
              Integrate the best Indian payment gateways with a single unified API. 
              Secure, fast, and reliable payments for your business.
            </p>
            <div className="animate-on-scroll">
              <a href="#" className="btn btn-primary">Get Started Now</a>
            </div>
          </div>
        </section>

        <section id="providers" className="providers">
          <div className="container">
            <h2 className="section-title animate-on-scroll">Supported Providers</h2>
            <div className="grid">
              {providers.map((provider, index) => (
                <div key={index} className="card animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="icon" style={{ color: provider.color }}>
                    {provider.name[0]}
                  </div>
                  <h3>{provider.name}</h3>
                  <p>{provider.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© 2024 IndiaPayments. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
