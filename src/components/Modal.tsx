import { useState } from "react";

type ModalProps = {
  open: boolean;
};

const Modal: React.FC<ModalProps> = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
