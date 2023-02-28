import './FireWorker.scss'
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import { handleDelete } from '../../../queries/fireWorker';
import Modal from '../../../components/modal/Modal';
import { Props } from '../../../types/fireworkertypes';
import { buttonType } from '../../../types/types';


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


        <div>
            {
                setIsOpenModal && (
                    <Modal
                        setIsOpenModal={setIsOpenModal}
                        title="Permanently Delete this user?"
                        showClose={false}
                    >
                        <div className="buttons">
                            <SubmitButton type={buttonType.submit} text="Yes" onClick={handleDeleteClick} />
                            <SubmitButton type={buttonType.submit} text="No" onClick={() => {
                                setIsDeleted(true);
                                closeModal();
                            }} />
                        </div>


                    </Modal>
                )}

        </div>


    )
}

export default ConfirmFireWorker;

