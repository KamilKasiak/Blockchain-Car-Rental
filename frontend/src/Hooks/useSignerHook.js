import React, { useState } from "react";

export const useSignerHook = () => {
  const [newSigner, setSigner] = useState("");

  return { newSigner, setSigner };
};
