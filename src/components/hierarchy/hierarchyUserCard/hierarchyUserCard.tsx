import { FC, useEffect, useContext } from "react";
import { profile } from "../../../assets/Icons";
import { fireEmployeeButton, moveEmployeeButton, replaceEmployeeButton } from "../../../assets/hierarchyIcons"
import './hierarchyUserCard.scss'
import { hierarchyUserCardProps } from '../../../types/hierarchy/hierarchyUserCardTypes';
import { hierarchyItem } from '../../../types/hierarchy/generalTypes';
import { authorizedRequest } from '../../../utils/queries';
import { fetchEmployeesUrl } from "../../../utils/network";
import { ModalsContext } from "../../../context/modalsContext";

const HierarchyUserCard: FC<hierarchyUserCardProps> = ({ name, position, url, employeeId, userId, setHierarchy, hierarchy, level, active, index, inTeam, setHierarchyLevel, hierarchyLevel, setIsActive, isActive }) => {

    const currentUserEmployeeId = parseInt(localStorage.getItem('employeeId') || '-1');// logged in user employee id
    const companyId = parseInt(localStorage.getItem('companyId') || '-1');

    const { setHireWorkerModalIsOpen, setHireWorkerLeader } = useContext(ModalsContext);

    // adding new column of employee once someone was chosen in the hierarchy
    const getEmployeesData = () => {

        if(employeeId === currentUserEmployeeId){// if it's the logged in user
            setHierarchyLevel(level);
            setIsActive(true);
        }else if(isActive && level>hierarchyLevel){
            setIsActive(true);
        }else{
            setIsActive(false);
        }

        const arrayBuf = hierarchy.slice(0, level+1); // buffer array

        for(let i=0; i<arrayBuf[level].length; i++){
            arrayBuf[level][i].active = false;
        }

        arrayBuf[level][index].active = true;

        
        // getting employees of the chosen employee
        authorizedRequest(fetchEmployeesUrl(companyId, employeeId), 'GET').then((data) => {

            const employeesList: hierarchyItem[] = data.result || [];

            for(let i=0; i<employeesList.length; i++){
                employeesList[i].active = false;
            } 

            if(employeesList){
                setHierarchy([...arrayBuf, [...employeesList]]);
                
            }else{
                setHierarchy([...arrayBuf, []])
            }
        })
    } 

    return (
        <div 
            className={`${userId ? `${`user-card-container ${active && userId ? 'user-card-container-active' : ''}`}` : 'user-card-container-placeholder'}`}
            onClick={(e) => {
                e.stopPropagation();
                getEmployeesData();
            }}
        >
            <div>
                <div className="user-card-avatar">
                    {url ? <img src={url} alt="U." /> : <>{profile}</>}
                </div>
            </div>
            <div className="user-card-info">
                <p className="user-card-info-name">{name}</p>
                <p className="user-card-info-position">{position}</p>
            </div>
            {inTeam ? 
            <div className="user-card-functions-container">
                <div className="user-card-functions-buttons-container">
                    <div className="user-card-functions-fire">
                        {fireEmployeeButton}
                    </div>
                    {userId ? 
                        <div className="user-card-functions-move">
                            {moveEmployeeButton}
                        </div>
                    :
                        <div className="user-card-functions-replace" onClick={(e) => { e.stopPropagation(); setHireWorkerModalIsOpen(true); setHireWorkerLeader(employeeId)}}>
                            {replaceEmployeeButton}
                        </div>
                    }
                    
                </div>
                <div className="user-card-functions-edit">
                    
                </div>
            </div> : <></>}
            
        </div>
    )
}

export default HierarchyUserCard;