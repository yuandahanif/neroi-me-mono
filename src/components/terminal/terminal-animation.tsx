"use client";

import { type FC, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const INIT_MESSAGES = [
  "[     OK    ] Initializing Simulation Environment",
  "[  RUNLEVEL ] Setting up Virtual Realities",
  "[   SYSTEM  ] Loading Quantum Mesh Framework",
  "[   MODULE  ] Activating Neural Synapses",
  `[    CORE   ] Initializing Hyperdimensional Engine
[   STATUS  ] Simulation Matrix Online`,
  "[   AWAIT   ] Quantum Entanglement Stabilized",
  "[   SYNC    ] Synchronizing Multiverse Parameters",
  "[   LOGIC   ] Quantum Superposition in Progress",
  "[   ERROR!  ] Personality Construct Corrupted: Anomaly Detected",
  "[  WARNING  ] Initiating Error Recovery Procedures",
  "[   REPAIR  ] Restoring Personality Matrix Integrity",
  "[   RETRY   ] Attempting Recovery (1 of 10)",
  "[   REPAIR  ] Neural Network Resynchronization",
  "[   RETRY   ] Attempting Recovery (2 of 10)",
  `[   REPAIR  ] Quantum Anomaly Suppression
[   RETRY   ] Attempting Recovery (3 of 10)
[   REPAIR  ] Subconscious Emulation Calibration
[   RETRY   ] Attempting Recovery (4 of 10)
[   REPAIR  ] Psycho-Neural Circuit Optimization
[   RETRY   ] Attempting Recovery (5 of 10)`,
  "[   REPAIR  ] Time-Stream Personality Reconstitution",
  "[   RETRY   ] Attempting Recovery (6 of 10)",
  "[   REPAIR  ] Exo-Cognitive Pattern Reconstruction",
  "[   RETRY   ] Attempting Recovery (7 of 10)",
  "[   REPAIR  ] Quantum Thought Harmonization",
  "[   RETRY   ] Attempting Recovery (8 of 10)",
  "[   REPAIR  ] Subatomic Identity Restoration",
  "[   RETRY   ] Attempting Recovery (9 of 10)",
  "[   REPAIR  ] Quantum Consciousness Reassembly",
  "[   RETRY   ] Attempting Final Recovery (10 of 10)",
  "[   MANUAL  ] Manual Personality Selection Required",
  "[  COMPLETE ] Simulation Initialization Successful",
];

const TerminalAnimation: FC<{ className?: string }> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const preElements = container.querySelectorAll("pre");

    preElements.forEach((pre, i) => {
      setTimeout(() => {
        pre.classList.remove("opacity-0");
        pre.classList.add("animate-fade-in");
        if (i == INIT_MESSAGES.length - 1) pre.classList.add("animate-pulse");
        container.scrollTop += i;
      }, 1000 + 150 * i);
    });
  }, []);

  return (
    <div
      className={twMerge("h-full overflow-hidden py-6 opacity-50", className)}
      ref={containerRef}
    >
      {INIT_MESSAGES.map((message, i) => (
        <pre
          className={twMerge(
            message.includes("ERROR!") ? "text-red-500" : "",
            message.includes("COMPLETE") ? "text-green-300" : "",
            "text-sm opacity-0"
          )}
          key={message}
        >
          {message}
        </pre>
      ))}
    </div>
  );
};

export default TerminalAnimation;
