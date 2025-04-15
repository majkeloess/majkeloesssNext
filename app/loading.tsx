export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-400 rounded-full animate-pulse mb-4" />
      <p className="text-xl text-white font-extralight">Loading...</p>
    </div>
  );
}
