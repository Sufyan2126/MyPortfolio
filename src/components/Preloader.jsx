import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/preloader.css";

export default function Preloader() {
  const loaderRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount(count + 1), 18);
      return () => clearTimeout(timer);
    } else {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        pointerEvents: "none"
      });
    }
  }, [count]);

  return (
    <div ref={loaderRef} className="preloader">
      <div className="preloader-content">
        <h1 className="logo">SQCodes</h1>
        <p className="role">Frontend Developer · React</p>

        <div className="loader-bar">
          <div
            className="loader-fill"
            style={{ width: `${count}%` }}
          ></div>
        </div>

        <span className="percentage">{count}%</span>
      </div>
    </div>
  );
}
