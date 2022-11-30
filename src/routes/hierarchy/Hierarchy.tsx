import { FC, FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faUserXmark,
  faEllipsisV,
  faAngleRight,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import Modal from "../../components/shared/modal/Modal";
import Checkbox from "../../components/shared/checkbox/Checkbox";

import "./Hierarchy.scss";

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

const Hierachy: FC = () => {
  const [employees, setEmployees] = useState<
    Array<{
      name: string;
      role: string;
      generalRole: "CEO" | "CTO" | "team-lead" | "others";
    }>
  >([
    {
      name: "Emery Vetrovs",
      role: "CEO",
      generalRole: "CEO",
    },
    {
      name: "Alfredo Stantan",
      role: "CTO",
      generalRole: "CTO",
    },
    {
      name: "Ahmad Vetrovs",
      role: "Lead Team A",
      generalRole: "team-lead",
    },
    {
      name: "Philip Curtis",
      role: "Lead Team B",
      generalRole: "team-lead",
    },
    {
      name: "Jaxson Franci",
      role: "Lead Designer",
      generalRole: "others",
    },
    {
      name: "Gretchen Gouse",
      role: "Lead QA",
      generalRole: "others",
    },
  ]);
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
  const [selectedUser, setSelectedUser] = useState<null | string>(null);

  const leads = employees.filter((e) => e.generalRole === "team-lead");
  const teamLead = employees.find((e) => e.generalRole === "team-lead");

  const handleAddNewUser = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <BaseLayout>
      <div className="Hierarchy">
        {/* <h1>Иерархия</h1> */}
        <header>
          <div className="search-container">
            <input className="search" placeholder="Search" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
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
              {employees.map((e, j) => (
                <div key={`e-d-${j}`} className="employee-detail">
                  <div>
                    <div className="left">
                      <div>
                        <div className="profile-image">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                      </div>
                      <div>
                        <p>{e.name}</p>
                        <p>{e.role}</p>
                      </div>
                    </div>

                    <div className="right">
                      <div>
                        <button
                          className="remove"
                          onClick={() => setSelectedUser(e.name)}
                        >
                          <FontAwesomeIcon icon={faUserXmark} />
                        </button>
                        <button className="expand">
                          <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                      </div>

                      <button className="options">
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </button>
                    </div>
                  </div>
                  <div className="divide" />

                  {j === employees.length - 1 && (
                    <button
                      className="add"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* leads */}
            <div className="employee-details custom-scroll">
              {leads.map((e, j) => (
                <div key={`l-d-${j}`} className="employee-detail">
                  <div>
                    <div className="left">
                      <div>
                        <div className="profile-image">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                      </div>
                      <div>
                        <p>{e.name}</p>
                        <p>{e.role}</p>
                      </div>
                    </div>

                    <div className="right">
                      <div>
                        <button
                          onClick={() => setSelectedUser(e.name)}
                          className="remove"
                        >
                          <FontAwesomeIcon icon={faUserXmark} />
                        </button>
                        <button className="expand">
                          <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                      </div>

                      <button className="options">
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </button>
                    </div>
                  </div>
                  <div className="divide" />

                  {j === employees.length - 1 && (
                    <button
                      className="add"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* team lead */}
            <div className="employee-details custom-scroll">
              <div className="employee-detail">
                <div>
                  <div className="left">
                    <div>
                      <div className="profile-image">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                    </div>
                    <div>
                      <p>{teamLead?.name ?? ""}</p>
                      <p>{teamLead?.role ?? ""}</p>
                    </div>
                  </div>

                  <div className="right">
                    <div>
                      <button
                        onClick={() => setSelectedUser(teamLead?.name ?? "")}
                        className="remove"
                      >
                        <FontAwesomeIcon icon={faUserXmark} />
                      </button>
                      <button className="expand">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                    </div>

                    <button className="options">
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                  </div>
                </div>
                <div className="divide" />

                <button
                  className="add"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* delete user modal */}
        <Modal open={!!selectedUser} requestClose={() => setSelectedUser(null)}>
          <div className="modal-content">
            <h2 className="modal-header">Delete this user permanently?</h2>
            <div className="buttons">
              <button
                onClick={() => {
                  setEmployees((prev) =>
                    prev.filter((e) => e.name !== selectedUser)
                  );
                  setSelectedUser(null);
                }}
              >
                Ok
              </button>
              <button onClick={() => setSelectedUser(null)}>Cancel</button>
            </div>
          </div>
        </Modal>

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
              <div className="details">
                <div>
                  <div className="field-container">
                    <label>Name</label>
                    <input />
                  </div>
                  <div className="field-container">
                    <label>Position</label>
                    <input />
                  </div>
                  <div className="field-container">
                    <label>Password</label>
                    <input />
                  </div>
                  <div className="field-container">
                    <label>Working Hours</label>
                    <input />
                  </div>
                  <div className="field-container">
                    <label>Wage</label>
                    <input />
                  </div>
                </div>

                <div>
                  <div className="field-container">
                    <label>Division</label>
                    <input />
                  </div>
                  <div className="field-container">
                    <label>Team</label>
                    <input />
                  </div>
                  <div className="field-container">
                    <label>Phone</label>
                    <input />
                  </div>
                  <div className="field-container">
                    <label>Email</label>
                    <input />
                  </div>
                  <div className="field-container">
                    <label>Rate</label>
                    <input />
                  </div>
                </div>
              </div>

              {/* user functions */}
              <div className="user-functions">
                <h3>User Functions</h3>
                <div className="functions">
                  {groupIntoColumns(Object.keys(functions), 4).map((col, i) => (
                    <div key={`f-c-${i}`}>
                      {col.map((item, j) => {
                        const row = functions[item as keyof typeof functions];

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

              <button type="submit">Add</button>
            </form>
          </div>
        </Modal>
      </div>
    </BaseLayout>
  );
};

export default Hierachy;
