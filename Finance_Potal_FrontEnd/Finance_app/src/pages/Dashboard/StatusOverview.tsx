import { Activity } from 'lucide-react';

interface StatusData {
  completed: { value: number; color: string; percentage: string };
  inProgress: { value: number; color: string; percentage: string };
  pending: { value: number; color: string; percentage: string };
}

interface StatusOverviewProps {
  statusData: StatusData;
}

export function StatusOverview({ statusData }: StatusOverviewProps) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 shadow-lg">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-purple-900">
        <Activity className="text-purple-600" />
        Status Overview
      </h2>
      <div className="flex items-center justify-between">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle
              cx="18" cy="18" r="16"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="3.6"
            />
            <circle
              cx="18" cy="18" r="16"
              fill="none"
              stroke={statusData.completed.color}
              strokeWidth="3.6"
              strokeDasharray={`${55 * 1.01} 100`}
              className="transform origin-center"
            />
            <circle
              cx="18" cy="18" r="16"
              fill="none"
              stroke={statusData.inProgress.color}
              strokeWidth="3.6"
              strokeDasharray={`${27 * 1.01} 100`}
              strokeDashoffset="-55"
              className="transform origin-center"
            />
            <circle
              cx="18" cy="18" r="16"
              fill="none"
              stroke={statusData.pending.color}
              strokeWidth="3.6"
              strokeDasharray={`${18 * 1.01} 100`}
              strokeDashoffset="-82"
              className="transform origin-center"
            />
          </svg>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Completed ({statusData.completed.percentage})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm">In Progress ({statusData.inProgress.percentage})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm">Pending ({statusData.pending.percentage})</span>
          </div>
        </div>
      </div>
    </div>
  );
}