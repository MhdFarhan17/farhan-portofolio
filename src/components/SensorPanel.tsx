import { useEffect, useState } from "react";

/** Simulated SmartKOI reading. Values drift slightly to show the live-dashboard idea. */
const START = { temp: 27.4, ph: 7.2, tds: 310, turb: 4.1 };
const drift = (v: number, step: number) => v + (Math.random() - 0.5) * step;

export default function SensorPanel() {
  const [r, setR] = useState(START);

  useEffect(() => {
    const id = setInterval(
      () =>
        setR((p) => ({
          temp: Math.min(30, Math.max(25, drift(p.temp, 0.3))),
          ph: Math.min(8.9, Math.max(6.2, drift(p.ph, 0.25))),
          tds: Math.round(Math.min(380, Math.max(260, drift(p.tds, 14)))),
          turb: Math.min(8, Math.max(2, drift(p.turb, 0.4))),
        })),
      2000
    );
    return () => clearInterval(id);
  }, []);

  const phOk = r.ph >= 6.5 && r.ph <= 8.5;
  const rows = [
    { label: "Temperature", value: r.temp.toFixed(1), unit: "°C" },
    { label: "pH", value: r.ph.toFixed(2), unit: "" },
    { label: "TDS", value: String(r.tds), unit: "ppm" },
    { label: "Turbidity", value: r.turb.toFixed(1), unit: "NTU" },
  ];

  return (
    <aside className="rounded-2xl border border-line bg-surface p-5 md:p-6" aria-label="Simulated pond sensor readings">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Koi pond 01</h3>
        <span className={`flex items-center gap-2 text-xs ${phOk ? "text-accent" : "text-sun"}`}>
          <span className={`h-2 w-2 rounded-full ${phOk ? "bg-accent" : "bg-sun"}`} />
          {phOk ? "All readings safe" : "pH outside safe range"}
        </span>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
        {rows.map((x) => (
          <div key={x.label}>
            <dt className="text-xs text-muted">{x.label}</dt>
            <dd className="font-display text-3xl font-semibold tabular-nums">
              {x.value}
              <span className="ml-1 text-sm font-normal text-muted">{x.unit}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 border-t border-line pt-3 text-xs text-muted">
        Simulated data. This is the kind of reading my SmartKOI app receives from its ESP32 sensors.
      </p>
    </aside>
  );
}
