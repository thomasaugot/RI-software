import './FireWorker.scss'
import Modal from '../../../components/modal/modal';
import { Props } from '../../../types/fireworkertypes';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import { buttonType } from '../../../types/types';
import { handleDelete } from '../../../queries/fireWorker';

function FireWorker({ setIsOpenModal, id, isDeleted, setIsDeleted }: Props) {
    const closeModal = () => setIsOpenModal(false);

    const handleDeleteClick = async () => {
        const json = await handleDelete(id);
        if (json.status === 'success') {
            setIsDeleted(true);
            closeModal();
        } else {
            // setError(json.message);
        }
    }

    return (
        <Modal
            closeModal={closeModal}
            title="Remove this user?"
            closeButton={false}
        >


            <div className='buttons'>
                <SubmitButton type={buttonType.submit} text="Yes" onClick={handleDeleteClick} />
                <SubmitButton type={buttonType.submit} text="No" onClick={closeModal} />
            </div>
        </Modal>
    );
}

export default FireWorker;