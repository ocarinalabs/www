import { KnotAnimation } from "@/components/ui/ascii-knot";

const CommunityPage = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex justify-center items-center">
        <KnotAnimation />
      </div>
      <h1 className="absolute bottom-10 w-full text-center font-heming font-light text-2xl">
        coming soon @ founders.now
      </h1>
    </div>
  );
};

export default CommunityPage; 