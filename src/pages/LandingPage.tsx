import { Link } from "react-router-dom";
import { Server, Activity, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 tracking-tight mb-4">
          Test Reports Directory
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          Access automated test results for all engineering services. Choose a report category to get started. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
        <Link 
          to="/api-dashboard"
          className="group flex flex-col bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-blue-200 transition-all duration-300"
        >
          <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Server size={32} />
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">API Reports</h2>
          <p className="text-slate-500 mb-8 flex-grow">
            View detailed test results for service boundaries, authentication, endpoints mapping, and functional test coverage.
          </p>
          <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300 w-fit">
            View Dashboard <ArrowRight size={18} className="ml-2" />
          </div>
        </Link>
        
        <Link 
          to="/performance-dashboard"
          className="group flex flex-col bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-indigo-200 transition-all duration-300"
        >
          <div className="h-14 w-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Activity size={32} />
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">Performance Reports</h2>
          <p className="text-slate-500 mb-8 flex-grow">
            Analytics and test runs for JMeter test cycles including Load, Stress, Spike, and Endurance testing benchmarks.
          </p>
          <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300 w-fit">
            View Dashboard <ArrowRight size={18} className="ml-2" />
          </div>
        </Link>
      </div>
    </div>
  );
}
