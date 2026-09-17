import { useEffect, useState } from "react";

import "./rules.css";
import rulesImage from "../../assets/image-rules.svg";
import closeIcon from "../../assets/icon-close.svg";

function Rules() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section className="rules">
      <div className="rules-button">
        <button
          className="rules-title"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          RULES
        </button>
      </div>

      {isOpen && (
        <div className="rules-content-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="rules-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rules-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="rules-content-header">
              <h2 id="rules-title" className="rules-content-title">
                RULES
              </h2>
              <button
                className="rules-content-close"
                type="button"
                aria-label="Close rules"
                onClick={() => setIsOpen(false)}
              >
                <img src={closeIcon} alt="" />
              </button>
            </div>

            <div className="rules-content-image">
              <img src={rulesImage} alt="Rock, paper and scissors game rules" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Rules;
