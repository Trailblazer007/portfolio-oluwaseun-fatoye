import Nav from "./_components/Nav";
import LeftCard from "./_components/LeftCard";
import RightCard from "./_components/RightCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <LeftCard />
          <RightCard />
        </div>
      </div>
    </div>
  );
}
