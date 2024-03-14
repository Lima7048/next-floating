"use client";
import Image from "next/image";
import { useState } from "react";
import { useFloating, useHover, useInteractions } from "@floating-ui/react";
import { happygd } from "@/../public/happygd.jpeg";
import { tawog } from "@/../public/tawog.jpeg";
import { wow } from "@/../public/wow.jpeg";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()} className="m-3">
        <img className=" h-96 w-auto " src="wow.jpeg" />
      </div>
      {isOpen && (
        <div
          className="floating bg-yellow-100 text-justify text-3xl p-3 border rounded-lg "
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          HOORAY YOU HAVE SUCCESSFULLY USED USEHOVER!🎉
        </div>
      )}
    </>
  );
}
