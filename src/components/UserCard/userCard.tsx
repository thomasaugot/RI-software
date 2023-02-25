import { FC, useState } from "react";
import { moveWorker, options, profile, retry, userx } from "../../assets/Icons"
import ConfirmFireWorker from "../../Modals/WorkerModal/FireWorker/ConfirmFireWorker";
import FireWorker from "../../Modals/WorkerModal/FireWorker/FireWorker";
import WorkerModal from "../../Modals/WorkerModal/WorkerModal";
import "./userCard.scss";

interface UserCardProps {
    id: number
    email: string,
    position: string,
    url?: string
}
const UserCard: FC<UserCardProps> = ({ id, email, position, url }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
    const [teamleadactiveId, setTeamleadActiveId] = useState<any>(null);
    const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);

    const [isDeleted, setIsDeleted] = useState(false);
    return (
        <>
            <div className={`employee-detail ${id === teamleadactiveId ? 'active' : ''} ${isDeleted ? 'fire' : ''}`} onClick={() => { setTeamleadActiveId(id); }}>

                <div>
                    <div className="left">
                        <div>
                            <div className="profile-image">
                                {url ? <img src={url} alt="U." /> : <>{profile} </>}
                            </div>
                        </div>
                        <div className="name-role">
                            <p>{email}</p>
                            {isDeleted ? '' : <p>{position}</p>}

                        </div>
                    </div>

                    <div className="right">
                        <div>
                            {isDeleted ? <button
                                className="removed"
                                onClick={() => setIsConfirmDeleteModalOpen(true)}>
                                {userx}
                            </button> : <button
                                className="remove"
                                onClick={() => setIsDeleteModalOpen(true)}>
                                {userx}
                            </button>}
                            {isDeleteModalOpen && <FireWorker id={id} isDeleted={isDeleted} setIsDeleted={setIsDeleted} setIsOpenModal={setIsDeleteModalOpen} />}
                            {isConfirmDeleteModalOpen && <ConfirmFireWorker id={id} isDeleted={isDeleted} setIsDeleted={setIsDeleted} setIsOpenModal={setIsConfirmDeleteModalOpen} />}
                            {isDeleted ? <div>
                                <button className="retry">
                                    {retry}
                                </button>
                            </div> : <div>
                                <button 
                                className="expand"
                                onClick={() => setIsMoveModalOpen(!isMoveModalOpen)}
                                >
                                    {moveWorker}
                                </button>
                            </div>}
                            {isMoveModalOpen && <WorkerModal setIsOpenModal={setIsMoveModalOpen} leaderId={id}/>}
                        </div>
                        <div>
                            {!isDeleted && (<button className="options">
                                {options}
                            </button>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard;