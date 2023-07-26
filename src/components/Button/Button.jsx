import React from "react";

function Buttons({ name, style,border, size, icon}) {
  return (
    <button
      className={`px-2 d-flex align-items-center gap-1 border border-${style} rounded-${border} text-${style}`}
      style={{
        fontSize: `${size}px`,
      }}
    >
        {icon}
      {name}
    </button>
  );
}

export default Buttons;
