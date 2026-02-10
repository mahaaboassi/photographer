import React, { ReactNode } from "react";
type PopupProps = {
  children: ReactNode;
};

const Popup: React.FC<PopupProps> = ({ children }) => {
  return (
    <div className="fixed popup inset-0 flex justify-center items-center z-200">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Popup;
