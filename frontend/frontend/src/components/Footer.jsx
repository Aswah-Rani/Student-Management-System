export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold text-blue-400">
            Student Registration
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Manage student records quickly and efficiently.
          </p>
        </div>

        {/* Right */}
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          © {new Date().getFullYear()} Student Registration System. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}