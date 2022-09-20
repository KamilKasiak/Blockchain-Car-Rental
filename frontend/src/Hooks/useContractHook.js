import React, { useState } from "react";

export const useContractHook = () => {
  const [newContract, setContract] = useState(false);

  return { newContract, setContract };
};
