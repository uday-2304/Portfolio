"use client";

import { useState } from "react";
import { ProjectsStack } from "./ProjectsStack";
import { BuildTimeline } from "./BuildTimeline";

export function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("lexel");

  return (
    <div className="relative">
      {/* 1. Interactive Fanned Projects Stack with Hover Spread Animation */}
      <ProjectsStack
        selectedProjectId={selectedProjectId}
        onSelectProject={setSelectedProjectId}
      />

      {/* 2. Build Timeline Section with Impact Snapshot & Milestones */}
      <BuildTimeline
        activeProjectId={selectedProjectId}
        onSelectProject={setSelectedProjectId}
      />
    </div>
  );
}

export { ProjectsStack, BuildTimeline };
