import { FC } from "react";
import { profile } from "../../assets/Icons";
import { fireEmployeeButton, moveEmployeeButton } from "../../assets/hierarchyIcons"
import './userCard.scss'
import { fetchEmployees } from "../../queries/hierarchyQueries";
import { hierarchyItem, UserCardProps } from '../../types/hierarchyTypes'



const UserCard: FC<UserCardProps> = ({email, position, url, id, setHierarchy, hierarchy, level, active, index, inTeam, setHierarchyLevel, hierarchyLevel, setIsActive, isActive}) => {

    const employeeId = parseInt(localStorage.getItem('employee_id') || '-1');

    const getEmployeesData = () => {

        if(id === employeeId){
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

        fetchEmployees(id).then((data) => {

            console.log(data)
            const employeesList: hierarchyItem[] = data || [];

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
        <div className={`user-card-container ${active ? 'user-card-container-active' : ''}`} onClick={(e) => {e.stopPropagation(); getEmployeesData()}}>
            <div>
                <div className="user-card-avatar">
                    {url ? <img src={url} alt="U." /> : <>{profile}</>}
                </div>
            </div>
            <div className="user-card-info">
                <p className="user-card-info-name">{email}</p>
                <p className="user-card-info-position">{position}</p>
            </div>
            {inTeam ? 
            <div className="user-card-functions-container">
                <div className="user-card-functions-buttons-container">
                    <div className="user-card-functions-fire">
                        {fireEmployeeButton}
                    </div>
                    <div className="user-card-functions-move">
                        {moveEmployeeButton}
                    </div>
                </div>
                <div className="user-card-functions-edit">
                    
                </div>
            </div> : <></>}
            
        </div>
    )
}

export default UserCard;