import React, { useState } from "react";

export const useSignerHook = () => {
  const [signer, setSigner] = useState("");

  return { signer, setSigner };
};
