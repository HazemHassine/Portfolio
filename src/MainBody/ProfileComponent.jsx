import React from "react";

const PortfolioComponent = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-4 h-1/2 w-full p-4 lg:grid-cols-3 lg:grid-rows-6 sm:grid-cols-1 sm:grid-rows-none">
      {/* Grid Item 1 */}
      <div className="bg-green-500 col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 sm:col-span-1 sm:row-auto sm:mb-4 flex items-center justify-center text-white text-xl font-bold">
        1
      </div>

      {/* Grid Item 2 */}
      <div className="bg-green-500 row-span-3 col-start-3 lg:row-span-3 lg:col-start-3 sm:col-span-1 sm:row-auto sm:mb-4 flex items-center justify-center text-white text-xl font-bold">
        2
      </div>

      {/* Grid Item 3 */}
      <div className="bg-green-500 row-span-2 col-start-2 row-start-3 lg:row-span-2 lg:col-start-2 lg:row-start-3 sm:col-span-1 sm:row-auto sm:mb-4 flex items-center justify-center text-white text-xl font-bold">
        3
      </div>

      {/* Grid Item 4 */}
      <div className="bg-green-500 col-start-1 row-start-3 lg:col-start-1 lg:row-start-3 sm:col-span-1 sm:row-auto sm:mb-4 flex items-center justify-center text-white text-xl font-bold">
        4
      </div>

      {/* Grid Item 5 */}
      <div className="bg-green-500 row-span-3 row-start-4 lg:row-span-3 lg:row-start-4 sm:col-span-1 sm:row-auto sm:mb-4 flex items-center justify-center text-white text-xl font-bold">
        5
      </div>

      {/* Grid Item 6 */}
      <div className="bg-green-500 col-span-2 row-span-2 col-start-2 row-start-5 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-5 sm:col-span-1 sm:row-auto sm:mb-4 flex items-center justify-center text-white text-xl font-bold">
        6
      </div>

      {/* Grid Item 7 */}
      <div className="bg-green-500 col-start-3 row-start-4 lg:col-start-3 lg:row-start-4 sm:col-span-1 sm:row-auto sm:mb-4 flex items-center justify-center text-white text-xl font-bold">
        7
      </div>
    </div>
  );
};

export default PortfolioComponent;
