import React, { useState, useEffect } from "react";

import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { FaMedal } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import TechModal from "./TechModal";

function Project({
  description,
  index,
  name,
  url,
  images,
  github,
  github2,
  stack,
  technical,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hideInfo, setHideInfo] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!images || images.length === 0 || hideInfo) return;

    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Fade in the new image
      }, 300); // Ensure a smooth transition
    }, 6000);

    return () => clearInterval(interval);
  }, [images, hideInfo]);

  return (
    <div className="project">
      {images.length !== 0 && (
        <img
          key={currentIndex}
          src={images[currentIndex]}
          className={`project-img ${fade ? "visible" : "invisible"} ${
            hideInfo ? "project-img-expanded" : ""
          }`}
          alt={`Slide ${currentIndex}`}
          onMouseEnter={() => setHideInfo(true)}
          onMouseLeave={() => setHideInfo(false)}
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        />
      )}

      <div className={`project-info ${hideInfo ? "hide-info" : "show-info"}`}>
        <h3>{name || "default title"}</h3>
        <p className="project-desc">{description || "description"}</p>
        <div className="project-stack">
          {stack.map((item) => (
            <span className="stack-item" key={item.id}>
              {item.title || " "}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a onClick={() => setIsOpen(true)}>
            <FaMedal className="project-icon" data-tip="Read achievements" />
          </a>
        </div>
      </div>
      <ReactTooltip
        backgroundColor="#2CBA78"
        effect="solid"
        textColor="black"
        data-delay-hide={1000}
      />

      <TechModal
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
        technical={technical}
        name={name}
      />
    </div>
  );
}

export default Project;
