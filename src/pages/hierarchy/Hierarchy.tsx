import { FC, FormEvent, useState, useEffect } from "react";
import "./Hierarchy.scss";
import { adduser, moveWorker, options, profile, retry, userx } from "../../assets/Icons";
import { fetchLeaderData, fetchTeamLeadData, fetchWorkerData } from "../../queries/hierarchyQueries";
import UserCard from "../../components/UserCard/userCard";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";




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
  url?: string;
  generalRole: "CEO" | "CTO" | "team-lead" | "others";
}

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

const Hierachy: FC = () => {
  const [employees, setEmployees] = useState<TypeProps[]>(Employee)
  const [teamlead, setTeamLead] = useState<TypeProps[]>([])
  const [teamId, setTeamId] = useState<any>()
  const [employeeactiveId, setEmployeeActiveId] = useState<any>(null)
  const [teamleadactiveId, setTeamleadActiveId] = useState<any>(null)
  const [worker, setWorker] = useState<TypeProps[]>([])
  const [workerId, setWorkerId] = useState<any>()
  const [modalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false)


  const handleAddNewUser = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleRemove = (id: any) => {

  }



  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchLeaderData();
        if (data && data.result) {
          const employeeData = data.result.map(
            (item: { [x: string]: any; user_id: any }) => ({
              id: item.user_id,
              email: item.name,
              position: item.position,
              url: item.avatar_link,
            })

          );

          setEmployees(employeeData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  //leads

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTeamLeadData(teamId);
        if (data && data.result) {
          const teamData = data.result.map(
            (item: { [x: string]: any; user_id: any }) => ({
              id: item.user_id,
              email: item.name,
              position: item.position,
              url: item.avatar_link,
            })

          );

          setTeamLead(teamData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();

  }, [teamId]);
  console.log(teamlead)
  console.log(teamId)


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchWorkerData(workerId);
        if (data && data.result) {
          const workerData = data.result.map(
            (item: { [x: string]: any; user_id: any }) => ({
              id: item.user_id,
              email: item.name,
              position: item.position,
              url: item.avatar_link,
            })

          );

          setWorker(workerData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();

  }, [workerId]);
  console.log(worker)
  console.log(workerId)


  return (
    <BaseLayout>
    <div className="Hierarchy">

      <div className="container custom-scroll">
        <div>
          <div className="employee-details custom-scroll">
            {/* all employees */}
            {employees.map((e, j) => (
              <div key={`e-d-${j}`}>
                <div>
                  <UserCard id={e.id} email={e.email} position={e.position} url={e.url} />
                </div>
              </div>
            ))}
          </div>

          <div className="employee-details custom-scroll">
            {/* all employees */}
            {teamlead.map((e, j) => (
              <div key={`e-d-${j}`}>
                <div>
                  <UserCard id={e.id} email={e.email} position={e.position} url={e.url} />
                </div>
                <div className="divide" />

                {j === teamlead.length - 1 && (
                  <button
                    className="add"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    {adduser}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="employee-details custom-scroll">
            {/* all employees */}
            {worker.map((e, j) => (
              <div key={`e-d-${j}`} className="employee-detail">
                <div>
                  <UserCard id={e.id} email={e.email} position={e.position} url={e.url} />
                </div>
                <div className="divide" />

                {j === worker.length - 1 && (
                  <button
                    className="add"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    {adduser}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </BaseLayout >
  );
};

export default Hierachy;
