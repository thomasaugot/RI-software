import { useEffect, useState } from "react";
import InputField from "../../components/general/inputField/inputField";
import WorkerCard from "../../components/searchWorker/workerCard/workerCard";
import { close } from "../../assets/Icons";
import { motion } from "framer-motion";
import { moveWorkerType } from "../../types/types";
import "./workerModal.scss";
import { workersForMoveFetch, filterWorkersForMove } from "../../queries/moveWorker";
import { workersTypes } from "../../types/types";

function WorkerModal({ setIsOpenModal, leaderId }: moveWorkerType) {
  const [search, setSearch] = useState("");
  const [workersForMove, setWorkerForMove] = useState<workersTypes[] | undefined>();
  const closeModal = () => setIsOpenModal(false);

  const employeeId = parseInt(localStorage.getItem('employee_id') || '-1');

  const getworkerForMove = async () => {
    const workersForMoveFetchData = await workersForMoveFetch(employeeId)
    setWorkerForMove(workersForMoveFetchData)
  }

  useEffect(() => {
    getworkerForMove();
  }, [])

  useEffect(() => {
    filterWorkersForMove(workersForMove as workersTypes[], search)
  }, [search])

  console.log(workersForMove);
  return (
    <motion.div
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.2,
        },
      }}
      className="worker-modal"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{
          scale: 0,
          transition: {
            delay: 0.2,
          },
        }}
        className="worker-modal-container"
      >
        <div className="worker-modal-head">
          <div className="workder-modal-close">
            <span onClick={closeModal}>{close}</span>
          </div>
          <div className="worker-modal-head-input">
            <InputField
              placeholder="Search"
              name="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)!}
              isSearch={true}
            />
          </div>
        </div>
        {workersForMove?.length ? (
          <div className="worker-modal-user-list">
            {workersForMove?.map(({ name, position, avatar_link, id }, i) => (
              <WorkerCard
                key={i}
                workerNames={name}
                workerPosition={position}
                workerAvatar={avatar_link}
                id={id}
                leaderId={leaderId}
              />
            ))}
          </div>
        ) : (
          <div className="worker-search-result">
            <h3>No Search Result Not Found!</h3>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default WorkerModal;
