const STEPS = [
  {
    num: 1,
    name: "Arrival & Check-in",
    desc: "Upon arrival, you'll check in at the registration desk. Please have your ID and insurance information ready.",
  },
  {
    num: 2,
    name: "Triage Assessment",
    desc: "A triage nurse will assess your symptoms to determine the severity of your condition.",
  },
  {
    num: 3,
    name: "Waiting Room",
    desc: "Patients are seen based on the severity of their condition, not on a first-come, first-served basis.",
  },
  {
    num: 4,
    name: "Treatment",
    desc: "You will be taken to a treatment room to be seen by a doctor or other medical professional.",
  },
] as const;

export function TriageSteps() {
  return (
    <section
      className="bg-[#181c27] border border-[#252a38] rounded-xl p-7 mt-4"
      aria-labelledby="triage-heading"
    >
      <h2
        id="triage-heading"
        className="text-base font-semibold text-white mb-5"
      >
        How Our Triage Process Works
      </h2>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((step) => (
          <li key={step.num} className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <span
                className="w-7 h-7 rounded-md bg-[#1d3a6e] text-[#3b82f6] font-bold text-sm flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                {step.num}
              </span>
              <span className="font-semibold text-sm text-white">
                {step.name}
              </span>
            </div>
            <p className="text-[#8b92a4] text-xs leading-relaxed">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
