import React from "react";
import Card from "./Card";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const Cardbody = () => {
  // const { data, loading } = useFetch("http://localhost:5000/");
  const { data, loading } = useFetch("https://api-projectmanager.onrender.com");

  //status states
  const [working, setWorking] = useState({});
  const [inProgress, setInProgress] = useState({});
  const [completed, setCompleted] = useState({});

  let [workingCount, setWorkingCount] = useState(0);
  let [progressCount, setProgressCount] = useState(0);
  let [completedCount, setCompletedCount] = useState(0);

  let [workingProjects, setWorkingProjects] = useState([]);
  let [inProgressProjects, setInProgressProjects] = useState([]);
  let [completedProjects, setCompletedProjects] = useState([]);

  useEffect(() => {
    if (!loading) {
      setWorkingProjects(data.filter((proj) => proj.status === "working"));
      setInProgressProjects(
        data.filter((proj) => proj.status === "in-progress")
      );
      setCompletedProjects(data.filter((proj) => proj.status === "completed"));
      if (workingProjects.length > 0) {
        setWorking(workingProjects[0]);
      }
      if (inProgressProjects.length > 0) {
        setInProgress(inProgressProjects[0]);
      }
      if (completedProjects.length > 0) {
        setCompleted(completedProjects[0]);
      }
    }
  }, [data]);

  //forward clicks for working, progress and completed statuses
  const clickWorking = () => {
    if (workingCount >= workingProjects.length - 1) {
      setWorkingCount(0);
    } else {
      setWorkingCount((prev) => prev + 1);
    }
    setWorking(workingProjects[workingCount]);
  };

  const clickInProgress = () => {
    if (progressCount >= inProgressProjects.length - 1) {
      setProgressCount(0);
    } else {
      setProgressCount((prev) => prev + 1);
    }
    setInProgress(inProgressProjects[progressCount]);
  };

  const clickCompleted = () => {
    if (completedCount >= completedProjects.length - 1) {
      setCompletedCount(0);
    } else {
      setCompletedCount((prev) => prev + 1);
    }
    setCompleted(completedProjects[completedCount]);
  };

  //Backward click for working, progress and completed statuses
  const clickWorkingBack = () => {
    if (workingCount <= 0) {
      setWorkingCount(workingProjects.length - 1);
    } else {
      setWorkingCount((prev) => prev - 1);
    }
    setWorking(workingProjects[workingCount]);
  };

  const clickProgressBack = () => {
    if (progressCount <= 0) {
      setProgressCount(inProgressProjects.length - 1);
    } else {
      setProgressCount((prev) => prev - 1);
    }
    setInProgress(inProgressProjects[progressCount]);
  };

  const clickCompletedBack = () => {
    if (completedCount <= 0) {
      setCompletedCount(completedProjects.length - 1);
    } else {
      setCompletedCount((prev) => prev - 1);
    }
    setCompleted(completedProjects[completedCount]);
  };
  return (
    <div className="cardbody col-md-7 container-fluid">
      <div className="cardbody--details">
        <h6>working...</h6>
        <Card
          forwardClick={clickWorking}
          project={working}
          backClick={clickWorkingBack}
          isLoading={loading}
        />
      </div>
      <div className="cardbody--details">
        <h6>in-progress...</h6>
        <Card
          forwardClick={clickInProgress}
          project={inProgress}
          backClick={clickProgressBack}
          isLoading={loading}
        />
      </div>
      <div className="cardbody--details">
        <h6>completed...</h6>
        <Card
          forwardClick={clickCompleted}
          project={completed}
          backClick={clickCompletedBack}
          isLoading={loading}
        />
      </div>
    </div>
  );
};

export default Cardbody;
