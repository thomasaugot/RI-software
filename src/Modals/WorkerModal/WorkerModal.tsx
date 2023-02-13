import React from "react";
import InputField from "../../components/InputField/InputField";
import WorkerCard from "../../components/WorkerCard/WorkerCard";
import { close } from "../../assets/Icons";
import { motion } from "framer-motion";
import { workerModalProps } from "../../types/types";
import "./WorkerModal.scss";
import { useSearchWorker } from "../../customHooks/workerModalHook";

function WorkerModal({ setIsOpenModal }: workerModalProps) {
  const [search, setSearch] = React.useState("");
  const closeModal = () => setIsOpenModal(false);
  const workers = useSearchWorker(search);
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
        {workers?.result?.length ? (
          <div className="worker-modal-user-list">
            {workers?.result?.map(({ name, position, avatar_link }: { name: string, position: string, avatar_link: string }, i: number) => (
              <WorkerCard
                key={i}
                workerNames={name}
                workerPosition={position}
                workerAvatar={avatar_link}
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
