import { useState, useContext, FC } from "react";
import "./HireWorker.scss";
import InputField from "../../components/InputField/InputField";
import CheckBox from "../../components/CheckBox/CheckBox";
import SubmitButton from "../../components/SubmitButton/SubmitButton";


import Modal from '../../components/modal/modal';
import { ModalsContext } from "../../context/modalsContext";

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
  }
];

const HireWorker: FC = () => {
  const { setHireWorkerModalIsOpen } = useContext(ModalsContext);

  const closeModal = () => setHireWorkerModalIsOpen(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckd = (id: number) => {
    if (isChecked && id) {
      return true;
    }
    return false;
  };

  return (
    <Modal
      closeModal={closeModal}
      additionalClass='hire-worker-modal-container'
    >
      <p className="hire-worker-title">Add new user</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="hire-worker-form"
        >
          <div className="hire-worker-content-container">
            <div className="hire-worker-content-input-container">
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
              <div className="hire-work-function-checkbox-container">
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
          </div>
          <div className="hire-worker-submit-container">
            <SubmitButton text="Add" />
          </div>
        </form>
    </Modal>
  );
}

export default HireWorker;
