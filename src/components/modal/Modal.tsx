import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import ReactModal from "react-modal";

import "./Modal.scss";

interface ModalProps {
  open: boolean;
  requestClose: () => void;
}

const Modal: FC<
  ModalProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    ModalProps
> = ({ children, open, requestClose }) => {
  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={() => {
        requestClose();
      }}
      className="react-modal"
      closeTimeoutMS={600}
    >
      <div className="modal">{children}</div>
    </ReactModal>
  );
};

export default Modal;
