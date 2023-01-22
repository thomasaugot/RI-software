import React from "react";
import InputField from '../../components/InputField/InputField'
import WorkerCard from "../../components/WorkerCard/WorkerCard";
import { close } from "../../assets/Icons";
import { motion } from 'framer-motion'
import { workerCardProps, workerModalProps } from "../../types/types";
import "./WorkerModal.scss";

const workerData: Array<workerCardProps> = [
  {
    workerNames: "Emery Vetrovs",
    workerPosition: "CTO",
  },
  {
    workerNames: "Ahmad Vetrovs",
    workerPosition: "Lead Team A",
  },
  {
    workerNames: "Jaxson Franci",
    workerPosition: "CTO",
  },
  {
    workerNames: "Alfredo Stanton",
    workerPosition: "CTO",
  },
  {
    workerNames: "Phillip Curtis",
    workerPosition: "CTO",
  },
  {
    workerNames: "Ahmad Vetrovs",
    workerPosition: "CTO",
  },
  {
    workerNames: "Jaxson Franci",
    workerPosition: "CTO",
  },
  {
    workerNames: "Alfredo Stanton",
    workerPosition: "CTO",
  },
  {
    workerNames: "Phillip Curtis",
    workerPosition: "CTO",
  },
  {
    workerNames: "Ahmad Vetrovs",
    workerPosition: "CTO",
  },
  {
    workerNames: "Jaxson Franci",
    workerPosition: "CTO",
  },
  {
    workerNames: "Alfredo Stanton",
    workerPosition: "CTO",
  },
];

// initial={{opacity:0}} animate={{opacity:1}}

function WorkerModal({ setIsOpenModal }: workerModalProps) {
  const [search, setSearch] = React.useState("");
  console.log(search)
  const closeModal = () => setIsOpenModal(false)
  React.useEffect(()=>{
    console.log("re-render")
  },[search])
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
          {workerData.map(({ workerNames, workerPosition }, i) => (
            <WorkerCard
              workerNames={workerNames}
              workerPosition={workerPosition}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WorkerModal;
