import React, { useState, createContext } from "react";

export const ModalContext = createContext({
  setModal: () => {}
});

export default ({ children }) => {
  const [modal, setModal] = useState(null);

  return (
    <ModalContext.Provider
      value={{
        modal: modal,
        setModal: setModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
