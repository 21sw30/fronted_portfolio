
import { useInView } from "../hooks/useInView.js";

function BriefcaseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 11h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function Availability() {
  const [ref, isVisible] = useInView();

  const options = [
    {
      label: "Full-Time Office Role",
      description: "Currently employed full-time",
      Icon: BriefcaseIcon,
    },
    {
      label: "Part-Time Commitments",
      description: "Busy with ongoing client projects",
      Icon: ClockIcon,
    },
    {
      label: "New Project Availability",
      description: "Starting February 2027",
      Icon: CalendarIcon,
    },
  ];

  return (
    <section
      id="availability"
      className="section"
      ref={ref}
    >
      <div className="container">
        <div className="section-head">
          <h2>Work Availability</h2>
        </div>

        <div
          className={`availability-card ${
            isVisible ? "in-view" : ""
          }`}
        >
          <div className="availability-main">
            <div className="availability-status">
              <span
                className="availability-dot"
                aria-hidden="true"
              />

              <span className="availability-status-label">
                CURRENTLY ENGAGED
              </span>
            </div>

            <div className="availability-status-content">
              <h3>
                Committed to Full-Time & Part-Time Work
              </h3>

              <p>
                I am currently working full-time in my office
                while also managing ongoing part-time client
                projects. I am committed to my current
                responsibilities and will be available for
                new part-time projects starting February 2027.
              </p>
            </div>

            <div className="availability-next">
              <span className="availability-next-icon">
                <CalendarIcon />
              </span>

              <div>
                <span className="availability-next-label">
                  NEXT PART-TIME AVAILABILITY
                </span>

                <strong>February 2027</strong>
              </div>
            </div>
          </div>

          <div
            className="availability-options"
            aria-label="Work commitments and availability"
          >
            {options.map(({ label, description, Icon }, index) => (
              <div
                key={label}
                className="availability-pill"
                style={{
                  transitionDelay: isVisible
                    ? `${index * 90}ms`
                    : "0ms",
                }}
              >
                <span className="availability-pill-icon">
                  <Icon />
                </span>

                <span className="availability-pill-content">
                  <strong>{label}</strong>
                  <span>{description}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
