import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCard } from "@/components/StatCard";

describe("StatCard", () => {
  it("renders the label and value", () => {
    render(
      <StatCard
        icon={<span data-testid="icon">🕐</span>}
        label="Estimated Wait Time"
        value="52 min"
        description="Average time from arrival to being seen."
      />
    );

    expect(screen.getByText("Estimated Wait Time")).toBeInTheDocument();
    expect(screen.getByText("52 min")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(
      <StatCard
        icon={<span>icon</span>}
        label="Patients Waiting"
        value={34}
        description="Number of patients in queue."
      />
    );

    expect(screen.getByText("Number of patients in queue.")).toBeInTheDocument();
  });

  it("applies the aria-label when provided", () => {
    render(
      <StatCard
        icon={<span>icon</span>}
        label="Patients Waiting"
        value={34}
        description="Number of patients in queue."
        aria-label="Patients currently waiting: 34"
      />
    );

    expect(
      screen.getByRole("article", { name: "Patients currently waiting: 34" })
    ).toBeInTheDocument();
  });

  it("falls back to label as aria-label when none supplied", () => {
    render(
      <StatCard
        icon={<span>icon</span>}
        label="Patients Waiting"
        value={34}
        description="Number of patients in queue."
      />
    );

    expect(
      screen.getByRole("article", { name: "Patients Waiting" })
    ).toBeInTheDocument();
  });

  it("marks value container with aria-live polite for live updates", () => {
    render(
      <StatCard
        icon={<span>icon</span>}
        label="Wait Time"
        value="10 min"
        description="desc"
      />
    );

    const liveRegion = screen.getByText("10 min");
    expect(liveRegion).toHaveAttribute("aria-live", "polite");
    expect(liveRegion).toHaveAttribute("aria-atomic", "true");
  });
});
