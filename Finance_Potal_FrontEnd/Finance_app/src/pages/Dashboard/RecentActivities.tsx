import { Clock } from 'lucide-react';

interface Activity {
  title: string;
  time: string;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

export function RecentActivities({ activities }: RecentActivitiesProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-900">
        <Clock className="text-blue-600" />
        Recent Activities
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors border border-blue-50">
            <span className="text-blue-900">{activity.title}</span>
            <span className="text-sm text-blue-600">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}