"use client"

import AnimatedCursor from "react-animated-cursor"


export default function Cursor() {
  return (
    <div className="App">
      <AnimatedCursor 
        color='30, 145, 236'
        innerSize={15}
        outerAlpha={0.2}
      />
    </div>
  );
}