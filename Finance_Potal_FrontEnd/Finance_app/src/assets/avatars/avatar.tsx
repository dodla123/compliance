const Avatar = ({ initials }: { initials: string }) => {
    return (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-black font-semibold text-lg">
        {initials}
      </div>
    );
  };
  
  export default Avatar;
  