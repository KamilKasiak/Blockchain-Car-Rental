import React, { useState } from "react";

export const useRegisterededHook = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return { isRegistered, setIsRegistered };
};
