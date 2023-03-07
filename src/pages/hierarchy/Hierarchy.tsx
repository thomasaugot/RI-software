import { FC, useState, useEffect, useContext } from "react";
import "./Hierarchy.scss";
import HierarchyUserCard from "../../components/hierarchyUserCard/hierarchyUserCard";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import { hierarchyItem } from '../../types/hierarchyTypes';
import { hireEmployeeButton } from '../../assets/hierarchyIcons';
import { authorizedRequest } from '../../utils/queries'
import { fetchOwnersUrl, fetchEmployeesUrl, fetchLeadersUrl } from "../../utils/network";
import { workersForMoveFetch } from '../../queries/moveWorker';
import { ModalsContext } from "../../context/modalsContext";

import HireWorker from '../../Modals/HireWorker/HireWorker';
const Hierachy: FC = () => {

  const companyId = parseInt(localStorage.getItem('company_id') || '-1');
  const employeeId = parseInt(localStorage.getItem('employee_id') || '-1');
  const { hireWorkerModalIsOpen, setHireWorkerModalIsOpen } = useContext(ModalsContext);


  const [hierarchy, setHierarchy] = useState<hierarchyItem[][]>([]);
  const [hierarchyLevel, setHierarchyLevel] = useState<number>(-1);
  const [isActive, setIsActive] = useState<boolean>(false);

  console.log(hierarchy)


  useEffect(() => {
    authorizedRequest(fetchOwnersUrl(companyId), 'GET').then((data) => {
      setHierarchy([[...data.result]]);
    })

    authorizedRequest(fetchLeadersUrl(companyId, 10), 'GET').then((data) => {
      // setHierarchy([[...data.result]]);
      console.log(data)
    })

    // workersForMoveFetch(10).then((data)=> {
    //   console.log(data)
    // })
  }, [])

  return (
    <BaseLayout>
      <div className="hierarchy">
        <div className="hierarchy-horizontal-container">
          {hierarchy.map((employeesList, index)=>{
            console.log(employeesList);
            console.log(index)
            return (
              <div className="hierarchy-vertical-container" key={`hierarchy-level-${index}`}>
                {
                  employeesList.map((employee, employeeIndex) => {
                    return <HierarchyUserCard
                      name={employee.name}
                      position={employee.position}
                      url={employee.avatar_link}
                      id={employee.employee_id}
                      setHierarchy={setHierarchy}
                      hierarchy={hierarchy}
                      level={index}
                      active={employee.active}
                      index={employeeIndex}
                      inTeam={index>hierarchyLevel && isActive}
                      setHierarchyLevel={setHierarchyLevel}
                      hierarchyLevel={hierarchyLevel}
                      setIsActive={setIsActive}
                      isActive={isActive}
                      key={`hierarchy-employee-${employee.employee_id}`}
                    />
                  })
                }
                {index>hierarchyLevel && isActive ? <div className="hierarchy-hire-worker-button" onClick={ () => {setHireWorkerModalIsOpen(true)}}>{hireEmployeeButton}</div> : <></>}
              </div>
            )
          }
          )}
        </div>
      </div>
      {hireWorkerModalIsOpen ? <HireWorker/> : <></>}

    </BaseLayout >
  );
};

export default Hierachy;
