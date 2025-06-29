import PyramidAnimation from "@/components/ui/ascii-pyramid";

const LabsPage = () => {
  return (
    <div className="relative w-full h-screen font-heming">
      <div className="absolute inset-0 flex justify-center items-center">
        <PyramidAnimation />
      </div>
      <h1 className="absolute bottom-10 w-full text-center font-light text-2xl">
        coming soon @ labs.now
      </h1>
    </div>
  );
};

export default LabsPage;
