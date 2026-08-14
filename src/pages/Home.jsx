import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();
  const navigate = useNavigate();

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navbar />

   <main className="home-main home-page-enter">

<section className="home-hero">
          <div className="home-hero-inner">
            <div className="home-hero-text">
              <h1 className="home-display fade-up stagger-1">
                Smarter Campus Management.{" "}
                <span className="home-accent">Better Campus Experience.</span>
              </h1>
              <p className="home-body-lg home-muted fade-up stagger-2">
                A centralized platform for reporting, tracking, and coordinating
                facility issues and campus services. Streamline operations and
                keep your institution running smoothly.
              </p>
              <div className="home-hero-cta fade-up stagger-3">
                <a href="/download" className="home-btn-primary">
                  Download App
                </a>
                <a href="/about" className="home-btn-outline">
                  Learn More
                </a>
              </div>
            </div>

            <div className="home-hero-img-wrap fade-in stagger-4">
              <div className="home-hero-phone">
                <img
                  src="https://i.ibb.co/wrCSVLDT/Chat-GPT-Image-Aug-14-2026-11-59-32-PM.png"
                  alt="UniFiX App Report Issue Screen"
                />
              </div>
              <div className="home-hero-glow" />
            </div>
          </div>
        </section>

<section className="home-section home-section-white" id="how-it-works">
          <div className="home-container home-problem-grid">
            <div className="home-problem-text">
      <h2 className="home-headline-lg fade-up stagger-1">
                Campus issues shouldn't disappear into paperwork.
              </h2>
              <p className="home-body-md home-muted fade-up stagger-2">
                Legacy systems rely on verbal complaints, disorganized registers,
                and slow escalation paths. The result? Frustrated students,
                overworked staff, and unmaintained facilities. UniFiX brings
                institutional accountability into the digital age.
              </p>
              <ul className="home-problem-list">
                {[
                  "No more lost complaints in physical ledgers",
                  "End manual tracking of maintenance staff",
                  "Stop unaddressed issues from escalating silently",
                ].map((item, i) => (
                  <li key={item} className={`fade-up stagger-${i + 3}`}>
                    <span
                      className="material-symbols-outlined home-icon-error"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      cancel
                    </span>
                    <span className="home-body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

<div className="home-problem-img">
              <div className="home-img-card fade-in stagger-2">
                <img
                  src="https://i.ibb.co/27phP7pg/vcet.webp"
                  alt="VCET Campus buildings"
                />
                <div className="home-img-overlay">
                  <p className="home-label-caps home-muted-light">
                    Institutional Scale
                  </p>
                  <p className="home-headline-md">
                    Managing thousands of square feet requires precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="home-section" id="features">
          <div className="home-container">
            <div className="home-section-header">
              <h2 className="home-headline-lg fade-up stagger-1">A Complete Ecosystem</h2>
              <p className="home-body-md home-muted fade-up stagger-2">
                Everything you need to maintain a pristine, functioning, and safe
                campus environment, housed in one intuitive platform.
              </p>
            </div>
         <div className="home-bento">
    <div
                className="home-bento-card home-bento-wide home-bento-row bento-clickable fade-up stagger-1"
                onClick={() => scrollTo("how-it-works")}
                onKeyDown={(e) => e.key === "Enter" && scrollTo("how-it-works")}
                tabIndex={0}
                role="button"
                aria-label="Learn about Instant Complaint Reporting"
              >
                <div className="home-bento-content">
                  <div className="home-bento-icon">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      build
                    </span>
                  </div>
                  <h3 className="home-headline-md">Instant Complaint Reporting</h3>
                  <p className="home-body-md home-muted">
                    Students and staff can snap a photo, tag a location, and
                    submit a maintenance request in under 30 seconds.
                  </p>
                </div>
                <div className="home-bento-img-wrap">
                  <img
                    src="https://i.ibb.co/p6zQ7h5h/Gemini-Generated-Image-4zjbex4zjbex4zjb.png"
                    alt="Computer repair technician working on campus maintenance"
                  />
                  <div className="home-bento-fade home-bento-fade-right" />
                </div>
              </div>

    <div
                className="home-bento-card home-bento-col bento-clickable fade-up stagger-2"
                onClick={() => scrollTo("get-started")}
                onKeyDown={(e) => e.key === "Enter" && scrollTo("get-started")}
                tabIndex={0}
                role="button"
                aria-label="Learn about Real-Time Tracking"
              >
                <div className="home-bento-img-top">
                  <img
                    src="https://i.ibb.co/wrcnjYjZ/Chat-GPT-Image-Aug-14-2026-11-32-42-PM.png"
                    alt="Real-time tracking dashboard"
                  />
                </div>
                <div className="home-bento-content">
                  <div className="home-chip">
                    <span className="material-symbols-outlined">
                      notifications_active
                    </span>
                    Live Updates
                  </div>
                  <h3 className="home-headline-md">Real-Time Tracking</h3>
                  <p className="home-body-md home-muted">
                    Push notifications keep reporters informed as their issue
                    moves from submitted to resolved.
                  </p>
                </div>
              </div>

         <div
                className="home-bento-card home-bento-col bento-clickable fade-up stagger-3"
                onClick={() => scrollTo("get-started")}
                onKeyDown={(e) => e.key === "Enter" && scrollTo("get-started")}
                tabIndex={0}
                role="button"
                aria-label="Learn about Smart Assignment"
              >
                <div className="home-bento-img-top">
                  <img
                    src="https://www.cellsmartpos.com/hubfs/Blog%20Featured%20Images/CellSmart%20POS%20Blog/where-to-get-a-computer-repair-technician-certification.webp"
                    alt="Maintenance staff fixing electrical panel"
                  />
                </div>
                <div className="home-bento-content">
                  <div className="home-chip">
                    <span className="material-symbols-outlined">person_add</span>
                    Staff Management
                  </div>
                  <h3 className="home-headline-md">Smart Assignment</h3>
                  <p className="home-body-md home-muted">
                    Admins can route tasks directly to specific departments or
                    staff members based on category.
                  </p>
                </div>
              </div>

           <div
                className="home-bento-card home-bento-wide home-bento-dark home-bento-row-reverse bento-clickable fade-up stagger-4"
                onClick={() => scrollTo("features")}
                onKeyDown={(e) => e.key === "Enter" && scrollTo("features")}
                tabIndex={0}
                role="button"
                aria-label="Learn about Digital Lost and Found"
              >
                <div className="home-bento-content">
                  <div className="home-bento-icon home-bento-icon-light">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      search
                    </span>
                  </div>
                  <h3 className="home-headline-md home-text-white">
                    Digital Lost &amp; Found
                  </h3>
                  <p className="home-body-md home-muted-white">
                    A centralized, secure digital ledger for reporting lost items
                    and claiming found belongings, reducing theft and confusion.
                  </p>
                </div>
                <div className="home-bento-img-wrap">
                  <img
                    src="https://i.ibb.co/LDkFg57j/Chat-GPT-Image-Aug-14-2026-11-41-31-PM.png"
                    alt="Lost and found digital ledger on campus"
                  />
                  <div className="home-bento-fade home-bento-fade-left" />
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="home-section home-section-white" id="get-started">
          <div className="home-container">
            <div className="home-section-header">
              <h2 className="home-headline-lg fade-up stagger-1">Guaranteed Resolution</h2>
              <p className="home-body-md home-muted fade-up stagger-2">
                Our automated escalation engine ensures no complaint is ignored.
                Accountability is built into the workflow.
              </p>
            </div>

    <div className="home-timeline">
              <div className="home-timeline-line" />

              {[
                {
                  icon: "edit_document",
                  label: "1. Submitted",
                  desc: "Student logs the issue with details and photos.",
                  error: false,
                },
                {
                  icon: "assignment_ind",
                  label: "2. Assigned",
                  desc: "Routed automatically to the relevant Staff.",
                  error: false,
                },
                {
                  icon: "hourglass_top",
                  label: "3. Monitored",
                  desc: "Time tracking begins. Staff update progress live.",
                  error: false,
                },
                {
                  icon: "warning",
                  label: "4. Escalated",
                  desc: "If unresolved in 2 hrs, Admin & Principal are notified.",
                  error: true,
                },
            ].map((step, i) => (
                <div key={step.label} className={`home-timeline-step fade-up stagger-${i + 1}`}>
                  <div
                    className={`home-timeline-icon ${
                      step.error
                        ? "home-timeline-icon-error"
                        : "home-timeline-icon-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <h4
                    className={`home-body-md home-fw-bold ${
                      step.error ? "home-icon-error" : ""
                    }`}
                  >
                    {step.label}
                  </h4>
                  <p className="home-body-sm home-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}