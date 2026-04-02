import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TriageSteps } from "@/components/TriageSteps";

describe("TriageSteps", () => {
  it("renders all 4 triage steps", () => {
    render(<TriageSteps />);

    expect(screen.getByText("Arrival & Check-in")).toBeInTheDocument();
    expect(screen.getByText("Triage Assessment")).toBeInTheDocument();
    expect(screen.getByText("Waiting Room")).toBeInTheDocument();
    expect(screen.getByText("Treatment")).toBeInTheDocument();
  });

  it("renders as an ordered list for semantic correctness", () => {
    render(<TriageSteps />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("has a section heading", () => {
    render(<TriageSteps />);
    expect(
      screen.getByRole("heading", { name: /how our triage process works/i })
    ).toBeInTheDocument();
  });

  it("renders step numbers 1 through 4", () => {
    render(<TriageSteps />);
    // Step numbers are aria-hidden decorations but still visible in DOM
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
