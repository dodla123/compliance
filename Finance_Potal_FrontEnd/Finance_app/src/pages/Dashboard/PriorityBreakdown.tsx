import { PieChart } from 'lucide-react';

interface PriorityData {
  label: string;
  value: number;
  color: string;
}

interface PriorityBreakdownProps {
  priorityData: PriorityData[];
}

export function PriorityBreakdown({ priorityData }: PriorityBreakdownProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100 shadow-lg">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-emerald-900">
        <PieChart className="text-emerald-600" />
        Priority Breakdown
      </h2>
      <div className="space-y-4">
        {priorityData.map((priority, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-emerald-900">{priority.label}</span>
              <span className="text-sm font-medium text-emerald-900">{priority.value}%</span>
            </div>
            <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${priority.value}%`,
                  backgroundColor: priority.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}