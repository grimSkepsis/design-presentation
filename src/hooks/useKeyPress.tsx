import { useCallback, useEffect, useState } from "react";

//based on https://usehooks.com/useKeyPress/
export function useKeyPress(
  targetKeys: string[],
  callBack: (key: string) => void
) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState<boolean>(false);
  // If pressed key is our target key then set to true
  const downHandler = useCallback(
    function ({ key }: KeyboardEvent) {
      if (targetKeys.some((k) => k === key)) {
        if (!keyPressed) {
          callBack(key);
        }
        setKeyPressed(true);
      }
    },
    [setKeyPressed, targetKeys, callBack, keyPressed]
  );
  // If released key is our target key then set to false
  const upHandler = useCallback(
    function ({ key }: KeyboardEvent) {
      if (targetKeys.some((k) => k === key)) {
        setKeyPressed(false);
      }
    },
    [setKeyPressed, targetKeys]
  );
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
