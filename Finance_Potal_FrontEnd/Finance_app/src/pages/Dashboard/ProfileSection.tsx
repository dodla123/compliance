import { ChevronRight } from 'lucide-react';
import avatar from "../../assets/avatars/avatar-1.webp";

interface ProfileSectionProps {
  greeting: string;
  currentDateTime: string;
}

export function ProfileSection({ greeting, currentDateTime }: ProfileSectionProps) {
  return (
    <div className="border-indigo-100 mb-6 p-1">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {greeting}, Manasa
            </h1>
            <p className="text-gray-600">{currentDateTime}</p>
          </div>
        </div>
        <button className="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-md">
          View Profile
        </button>
      </div>
    </div>
  );
}