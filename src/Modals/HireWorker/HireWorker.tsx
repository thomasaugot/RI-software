import React, { useState } from "react";
import "./HireWorker.scss";
import { motion } from "framer-motion";
import { workerModalProps } from "../../types/types";
import { close } from "../../assets/Icons";
import InputField from "../../components/InputField/InputField";
import CheckBox from "../../components/CheckBox/CheckBox";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const checkBoxData = [
  {
    id: 1,
    label: "Data Analyst",
    isChecked: false,
  },
  {
    id: 2,
    label: "Project",
    isChecked: false,
  },
  {
    id: 3,
    label: "Project",
    isChecked: false,
  },
  {
    id: 4,
    label: "Inventory",
    isChecked: false,
  },
  {
    id: 5,
    label: "Employees",
    isChecked: false,
  },
  {
    id: 6,
    label: "Procurement",
    isChecked: false,
  },
  {
    id: 7,
    label: "Procurement",
    isChecked: false,
  },
  {
    id: 8,
    label: "Competitor Analyst",
    isChecked: false,
  },
];

function HireWorker({ setIsOpenModal }: workerModalProps) {
  const closeModal = () => setIsOpenModal(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckd = (id: number) => {
    if (isChecked && id) {
      return true;
    }
    return false;
  };
  return (
    <motion.div
      onClick={closeModal}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          delay: 0.3,
        },
      }}
      className="hire-worker"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="hire-worker-container"
        initial={{
          y: 0,
        }}
        animate={{
          y: 80,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        }}
      >
        <div className="hire-worker-header">
          <span onClick={closeModal}>{close}</span>
        </div>
        <p className="hire-worker-title">Add new user</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="hire-worker-form"
        >
          <div className="form-inputs-wrapper">
            <div className="form-worker-control">
              <label htmlFor="position">Position</label>
              <InputField type="text" name="position" />
            </div>
            <div className="form-worker-control">
              <label htmlFor="position">Email</label>
              <InputField type="email" name="email" />
            </div>
            <div className="form-worker-control">
              <label htmlFor="position">Wage</label>
              <InputField type="text" name="wage" />
            </div>
            <div className="form-worker-control">
              <label htmlFor="position">Work Hour</label>
              <InputField type="text" name="work-hour" />
            </div>
          </div>
          <div className="hire-worker-functions">
            <p className="user-function">User Function</p>
            <div className="hire-work-function-checkboxs">
              {checkBoxData.map((data, i) => (
                <CheckBox
                  setIsChecked={setIsChecked}
                  label={data.label}
                  isChecked={handleCheckd(data.id)}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="hire-worker-submit-container">
            <SubmitButton text="Add" />
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default HireWorker;
