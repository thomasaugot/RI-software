import { FC, FormEvent, useState, useEffect } from "react";
import "./Hierarchy.scss";
import { adduser, moveWorker, options, profile, userx } from "../../assets/Icons";
import BaseLayout from "../../layouts/BaseLayout";



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
  name: string;
  companyId: number;
  role: string;
  generalRole: "CEO" | "CTO" | "team-lead" | "others";
}

const Employee: TypeProps[] = [
  {
    id: 1,
    companyId: 1,
    name: "Emery Vetrovs",
    role: "CEO",
    generalRole: "CEO",
  },
  {
    id: 4,
    companyId: 2,
    name: "Alfredo Stantan",
    role: "CTO",
    generalRole: "CTO",
  },
  {
    id: 3,
    companyId: 2,
    name: "Ahmad Vetrovs",
    role: "Lead Team A",
    generalRole: "team-lead",
  },
  {
    id: 2,
    companyId: 2,
    name: "Philip Curtis",
    role: "Lead Team B",
    generalRole: "team-lead",
  },
  {
    id: 5,
    companyId: 3,
    name: "Jaxson Franci",
    role: "Lead Designer",
    generalRole: "others",
  },
  {
    id: 8,
    companyId: 3,
    name: "Gretchen Gouse",
    role: "Lead QA",
    generalRole: "others",
  },
]

const Hierachy: FC = () => {
  const [employees, setEmployees] = useState<TypeProps[]>(Employee)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<null | string>(null);

  const leads = employees.filter((e) => e.generalRole === "team-lead");
  const teamLead = employees.find((e) => e.generalRole === "team-lead");

  const handleAddNewUser = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleRemove = () => {

  }

  return (
    <BaseLayout>
      <div className="Hierarchy">
        {/* <header>

          <Header />

        </header> */}
        <div className="container custom-scroll">
          <div>
            <div className="employee-details custom-scroll">
              {/* all employees */}
              {employees.map((e, j) => (
                <div key={`e-d-${j}`} className="employee-detail">
                  <div>
                    <div className="left">
                      <div>
                        <div className="profile-image">
                          {profile}
                        </div>
                      </div>
                      <div className="name-role">
                        <p>{e.name}</p>
                        <p>{e.role}</p>
                      </div>
                    </div>

                    <div className="right">
                      <div>
                        <button
                          className="remove"
                          onClick={() => setSelectedUser(e.name)}>
                          {userx}
                        </button>
                        <div>
                          <button className="expand">
                            {moveWorker}
                          </button>
                        </div>
                      </div>
                      <div>
                        <button className="options">
                          {options}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="divide" />

                  {j === employees.length - 1 && (
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
              {leads.map((e, j) => (
                <div key={`e-d-${j}`} className="employee-detail">
                  <div>
                    <div className="left">
                      <div>
                        <div className="profile-image">
                          {profile}
                        </div>
                      </div>
                      <div className="name-role">
                        <p>{e.name}</p>
                        <p>{e.role}</p>
                      </div>
                    </div>

                    <div className="right">
                      <div>
                        <button
                          className="remove"
                          onClick={() => setSelectedUser(e.name)}>
                          {userx}
                        </button>
                        <div>
                          <button className="expand">
                            {moveWorker}
                          </button>
                        </div>
                      </div>
                      <div>
                        <button className="options">
                          {options}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="divide" />

                  {j === leads.length - 1 && (
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
              <div className="employee-detail">
                <div>
                  <div className="left">
                    <div>
                      <div className="profile-image">
                        {profile}
                      </div>
                    </div>

                    <div className="name-role">
                      <p>{teamLead?.name ?? ""}</p>
                      <p>{teamLead?.role ?? ""}</p>
                    </div>
                  </div>

                  <div className="right">
                    <div>
                      <button
                        className="remove"
                        onClick={() => setSelectedUser(teamLead?.name ?? "")}>
                        {userx}
                      </button>
                      <div>
                        <button className="expand">
                          {moveWorker}
                        </button>
                      </div>
                    </div>
                    <div>
                      <button className="options">
                        {options}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="divide" />

                <button
                  className="add"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  {adduser}
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout >
  );
};

export default Hierachy;
