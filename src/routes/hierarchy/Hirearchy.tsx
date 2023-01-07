import { FC, FormEvent, SetStateAction, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisV,
    faAngleRight,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { profile } from "../../components/shared/nav/icons";
import { userx } from "../../components/shared/nav/icons";
import { adduser } from "../../components/shared/nav/icons";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import Modal from "../../components/shared/modal/Modal";
import Checkbox from "../../components/shared/checkbox/Checkbox";
import { useNavigate } from "react-router-dom";
import "./Hierarchy.scss";
import Hireworker from "../hireworker/Hireworker";
// import Hireworker from "../hireWorker/Hireworker";
// import { add, del, url } from "../../utils/network";
// import { token } from "../../components/Login/Logins";

const groupIntoColumns = (arr: Array<any>, cols: number) => {
    const result = [];

    const arrCopy = [...arr];

    while (arrCopy.length >= 1) {
        result.push(
            arrCopy.splice(0, arrCopy.length >= cols ? cols : arrCopy.length)
        );
    }

    return result;
};

export interface TypeProps {
    id: number;
    email: string;
    companyId: number;
    position: string;
    url: string
    generalRole: "CEO" | "CTO" | "team-lead" | "others";
}



// const Employee: TypeProps[] = [
//   {
//     id: 1,
//     companyId: 1,
//     email: "Emery Vetrovs",
//     position: "CEO",
//     generalRole: "CEO",
//   },
//   {
//     id: 4,
//     companyId: 2,
//     email: "Alfredo Stantan",
//     position: "CTO",
//     generalRole: "CTO",
//   },]

// const Team: TypeProps[] = [
//   {
//     id: 3,
//     companyId: 2,
//     email: "Ahmad Vetrovs",
//     position: "Lead Team A",
//     generalRole: "team-lead",
//   },
//   {
//     id: 2,
//     companyId: 2,
//     email: "Philip Curtis",
//     position: "Lead Team B",
//     generalRole: "team-lead",
//   },]
// const Worker: TypeProps[] = [
//   {
//     id: 5,
//     companyId: 3,
//     email: "Jaxson Franci",
//     position: "Lead Designer",
//     generalRole: "others",
//   },
//   {
//     id: 8,
//     companyId: 3,
//     email: "Gretchen Gouse",
//     position: "Lead QA",
//     generalRole: "others",
//   },
// ]
const Hierachy: FC = () => {
    const [employees, setEmployees] = useState<TypeProps[]>([]);
    const [team, setTeam] = useState<TypeProps[]>([]);
    const [workers, setWorkers] = useState<TypeProps[]>([]);

    const [functions, setFunctions] = useState({
        dataAnalyst: { name: "Data Analyst", value: false },
        project: { name: "Project", value: false },
        finance: { name: "Finance", value: false },
        inventory: { name: "Inventory", value: false },
        procurement: { name: "Procurement", value: false },
        employees: { name: "Employees", value: false },
        sale: { name: "Sale", value: false },
        competitorAnalyst: { name: "Competitor Analyst", value: false },
    });

    const [modalOpen, setModalOpen] = useState(false);

    //addemployee modal
    const [AddmodalOpen, setAddModalOpen] = useState(false);

    //team delete modal
    const [deleteModal, setDeleteModal] = useState(false);

    const [selectedUser, setSelectedUser] = useState<any>();
    const [leadID, setleadID] = useState<any>();
    const [get, setGet] = useState(null);
    const [getWorkers, setGetWorkers] = useState(null);
    const [getCompany, setGetCompany] = useState(null);
    const [error, setError] = useState(null);
    const [confirmTeamFire, setConfirmTeamFire] = useState(false);
    const [teamLeadDel, setTeamleadDel] = useState(false);
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [wage, setWages] = useState('');
    const [work_hours, setWorkHour] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const handleAddNewUser = (e: FormEvent) => {
        setModalOpen(false)
        e.preventDefault();
        setIsLoading(true);

        fetch(`${null}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${null}`
            },
            body: JSON.stringify({ email, position, wage, work_hours, leadID })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setIsLoading(false)
                    console.log(data);
                    setEmployees([...employees, data.employee])
                    setEmail('');
                    setPosition('');
                    setWages('');
                    setWorkHour('');
                    setError(null);

                }
            })
            .catch((error) => {
                setError(error.message)
                setIsLoading(false);
            })
    };

    // const onSubmit = 




    // fetch leaders
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await fetch(`${null}0`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${null}`,
                },
                // body: JSON.stringify({
                //   company_external_id: "1de6b9ec89e4492395be62ad2927f1e5",
                // }),
            });
            const data = await response.json();
            const employeeData = data.result.map(
                (item: { [x: string]: any; user_id: any }) => ({
                    id: item.user_id,
                    email: item.name,
                    position: item.position,
                    url: item.avatar_link,
                })
            );
            setEmployees(employeeData)
            setIsLoading(false)
        };
        fetchData();
        setIsLoading(true)
    }, []);

    // fetch employees
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await fetch(`${null}4`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${null}`,
                },
                // body: JSON.stringify({
                //   company_external_id: "1de6b9ec89e4492395be62ad2927f1e5",
                // }),
            });
            const data = await response.json();
            if (response.status === 404) {
                setTeam([])
            }
            const teamData = data.result.map(
                (item: { [x: string]: any; user_id: any }) => ({
                    id: item.user_id,
                    email: item.name,
                    position: item.position,
                    url: item.avatar_link,
                })
            );
            setTeam(teamData)
            setIsLoading(false)
        };
        fetchData();
        setIsLoading(true)
    }, [get])



    // fetch workers
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await fetch(`${null}8`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${null}`,
                },
                // body: JSON.stringify({
                //   company_external_id: "1de6b9ec89e4492395be62ad2927f1e5",
                // }),
            });
            const data = await response.json();
            if (response.status === 404) {
                setWorkers([])
            }
            const teamData = data.result.map(
                (item: { [x: string]: any; user_id: any }) => ({
                    id: item.user_id,
                    email: item.name,
                    position: item.position,
                    url: item.avatar_link,
                })
            );
            setWorkers(teamData)
            setIsLoading(false)
        };
        fetchData();
        setIsLoading(true)
    }, [getWorkers])



    const handleEmployeeFetch = (id: SetStateAction<null>) => {
        setGet(id);
    }

    const handleWorkersFetch = (id: SetStateAction<null>) => {
        setGetWorkers(id);
    }

    // const handleCompanyFetch = (id: SetStateAction<null>) => {
    //   setGetCompany(id);
    // }


    // handle Delete Worker
    // const handleAddNewEmployee = (e: FormEvent) => {
    //   setAddModalOpen(false)
    //   e.preventDefault();
    // };

    const handleFireEmployee = (employeeId: number, confirmTeamFire: boolean) => {
        fetch(`${null}`,
            {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${null}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ employee_id: employeeId, with_team: confirmTeamFire }),
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setEmployees((prev) => prev.filter((employee: any) => employee.id !== employeeId))
                    // setSelectedUser(null);

                    console.log(data)
                    setDeleteModal(false)
                }
            })
            .catch((error) => {
                setError(error.message);
            })
    }



    return (
        <BaseLayout>
            <div className="Hierarchy">
                {/* <h1>Иерархия</h1> */}
                <header>
                    <div className="fa-user">
                        {profile}
                    </div>
                </header>

                <div className="container custom-scroll">
                    <div>
                        {/* <div className="company-details custom-scroll">
              <div>
                <div className="company-logo">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <div>
                  <h2>{data.companyName}</h2>
                  <p>Владелец</p>
                </div>
              </div>
            </div> */}

                        <div className="employee-details custom-scroll">
                            {/* all employees */}
                            {employees.map((e: any, j) => (
                                <div key={`e-d-${j}`} className="employee-detail" onClick={() => handleEmployeeFetch(e.id)}>
                                    <div>
                                        <div className="left">
                                            <div>
                                                <div className="profile-image">
                                                    {e.url ? <img src={e.url} /> : <>{profile}</>}
                                                </div>
                                            </div>
                                            <div className="name-role">
                                                <p>{e.email}</p>
                                                <p>{e.position}</p>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        setDeleteModal(!deleteModal)
                                                        console.log(e.id)
                                                        setSelectedUser(e.id)
                                                    }}
                                                    className="remove"
                                                >
                                                    {userx}
                                                </button>
                                                <button className="expand" onClick={() => {
                                                    setleadID(e.id)
                                                    setAddModalOpen(!AddmodalOpen)
                                                }}
                                                >
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </button>
                                            </div>

                                            <button className="options"

                                            >
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="divide" />


                                </div>
                            ))}
                            {employees.length !== 0 && (
                                <button
                                    className="add"
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    {adduser}
                                </button>
                            )}
                        </div>

                        {/* leads */}
                        <div className="employee-details custom-scroll" >
                            {team.map((e: any, j) => (
                                <div key={`l-d-${j}`} className="employee-detail" onClick={() => handleWorkersFetch(e.id)}>
                                    <div>
                                        <div className="left">
                                            <div>
                                                <div className="profile-image">
                                                    {e.url ? <img src={e.url} alt="profile" /> : <>{profile}</>}
                                                </div>
                                            </div>
                                            <div className="name-role">
                                                <p>{e.email}</p>
                                                <p>{e.position}</p>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        setDeleteModal(!deleteModal)
                                                        console.log(e.id)
                                                        setSelectedUser(e.id)
                                                    }}
                                                    className="remove"
                                                >
                                                    {userx}
                                                </button>

                                                <button className="expand" onClick={() => {
                                                    setleadID(e.id)
                                                    setAddModalOpen(!AddmodalOpen)
                                                }}>
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </button>
                                            </div>

                                            <button className="options">
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="divide" />
                                </div>
                            ))}
                            {team.length !== 0 && (
                                <button
                                    className="add"
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    {adduser}
                                </button>
                            )}
                        </div>

                        {/* team lead */}
                        <div className="employee-details custom-scroll">
                            {workers.map((e, j) => (
                                <div key={`l-d-${j}`} className="employee-detail">
                                    <div>
                                        <div className="left">
                                            <div>
                                                <div className="profile-image">
                                                    {e.url ? <img src={e.url} alt="profile" /> : <>{profile}</>}
                                                </div>
                                            </div>
                                            <div className="name-role">
                                                <p>{e.email}</p>
                                                <p>{e.position}</p>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        setDeleteModal(!deleteModal)
                                                        console.log(e.id)
                                                        setSelectedUser(e.id)
                                                    }}
                                                    className="remove"
                                                >
                                                    {userx}
                                                </button>
                                                <button className="expand" onClick={() => {
                                                    setleadID(e.id)
                                                    setAddModalOpen(!AddmodalOpen)
                                                }}>
                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </button>
                                            </div>

                                            <button className="options"

                                            >
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="divide" />
                                </div>
                            ))}
                            {workers.length !== 0 && (
                                <button
                                    className="add"
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    {adduser}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* delete user modal */}
                <>
                    <Modal open={deleteModal} requestClose={() => setDeleteModal(!deleteModal)}>
                        <div className="modal-content">
                            <h2 className="modal-header">Delete User with Team?</h2>
                            <div className="buttons">
                                <button
                                    onClick={() =>
                                        handleFireEmployee(selectedUser, true)
                                    }
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() =>
                                        handleFireEmployee(selectedUser, false)
                                    }
                                >No</button>
                            </div>
                        </div>
                    </Modal>
                </>
                {/* add new user modal */}
                <Modal open={modalOpen} requestClose={() => setModalOpen(!modalOpen)}>
                    <div className="modal-content">
                        <button className="close" onClick={() => setModalOpen(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <h2 className="modal-header">Add new user</h2>

                        {/* details */}
                        <form onSubmit={handleAddNewUser}>

                            {/* user details */}
                            {error && <p className="error">{error}</p>}
                            <>
                                <div className="details">
                                    <div>
                                        <div className="field-container">
                                            <label>Position</label>
                                            <input
                                                type="text"
                                                id="position"
                                                value={position}
                                                onChange={(event) => setPosition(event.target.value)}
                                            />
                                        </div>
                                        <div className="field-container">
                                            <label>Wage</label>
                                            <input
                                                type="text"
                                                id="wage"
                                                value={wage}
                                                onChange={(event) => setWages(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="field-container">
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                            />
                                        </div>
                                        <div className="field-container">
                                            <label>Work Hour</label>
                                            <input
                                                type="text"
                                                id="work_hours"
                                                value={work_hours}
                                                onChange={(event) => setWorkHour(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* user functions */}
                                <div className="user-functions">
                                    <h3>User Functions</h3>
                                    <div className="functions">
                                        {groupIntoColumns(
                                            Object.keys(functions),
                                            4
                                        ).map((col, i) => (
                                            <div key={`f-c-${i}`}>
                                                {col.map((item, j) => {
                                                    const row = functions[
                                                        item as keyof typeof functions
                                                    ];

                                                    return (
                                                        <div key={`f-r-${j}`} className="function">
                                                            <Checkbox
                                                                isChecked={row.value}
                                                                handleClick={() => {
                                                                    const newFunctions = { ...functions };
                                                                    newFunctions[
                                                                        item as keyof typeof newFunctions
                                                                    ] = {
                                                                        name: row.name,
                                                                        value: !row.value,
                                                                    };
                                                                    setFunctions(newFunctions);
                                                                }}
                                                            />
                                                            <span>{row.name}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button type="submit">Add
                                </button>
                            </>
                        </form>
                    </div>
                </Modal>


                {/* Move employee */}

                <Modal open={AddmodalOpen} requestClose={() => setAddModalOpen(!AddmodalOpen)}>
                    <div className="modal-content employee">
                        <button className="close" onClick={() => {
                            setAddModalOpen(false)
                        }}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <Hireworker lead_id={leadID} />

                    </div>
                </Modal>
            </div>
        </BaseLayout>
    );
};

export default Hierachy;
