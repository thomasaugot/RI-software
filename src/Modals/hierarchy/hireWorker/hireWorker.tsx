import { useState, useContext, FC } from "react";
import "./hireWorker.scss";
import InputField from "../../../components/general/inputField/inputField";
import CheckBox from "../../../components/general/checkBox/checkBox";
import SubmitButton from "../../../components/general/submitButton/submitButton";
import { hireUrl } from '../../../utils/network';
import { authorizedRequest } from '../../../utils/queries';

import { HireWorkerProps } from '../../../types/hierarchy/hireWorkerTypes'

import Modal from '../../../components/general/modal/modal';
import { ModalsContext } from "../../../context/modalsContext";

const HireWorker: FC<HireWorkerProps> = ({ hireWorkerLeader }) => {
  const { hireWorkerModalIsOpen, setHireWorkerModalIsOpen } = useContext(ModalsContext);

  const closeModal = () => setHireWorkerModalIsOpen(false);

  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [wage, setWage] = useState<number | string>('');
  const [workingHours, setWorkingHours] = useState<number | string>('');

  const [employeeCheckbox, setEmployeeCheckbox] = useState(false);
  const [projectsCheckbox, setProjectsCheckbox] = useState(false);
  const [purchaseCheckbox, setPurchaseCheckbox] = useState(false);
  const [salesCheckbox, setSalesCheckbox] = useState(false);
  const [stocksCheckbox, setStocksCheckbox] = useState(false);
  const [financeCheckbox, setFinanceCheckbox] = useState(false);

  return (
    <Modal
      closeModal={closeModal}
      open={hireWorkerModalIsOpen}
    >
      <p className="hire-worker-title">Add new user</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const companyId = parseInt(localStorage.getItem('company_id') || '-1');
          console.log(hireWorkerLeader)

          const sign = require('jwt-encode');
          const secret = 'secret-data-adding-employee';
          const data = {
            user: {
              email
            },
            employee: {
              work_hour: workingHours,
              wage,
              position,
              leader_id: hireWorkerLeader,
              company_id: companyId
            },
            functions: {
              employee: employeeCheckbox,
              projects: projectsCheckbox,
              sales: salesCheckbox,
              purchase: purchaseCheckbox,
              finance: financeCheckbox
            }
          };
          const jwt = sign(data, secret, { "alg": "HS256" });
          console.log(jwt);

          authorizedRequest(hireUrl, 'PUT', 'accessToken', { email, link: `http://127.0.0.1:3000/accept-invitation/register/${jwt}` });

        }}
        className="hire-worker-form"
      >
        <div className="hire-worker-content-container">
          <div className="hire-worker-content-input-container">
            <div className="hire-worker-content-input">
              <label htmlFor="position">Position</label>
              <InputField type="text" name="position" value={position} onChange={(e) => {
                setPosition(e.target.value);
              }} />
            </div>
            <div className="hire-worker-content-input">
              <label htmlFor="position">Email</label>
              <InputField type="email" name="email" value={email} onChange={(e) => {
                setEmail(e.target.value);
              }} />
            </div>
            <div className="hire-worker-content-input">
              <label htmlFor="position">Wage</label>
              <InputField type="text" name="wage" value={wage} onChange={(e) => {
                setWage(e.target.value.replace(/\D/g, '').length > 0 ? parseInt(e.target.value.replace(/\D/g, '')) : '')
              }} />
            </div>
            <div className="hire-worker-content-input">
              <label htmlFor="position">Work Hour</label>
              <InputField type="text" name="work-hour" value={workingHours} onChange={(e) => {
                setWorkingHours(e.target.value.replace(/\D/g, '').length > 0 ? parseInt(e.target.value.replace(/\D/g, '')) : '');
              }} />
            </div>
          </div>
          <div className="hire-worker-functions">
            <p className="hire-worker-functions-title">User Function</p>
            <div className="hire-work-functions-checkbox-container">
              <CheckBox
                setIsChecked={setEmployeeCheckbox}
                label='Employee'
                isChecked={employeeCheckbox}
              />
              <CheckBox
                setIsChecked={setProjectsCheckbox}
                label='Projects'
                isChecked={projectsCheckbox}
              />
              <CheckBox
                setIsChecked={setPurchaseCheckbox}
                label='Purchases'
                isChecked={purchaseCheckbox}
              />
              <CheckBox
                setIsChecked={setSalesCheckbox}
                label='Sales'
                isChecked={salesCheckbox}
              />
              <CheckBox
                setIsChecked={setStocksCheckbox}
                label='Stocks'
                isChecked={stocksCheckbox}
              />
              <CheckBox
                setIsChecked={setFinanceCheckbox}
                label='Finance'
                isChecked={financeCheckbox}
              />
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
