
import { profile } from "../data/profileData.js";
import { useInView } from "../hooks/useInView.js";
import "./Contact.css";

function getWhatsAppNumber(phone) {
  const digits = String(phone ?? "").replace(/\D/g, "");

  if (digits.startsWith("00")) {
    return digits.slice(2);
  }

  // Convert a Pakistani local number to international format.
  if (digits.startsWith("0")) {
    return `92${digits.slice(1)}`;
  }

  // Already in international format.
  return digits;
}

const LINKS = [
  {
    key: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: "Send me an email",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    key: "phone",
    label: "Phone",
    value: profile.phone,
    href: `tel:${String(profile.phone ?? "").replace(/[^\d+]/g, "")}`,
    description: "Call me directly",
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: profile.social.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    href: profile.social.linkedin,
    description: "Connect professionally",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7M7 7v.01M11 17v-4.5a2 2 0 0 1 4 0V17M11 12.5V17" />
      </>
    ),
  },
  {
    key: "github",
    label: "GitHub",
    value: profile.social.github.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    href: profile.social.github,
    description: "Explore my code",
    icon: (
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5a3.5 3.5 0 0 0-1-2.5c.1-.5.5-2-.1-3 0 0-1.5 0-3 1.5-1.2-.4-2.9-.4-4 0-1.5-1.5-3-1.5-3-1.5-.6 1-.2 2.5-.1 3a3.5 3.5 0 0 0-1 2.5c0 3.5 2.5 4.3 4.5 4.5-.4.4-.5.9-.5 1.5V19" />
    ),
  },
];

export default function Contact() {
  const [ref, isVisible] = useInView();
  const whatsappNumber = getWhatsAppNumber(profile.phone);

  const whatsappMessage = encodeURIComponent(
    "Hi Inam! I visited your portfolio and would like to discuss a project."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <div className="contact-heading">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot" />
            LET'S CONNECT
          </span>

          <h2>
            Have a project in <span>mind?</span>
          </h2>

          <p className="contact-intro">
            Have an idea, a project, or an opportunity? I'd love to hear
            from you. Choose your preferred way to connect.
          </p>
        </div>

        <div className={`contact-panel ${isVisible ? "in-view" : ""}`}>
          <div className="contact-panel-top">
            <div>
              <span className="contact-panel-kicker">GET IN TOUCH</span>
              <h3>Let's start a conversation</h3>
              <p>Choose the contact method that works best for you.</p>
            </div>

            <div className="contact-decoration" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <path
                  d="M12 17h40v29H12zM12 18l20 16 20-16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m43 10 3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <div className="contact-grid">
            {LINKS.map((link, index) => (
              <a
                key={link.key}
                href={link.href}
                target={
                  link.key === "linkedin" || link.key === "github"
                    ? "_blank"
                    : undefined
                }
                rel={
                  link.key === "linkedin" || link.key === "github"
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`contact-card contact-card-${link.key}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                aria-label={`${link.label}: ${link.value}`}
              >
                <span className="contact-card-icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {link.icon}
                  </svg>
                </span>

                <span className="contact-card-label">{link.label}</span>

                <span className="contact-card-value">{link.value}</span>

                <span className="contact-card-description">
                  {link.description} <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>

          <div className="contact-bottom">
            <div className="contact-bottom-copy">
              <span className="contact-bottom-icon" aria-hidden="true">
                ↗
              </span>

              <div>
                <strong>Ready to discuss your project?</strong>
                <p>Click below to start a direct WhatsApp conversation.</p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta"
              aria-label="Let's work together — open WhatsApp"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.5 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.8a8.5 8.5 0 1 1 16.3-3.7Z" />
                <path d="M8.5 8.5c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.2-.7 1.6-.5.4-1.1.6-1.8.4-1.1-.3-2.4-.9-3.8-2.2-1.2-1.1-2-2.5-2.2-3.5-.2-.8.1-1.6.5-2.1Z" />
              </svg>

              Let's work together
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <p className="contact-footer-note">
          Built with passion. Open to meaningful connections and great ideas.
        </p>
      </div>
    </section>
  );
}
