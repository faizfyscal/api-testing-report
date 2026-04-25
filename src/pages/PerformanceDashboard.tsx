import Section from "../components/Section/Section";
import { performanceDashboardData } from "../data/performanceReports";

export default function PerformanceDashboard() {
  return (
    <div className="w-full">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Performance Reports</h1>
          <p className="text-slate-500 mt-1">JMeter test executions: Load, Stress, Spike, and Endurance.</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        {performanceDashboardData.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>
    </div>
  );
}
