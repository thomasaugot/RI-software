import './FireWorker.scss'
import SubmitButton from '../../../components/general/submitButton/submitButton';
import { handleDelete } from '../../../queries/fireWorker';
import Modal from '../../../components/general/modal/modal';
import { Props } from '../../../types/hierarchy/fireworkertypes';
import { buttonType } from '../../../types/general/generalTypes';


function ConfirmFireWorker({ setIsOpenModal, id, isDeleted, setIsDeleted }: Props) {
    const closeModal = () => setIsOpenModal(false);


    const handleDeleteClick = async () => {
        const json = await handleDelete(id);
        if (json.status === 'success') {
            setIsDeleted(true);
            window.location.reload();
        } else {
            // setError(json.message);
        }
    }

    return (
        <Modal
            closeModal={closeModal}
            // title="Permanently Delete this user?"
            closeButton={false}
            open={false}
            additionalClass=''
        >
            <div className="buttons">
                <SubmitButton type={buttonType.submit} text="Yes" onClick={handleDeleteClick} />
                <SubmitButton type={buttonType.submit} text="No" onClick={() => {
                    setIsDeleted(true);
                    closeModal();
                }} />
            </div>

        </Modal>
    )
}

export default ConfirmFireWorker;

