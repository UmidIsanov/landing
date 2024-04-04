import React, { useEffect } from "react";
import { useDropdownContext } from "../ui/Select/providers/DropdownContext";

interface UseClickOutsideListenerIProps {
  isOpen: boolean;
  handler: () => void;
  id: string;
}

const useClickOutsideListener = ({ id, isOpen, handler }: UseClickOutsideListenerIProps) => {
  const val = useDropdownContext();

  useEffect(() => {
    const listener = () => {
      val?.closeAllDropdowns();
    };

    if (typeof window !== undefined && id === val?.currDropdownId) {
      window.addEventListener("click", listener);
    }
    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener("click", listener);
      }
    };
  }, [isOpen, handler]);

  return null;
};

export default useClickOutsideListener;
