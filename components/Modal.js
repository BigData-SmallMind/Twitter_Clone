import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const Modal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <div>
      {/* <div>Modal</div> */}
      {isOpen && <p>Modal is open</p>}
    </div>
  );
};

export default Modal;
