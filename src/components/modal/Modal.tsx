import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { close } from "../../assets/Icons";
import { ModalProps } from "../../types/generalTypes";
import './modal.scss';



const Modal: FC<
  ModalProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ closeModal, closeButton=true, additionalClass='', children}) => {

  return (
    <div onClick={closeModal} className="dark-bg">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal-container ${additionalClass}`}
      >
        {closeButton && (
          <div className="modal-header">
              <span onClick={() => closeModal()} className="close-animate">{close}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
