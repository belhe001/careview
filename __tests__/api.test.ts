import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/wait-times/route";

describe("GET /api/wait-times", () => {
  it("returns a 200 response", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
  });

  it("returns required fields in the response body", async () => {
    const response = await GET();
    const data = await response.json();

    expect(data).toHaveProperty("estimatedWaitMinutes");
    expect(data).toHaveProperty("patientsWaiting");
    expect(data).toHaveProperty("lastUpdated");
  });

  it("returns numeric wait time and patient count", async () => {
    const response = await GET();
    const data = await response.json();

    expect(typeof data.estimatedWaitMinutes).toBe("number");
    expect(typeof data.patientsWaiting).toBe("number");
  });

  it("returns a valid ISO date string for lastUpdated", async () => {
    const response = await GET();
    const data = await response.json();

    expect(new Date(data.lastUpdated).toISOString()).toBe(data.lastUpdated);
  });

});
