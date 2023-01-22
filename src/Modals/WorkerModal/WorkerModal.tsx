import React from "react";
import InputField from '../../components/InputField/InputField'
import WorkerCard from "../../components/WorkerCard/WorkerCard";
import { close } from "../../assets/Icons";
import { motion } from 'framer-motion'
import { workerModalProps, workerResponse } from "../../types/types";
import "./WorkerModal.scss";
import { searkWorks } from "../../queries";

function WorkerModal({ setIsOpenModal }: workerModalProps) {
  const [search, setSearch] = React.useState("");
  const [workers, setWorkers] = React.useState<workerResponse>()
  console.log(search)
  const closeModal = () => setIsOpenModal(false)
  React.useEffect(()=>{
    const getWorks = async () =>{
      const data = await searkWorks(search.length === 0 ? "a": search)
      setWorkers(data)
    }
    getWorks()
  },[search])
  console.log(workers)
  return (
    <motion.div onClick={closeModal} initial={{opacity:0}} animate={{opacity:1}}  className="worker-modal">
      <motion.div onClick={(e)=> e.stopPropagation()} initial={{scale: 0}} animate={{scale:1}} className="worker-modal-container">
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
              onChange={(e)=> setSearch(e.target.value)!}
              isSearch={true}
            />
          </div>
        </div>
        <div className="worker-modal-user-list">
          {workers?.result?.map(({ name, position, avatar_link }, i) => (
            <WorkerCard
              key={i}
              workerNames={name}
              workerPosition={position}
              workerAvatar={avatar_link}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WorkerModal;
