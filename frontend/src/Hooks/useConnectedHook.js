import React, { useState } from "react";

export const useConnectedHook = () => {
  const [isConnected, setIsConnected] = useState(false);

  return { isConnected, setIsConnected };
};
