// src/components/Loader.jsx

import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90">
      <div className="loader-spinner border-4 border-t-blue-500 border-white rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
