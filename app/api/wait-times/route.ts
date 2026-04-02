import { NextResponse } from "next/server";

export interface WaitTimeData {
  estimatedWaitMinutes: number;
  patientsWaiting: number;
  lastUpdated: string;
}

// Mock data — replace with real DB/service calls
const mockData: WaitTimeData = {
  estimatedWaitMinutes: 52,
  patientsWaiting: 34,
  lastUpdated: new Date().toISOString(),
};

export async function GET() {
  // Simulate a slight network delay
  await new Promise((resolve) => setTimeout(resolve, 150));

  // Return fresh timestamp each call to simulate live data
  return NextResponse.json({
    ...mockData,
    lastUpdated: new Date().toISOString(),
    // Add small random variation to make auto-refresh feel alive
    patientsWaiting:
      mockData.patientsWaiting + Math.floor(Math.random() * 3 - 1),
    estimatedWaitMinutes:
      mockData.estimatedWaitMinutes + Math.floor(Math.random() * 5 - 2),
  } satisfies WaitTimeData);
}
