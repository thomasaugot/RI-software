import { FC, FormEvent, SetStateAction, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisV,
    faAngleRight,
    faTimes, faSearch
} from "@fortawesome/free-solid-svg-icons";
import { profile } from "../../components/shared/nav/icons";
import { userx } from "../../components/shared/nav/icons";
import { adduser } from "../../components/shared/nav/icons";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import Modal from "../../components/shared/modal/Modal";
import Checkbox from "../../components/shared/checkbox/Checkbox";

import "./Hireworker.scss";
import { TypeProps } from "../hierarchy/Hirearchy";
// import { moving } from "../../utils/network";
// import { token } from "../../components/Login/Logins";

// const Employee: TypeProps[] = [
//     {
//         id: 1,
//         companyId: 1,
//         email: "Emery Vetrovs",
//         position: "CEO",
//         generalRole: "CEO",
//     },
//     {
//         id: 4,
//         companyId: 2,
//         email: "Alfredo Stantan",
//         position: "CTO",
//         generalRole: "CTO",
//     },
//     {
//         id: 3,
//         companyId: 2,
//         email: "Ahmad Vetrovs",
//         position: "Lead Team A",
//         generalRole: "team-lead",
//     },
//     {
//         id: 2,
//         companyId: 2,
//         email: "Philip Curtis",
//         position: "Lead Team B",
//         generalRole: "team-lead",
//     },
//     {
//         id: 5,
//         companyId: 3,
//         email: "Jaxson Franci",
//         position: "Lead Designer",
//         generalRole: "others",
//     },
//     {
//         id: 8,
//         companyId: 3,
//         email: "Gretchen Gouse",
//         position: "Lead QA",
//         generalRole: "others",
//     },
// ]
// const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3Mjg1MjEwMywianRpIjoiYzc5ODlkMDktNDUyYi00OTlhLWIzN2QtZTI2Y2NiYjc0ZGE4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImNiMTE2NDg1YTcwZjQ0YzhhNDYyNmRlMjE3MzlmNTM2IiwibmJmIjoxNjcyODUyMTAzLCJleHAiOjE2NzI4NTMwMDN9.X2r_9W-5udBQG5PDtdo64EiSixCkoKFAxTqsDoqR4so";






const Hireworker = ({ lead_id }: any) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [employees, setEmployees] = useState<TypeProps[]>([]);
    const [get, setGet] = useState(null);
    const [loading, setLoading] = useState(false)
    const [getWorkers, setGetWorkers] = useState(null);
    const [selectedUser, setSelectedUser] = useState<null | string>(null);
    const [searchTerm, setSearchTerm] = useState("");
    // const [searchType, setSearchType] = useState("name");
    // const [filteredEmployees, setFilteredEmployees] = useState<TypeProps[]>([]);

    const handleWorkersFetch = (id: SetStateAction<null>) => {
        setLoading(true)

        try {
            fetch(`${null}${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${null}`,
                },
                body: JSON.stringify({
                    leader_id: lead_id,
                    team_moving: true
                }),


            });
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch(`${null}1`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${null}`,
                },
                // body: JSON.stringify({
                //     "company_external_id": "1de6b9ec89e4492395be62ad2927f1e5"
                // }),
            });
            const data = await response.json();
            console.log(data)
            const employeeData = data.result.map(
                (item: { [x: string]: any; user_id: any }) => ({
                    id: item.user_id,
                    email: item.name,
                    position: item.position,
                    url: item.avatar_link,
                })
            );
            setEmployees(employeeData)
            setLoading(false)
        };
        fetchData();
        setLoading(true)
    }, []);

    console.log(lead_id)
    {/* handle Search effect */ }

    useEffect(() => {
        const search = searchTerm.toLowerCase();
        const filtered = employees.filter(employee => employee.email.toLowerCase().includes(search) || employee.position.toLowerCase().includes(search) || employee.generalRole.toLowerCase().includes(search))
        setEmployees(filtered)
    }, [searchTerm])


    const handleSearch = (e: any) => {
        const searching = e.target.value;
        setSearchTerm(searching);
    }
    if (loading) {
        return (
            <div className="loading-spinner">
                Loading....
            </div>
        )
    }
    return (
        <>
            <div className="Hireworker">
                {/* <h1>Иерархия</h1> */}
                <header>
                    <div className="search-container">
                        <input className="search" placeholder="Search"
                            onChange={handleSearch}
                        />
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </header>
                <div className="container custom-scroll">
                    <div>
                        <div className="employee-details custom-scroll" >
                            {employees.map((e: any, j) => (
                                <div key={`l-d-${j}`} className="employee-detail" onClick={() => handleWorkersFetch(e.id)}>
                                    <div>
                                        <div className="left">
                                            <div>
                                                <div className="profile-image">
                                                    {e.url ? <img src={e.url} alt="U." /> : <>{profile} </>}
                                                </div>
                                            </div>
                                            <div className="name-role">
                                                <p>{e.email}</p>
                                                <p>{e.position}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hireworker;