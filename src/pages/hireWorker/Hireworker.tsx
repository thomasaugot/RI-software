import { SetStateAction, useEffect, useState } from "react";
import { profile, search } from "../../assets/Icons";
import { moveWorkers } from "../../queries/hireworkerQueries";
import { TypeProps } from "../hierarchy/Hierarchy";


const Employee: TypeProps[] = [
    {
        id: 1,
        companyId: 1,
        email: "Emery Vetrovs",
        position: "CEO",
        generalRole: "CEO",
    },
    {
        id: 4,
        companyId: 2,
        email: "Alfredo Stantan",
        position: "CTO",
        generalRole: "CTO",
    },
    {
        id: 3,
        companyId: 2,
        email: "Ahmad Vetrovs",
        position: "Lead Team A",
        generalRole: "team-lead",
    },
    {
        id: 2,
        companyId: 2,
        email: "Philip Curtis",
        position: "Lead Team B",
        generalRole: "team-lead",
    },
    {
        id: 5,
        companyId: 3,
        email: "Jaxson Franci",
        position: "Lead Designer",
        generalRole: "others",
    },
    {
        id: 8,
        companyId: 3,
        email: "Gretchen Gouse",
        position: "Lead QA",
        generalRole: "others",
    },
]




const Hireworker = ({ lead_id }: any) => {
    const [employees, setEmployees] = useState<TypeProps[]>([]);
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    // const [searchType, setSearchType] = useState("name");
    // const [filteredEmployees, setFilteredEmployees] = useState<TypeProps[]>([]);

    const handleWorkersFetch = (id: string) => {
        setLoading(true);
        try {
            moveWorkers({ leader_id: lead_id, team_moving: true });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await moveWorkers(lead_id);
                console.log(data);
                const employeeData = data.result.map((item: any) => ({
                    id: item.user_id,
                    email: item.name,
                    position: item.position,
                    url: item.avatar_link,
                }));
                setEmployees(employeeData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    console.log(lead_id)
    {/* handle Search effect */ }
    useEffect(() => {
        const search = String(searchTerm).toLowerCase();
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
                            {search}
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