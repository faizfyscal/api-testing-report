import Section from "../components/Section/Section";
import apiDashboardData from "../data/apiReports";

export default function ApiDashboard() {
  return (
    <div className="w-full">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">API Reports</h1>
          <p className="text-slate-500 mt-1">Functional test results and API boundary validations.</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        {apiDashboardData.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>
    </div>
  );
}
