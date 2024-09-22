"use client";

import { ArrowDownIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const ScrollToProject = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("flex justify-center")}>
      <Button
        variant="outline"
        size="icon"
        onClick={onClick}
        className={cn(isVisible ? "animate-bounce" : "")}
      >
        <ArrowDownIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ScrollToProject;
