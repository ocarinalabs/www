import CubeAnimation from "@/components/ui/ascii-cube";

const RobinPage = () => {
  return (
    <div className="relative w-full h-screen font-heming">
      <div className="absolute inset-0 flex justify-center items-center">
        <CubeAnimation />
      </div>
      <h1 className="absolute bottom-10 w-full text-center font-light text-2xl">
        coming soon @ robin.now
      </h1>
    </div>
  );
};

export default RobinPage;
