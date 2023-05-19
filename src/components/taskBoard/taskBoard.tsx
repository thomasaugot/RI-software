// import React, { useEffect, useState } from "react";
import TaskCard from "./taskCard/taskCard";

type Task = {
  id: string;
  status: string;
  name: string;
  content: string;
  riskStatus: string;
  trackStatus: string;
  users: number;
  date: string;
  comments: number;
};

const TaskBoard: React.FC = () => {
  //   const [tasks, setTasks] = useState<Task[]>([]);

  const taskArray = [
    {
      id: "1",
      status: "Open",
      name: "Market Research",
      content: "Target audience",
      riskStatus: "At Risk",
      trackStatus: "On Track",
      users: 2,
      date: "25.02.2023",
      comments: 1,
    },
    {
      id: "2",
      status: "Open",
      name: "Market Research",
      content: "Target audience",
      riskStatus: "Low",
      trackStatus: "Off Track",
      users: "",
      date: "25.02.2023",
      comments: 1,
    },
  ];

  //   useEffect(() => {
  //     const fetchTasksData = async () => {
  //       try {
  //         const tasksData = await authorizedRequest("api/tasks", "GET"); // Replace 'api/tasks' with the actual endpoint and 'GET' with the desired HTTP method
  //         setTasks(tasksData);
  //       } catch (error) {
  //         console.log("Error fetching tasks:", error);
  //       }
  //     };

  //     fetchTasksData();
  //   }, []);

  const renderTasksByStatus = (status: string) => {
    const filteredTasks = taskArray.filter((task) => task.status === status);

    return filteredTasks.map((task) => <TaskCard key={task.id} />);
  };

  return (
    <div>
      <div className="column">
        <h2>Open</h2>
        {renderTasksByStatus("Open")}
      </div>
      <div className="column">
        <h2>In Work</h2>
        {renderTasksByStatus("In work")}
      </div>
      <div className="column">
        <h2>Done</h2>
        {renderTasksByStatus("Done")}
      </div>
    </div>
  );
};

export default TaskBoard;
