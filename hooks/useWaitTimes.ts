import { useQuery } from "@tanstack/react-query";
import type { WaitTimeData } from "@/app/api/wait-times/route";

export const WAIT_TIMES_QUERY_KEY = ["wait-times"] as const;

async function fetchWaitTimes(): Promise<WaitTimeData> {
  const res = await fetch("/api/wait-times");
  if (!res.ok) {
    throw new Error(`Failed to fetch wait times: ${res.statusText}`);
  }
  return res.json() as Promise<WaitTimeData>;
}

export function useWaitTimes() {
  return useQuery({
    queryKey: WAIT_TIMES_QUERY_KEY,
    queryFn: fetchWaitTimes,
    refetchInterval: 300_000, // auto-refresh every 5 minutes
    refetchIntervalInBackground: false,
  });
}
