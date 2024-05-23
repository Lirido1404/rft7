"use client";
import React, { useEffect } from "react";

function HandleScroll({ queryMarqueHome }: any) {
  useEffect(() => {
    const handleScroll = () => {
        console.log("marquehomeestt", queryMarqueHome);
      if (
        queryMarqueHome === "Mercedes" ||
        queryMarqueHome === "Audi" ||
        queryMarqueHome === "BMW"
      ) {
        const marqueeElement = document.getElementById("marquee");
        if (marqueeElement) {
          marqueeElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleScroll(); // Call handleScroll on component mount

    // Cleanup function to remove the event listener
    return () => {
      // Cleanup code if needed
    };
  }, [queryMarqueHome]); // Add queryMarqueHome as a dependency

  return <></>;
}

export default HandleScroll;
