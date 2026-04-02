import dashboardData from "../../data/data";
import Section from "../Section/Section";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-center text-2xl font-medium text-gray-800 mb-4">
        API Automation Dashboard
      </h1>

      {dashboardData.map((section, i) => (
        <Section key={i} section={section} />
      ))}
    </div>
  );
}