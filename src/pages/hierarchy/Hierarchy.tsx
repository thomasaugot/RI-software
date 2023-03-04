import { FC, useState, useEffect } from "react";
import "./Hierarchy.scss";
import { fetchOwners } from "../../queries/hierarchyQueries";
import UserCard from "../../components/UserCard/userCard";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import { hierarchyItem } from '../../types/hierarchyTypes';
import { hireEmployeeButton } from '../../assets/hierarchyIcons';

const Hierachy: FC = () => {

  const companyId = parseInt(localStorage.getItem('company_id') || '-1');

  const [hierarchy, setHierarchy] = useState<hierarchyItem[][]>([]);
  const [hierarchyLevel, setHierarchyLevel] = useState<number>(-1);
  const [isActive, setIsActive] = useState<boolean>(false);

  console.log(hierarchy)

  useEffect(() => {
    fetchOwners(companyId).then((data) => {
      setHierarchy([[...data]]);
    })
  }, [])

  return (
    <BaseLayout>
      <div className="hierarchy">
        <div className="hierarchy-horizontal-container">
          {hierarchy.map((employeesList, index)=>{
            console.log(employeesList);
            console.log(index)
            return (
              <div className="hierarchy-vertical-container"  key={`hierarchy-level-${index}`}>
                {
                  employeesList.map((employee, employeeIndex) => {
                    return <UserCard email={employee.name} position={employee.position} url={employee.avatar_link} id={employee.id} setHierarchy={setHierarchy} hierarchy={hierarchy} level={index} active={employee.active} index={employeeIndex} inTeam={index>hierarchyLevel && isActive} setHierarchyLevel={setHierarchyLevel} hierarchyLevel={hierarchyLevel} setIsActive={setIsActive} isActive={isActive} key={`hierarchy-employee-${employee.id}`} />
                  })
                }
                {index>hierarchyLevel && isActive ? <div className="hierarchy-hire-worker-button">{hireEmployeeButton}</div> : <></>}
              </div>
            )
          }
          )}
        </div>
      </div>
    </BaseLayout >
  );
};

export default Hierachy;
