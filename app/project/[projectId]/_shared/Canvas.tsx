import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Canvas() {
  return (
    <div
      className="w-full h-screen bg-gray-200/20"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
        limitToBounds={false}
        wheel={{ step: 0.8 }}
        doubleClick={{ disabled: false }}
      >
        <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
          <h2>Hello</h2>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default Canvas;
