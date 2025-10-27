import { ListTodo } from 'lucide-react';

interface WorkType {
  type: string;
  count: number;
}

interface WorkTypesProps {
  workTypes: WorkType[];
}

export function WorkTypes({ workTypes }: WorkTypesProps) {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-rose-900">
        <ListTodo className="text-rose-600" />
        Types of Work
      </h2>
      <div className="space-y-4">
        {workTypes.map((work, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors border border-rose-50">
            <span className="text-rose-900">{work.type}</span>
            <span className="font-semibold bg-rose-100 text-rose-600 px-3 py-1 rounded-full">
              {work.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}