import React, { useState, useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll("a, button, input[type='submit'], input[type='button'], .cursor-pointer");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => setIsLinkHovered(true));
        link.addEventListener("mouseleave", () => setIsLinkHovered(false));
      });
    };

    handleLinkHoverEvents();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isClicked ? "clicked" : ""} ${isLinkHovered ? "link-hovered" : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  );
}

export default Cursor;

