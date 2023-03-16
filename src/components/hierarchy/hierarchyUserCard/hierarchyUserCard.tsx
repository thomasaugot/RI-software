import { FC } from "react";
import { profile } from "../../../assets/Icons";
import { fireEmployeeButton, moveEmployeeButton, replaceEmployeeButton } from "../../../assets/hierarchyIcons"
import './hierarchyUserCard.scss'
// import { hierarchyItem, HierarchyUserCardProps } from '../../../types/hierarchyTypes';
import { hierarchyUserCardProps } from '../../../types/hierarchy/hierarchyUserCardTypes';
import { hierarchyItem } from '../../../types/hierarchy/generalTypes';
import { authorizedRequest } from '../../../utils/queries';
import { fetchEmployeesUrl } from "../../../utils/network";



const HierarchyUserCard: FC<hierarchyUserCardProps> = ({ name, position, url, employeeId, userId, setHierarchy, hierarchy, level, active, index, inTeam, setHierarchyLevel, hierarchyLevel, setIsActive, isActive }) => {

    const currentUserEmployeeId = parseInt(localStorage.getItem('employee_id') || '-1');
    const companyId = parseInt(localStorage.getItem('companyId') || '-1');

    const getEmployeesData = () => {

        if(employeeId === currentUserEmployeeId){
            setHierarchyLevel(level);
            setIsActive(true);
        }else if(isActive && level>hierarchyLevel){
            setIsActive(true);
        }else{
            setIsActive(false);
        }

        const arrayBuf = hierarchy.slice(0, level+1);

        for(let i=0; i<arrayBuf[level].length; i++){
            arrayBuf[level][i].active = false;
        }

        arrayBuf[level][index].active = true;

        

        authorizedRequest(fetchEmployeesUrl(companyId, employeeId), 'GET').then((data) => {

            console.log(data)
            const employeesList: hierarchyItem[] = data.result || [];

            for(let i=0; i<employeesList.length; i++){
                employeesList[i].active = false;
            } 

            if(employeesList){
                setHierarchy([...arrayBuf, [...employeesList]])
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
                        <div className="user-card-functions-replace">
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