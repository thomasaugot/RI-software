import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { close } from "../../assets/Icons";
import { ModalProps } from "../../types/modaltypes";
import "./Modal.scss";



const Modal: FC<
  ModalProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  ModalProps
> = ({ setIsOpenModal, children, title, showClose = true }) => {

  const closeModal = () => setIsOpenModal(false);


  return (
    <div onClick={closeModal} className="modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-container">
        <div className="modal-header">
          {showClose && (
            <span onClick={() => closeModal()} className="close-animate">{close}</span>
          )}
        </div>
        <p className='modal-title'>{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
