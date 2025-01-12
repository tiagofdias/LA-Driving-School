export const Footer = () => {
  return (
    <div className="w-full bg-transparent text-background mt-auto py-8 lg:py-12">
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
            LA Driving School
          </h2>
          <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
            Easy to Learn.
          </p>
        </div>
        <div className="flex flex-col text-sm text-background/75 text-right">
          <p>4368 Toland Way</p>
          <p>Los Angeles</p>
          <p>CA 90041</p>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2025 LA Driving School. All rights reserved.</p>
      </div>
    </div>
  );
};




