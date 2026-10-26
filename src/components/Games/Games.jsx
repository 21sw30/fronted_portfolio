
import { useState } from "react";
import { profile } from "../../data/profileData.js";
import { getVisitorName } from "../../utils/visitor.js";
import { openGmailCompose } from "../../utils/email.js";
import { useInView } from "../../hooks/useInView.js";
import "./Games.css";

function ChessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M9 21h6M10 21v-3.5c0-.9-.3-1.4-1-2.1-1-1-1.3-1.9-.8-3.1.5-1.2 1.8-2 1.8-3.3 0-1-.6-1.7-1.4-2.2M14 21v-3.5c0-.9.3-1.4 1-2.1 1-1 1.3-1.9.8-3.1-.5-1.2-1.8-2-1.8-3.3 0-1 .6-1.7 1.4-2.2M12 3v3" />
    </svg>
  );
}

function PubgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  );
}

function LudoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="9" cy="9" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="15" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="15" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CardsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="3" y="6" width="12" height="15" rx="2"
        transform="rotate(-8 9 13.5)" />
      <rect x="8" y="4" width="12" height="15" rx="2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 11h18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const GAME_LIST = [
  {
    name: "Chess",
    blurb: "Think ahead. Make your move.",
    category: "STRATEGY",
    Icon: ChessIcon,
    number: "01",
  },
  {
    name: "PUBG",
    blurb: "Squad up and survive.",
    category: "BATTLE ROYALE",
    Icon: PubgIcon,
    number: "02",
  },
  {
    name: "Ludo",
    blurb: "A little luck, lots of fun.",
    category: "CLASSIC",
    Icon: LudoIcon,
    number: "03",
  },
  {
    name: "Cards",
    blurb: "Pick a deck and let's play.",
    category: "CARD GAMES",
    Icon: CardsIcon,
    number: "04",
  },
];

function getLocalDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function Games() {
  const [game, setGame] = useState(GAME_LIST[0].name);
  const [date, setDate] = useState("");
  const [ref, isVisible] = useInView();

  const today = getLocalDate();

  const sendInvite = () => {
    if (!date || date < today) return;

    const selectedDate = new Date(`${date}T12:00:00`);

    const dateLabel = selectedDate.toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const visitorName = getVisitorName().trim() || "A visitor";

    const subject = `${game} — Let's play on ${dateLabel}`;

    const body =
      `Hi ${profile.name},\n\n` +
      `I'd like to play a round of ${game} with you!\n\n` +
      `Proposed date: ${dateLabel}\n` +
      `From: ${visitorName}\n\n` +
      `Let me know if that works for you.\n\n` +
      `Looking forward to it!\n\n` +
      `— ${visitorName}`;

    openGmailCompose({
      to: profile.email,
      subject,
      body,
    });
  };

  return (
    <section
      id="games"
      className="section games-section"
      ref={ref}
    >
      <div className="container">
        <div className="section-head games-heading">
          <span className="games-eyebrow">
            <span className="games-eyebrow-dot" />
            BEYOND THE CODE
          </span>

          <h2>Play with Inam</h2>

          <p>
            Good games, friendly competition, and a little
            fun outside the world of software development.
          </p>
        </div>

        <div className="games-intro">
          <div className="games-intro-icon">
            <ChessIcon />
          </div>

          <div>
            <h3>Choose your game</h3>
            <p>Select a favorite and challenge me to a match.</p>
          </div>

          <span className="games-count">04 GAMES</span>
        </div>

        <div className={`game-list ${isVisible ? "in-view" : ""}`}>
          {GAME_LIST.map((g, i) => {
            const Icon = g.Icon;
            const isSelected = game === g.name;

            return (
              <button
                key={g.name}
                type="button"
                className={`game-chip ${
                  isSelected ? "is-selected" : ""
                }`}
                onClick={() => setGame(g.name)}
                aria-pressed={isSelected}
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                <span className="game-card-top">
                  <span className="game-chip-icon">
                    <Icon />
                  </span>

                  <span className="game-number">{g.number}</span>
                </span>

                <span className="game-category">
                  {g.category}
                </span>

                <span className="game-chip-name">{g.name}</span>

                <span className="game-chip-blurb">
                  {g.blurb}
                </span>

                <span className="game-card-footer">
                  <span>
                    {isSelected ? "Selected" : "Choose game"}
                  </span>

                  <span className="game-card-arrow">
                    <ArrowIcon />
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="play-invite">
          <div className="play-invite-decoration" aria-hidden="true">
            <CalendarIcon />
          </div>

          <div className="play-invite-content">
            <span className="play-invite-eyebrow">
              YOUR NEXT MOVE
            </span>

            <h3>
              Up for a game of{" "}
              <span className="play-invite-game">{game}</span>?
            </h3>

            <p>
              Pick a date and send me an invitation.
              Your email will be prepared automatically.
            </p>

            <div className="play-invite-selected">
              <span className="selected-game-indicator" />
              Selected game: <strong>{game}</strong>
            </div>
          </div>

          <div className="play-invite-actions">
            <label htmlFor="game-date">
              WHEN SHALL WE PLAY?
            </label>

            <input
              id="game-date"
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button
              type="button"
              className="btn btn-primary play-invite-button"
              onClick={sendInvite}
              disabled={!date || date < today}
            >
              <span>Challenge Inam</span>
              <ArrowIcon />
            </button>

            <span className="play-invite-footnote">
              Opens Gmail with your invitation ready to send.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
