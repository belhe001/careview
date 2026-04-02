"use client";

import { Clock, Users, RefreshCw, AlertCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { TriageSteps } from "@/components/TriageSteps";
import { useWaitTimes } from "@/hooks/useWaitTimes";

function formatLastUpdated(isoString: string): string {
  const diff = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
  if (diff < 60) return "Just now";
  if (diff < 120) return "1 minute ago";
  return `${Math.floor(diff / 60)} minutes ago`;
}

export function ERDashboard() {
  const { data, isLoading, isError, dataUpdatedAt, refetch, isFetching } =
    useWaitTimes();

  const lastUpdatedLabel = data
    ? formatLastUpdated(data.lastUpdated)
    : dataUpdatedAt
    ? formatLastUpdated(new Date(dataUpdatedAt).toISOString())
    : null;

  return (
    <main className="max-w-5xl mx-auto px-8 py-10">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-white leading-tight">
            ER Wait Times
          </h1>
          <p className="text-[#8b92a4] text-[13px] mt-1.5" aria-live="polite">
            {isLoading
              ? "Loading..."
              : lastUpdatedLabel
              ? `Last updated: ${lastUpdatedLabel}`
              : ""}
          </p>
        </div>
      </div>

      {/* Error state */}
      {isError && (
        <div
          role="alert"
          className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-red-950/40 border border-red-900/50 text-red-400 text-sm"
        >
          <AlertCircle size={16} aria-hidden="true" />
          Unable to load wait time data. Please try refreshing.
        </div>
      )}

      {/* Stat cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7"
        aria-label="Wait time statistics" >
        <StatCard
          icon={
            <Clock size={18} color="#3b82f6" aria-hidden="true" />
          }
          label="Estimated Wait Time"
          value={
            isLoading
              ? "—"
              : data
              ? `${data.estimatedWaitMinutes} min`
              : "—"
          }
          description="This is the average time from arrival to being seen by a qualified medical professional."
          aria-label={`Estimated wait time: ${data?.estimatedWaitMinutes ?? "loading"} minutes`}
        />

        <StatCard
          icon={
            <Users size={18} color="#3b82f6" aria-hidden="true" />
          }
          label="Patients Currently Waiting"
          value={isLoading ? "—" : data?.patientsWaiting ?? "—"}
          description="This is the number of patients waiting to be seen and in treatment areas."
          aria-label={`Patients currently waiting: ${data?.patientsWaiting ?? "loading"}`}
        />
      </div>
      <TriageSteps />
    </main>
  );
}
