import React from "react";
import Card from "./Card";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Cardbody = () => {
  const { data } = useFetch("http://localhost:5000/");
  const workingProjects = data.filter((proj) => proj.status === "working");
  const inProgressProjects = data.filter(
    (proj) => proj.status === "in-progress"
  );
  const completedProjects = data.filter((proj) => proj.status === "completed");

  const [working, setWorking] = useState({
    details: {},
    count: 0,
  });
  const [inProgress, setInProgress] = useState({
    details: {},
    count: 0,
  });
  const [completed, setCompleted] = useState({
    details: {},
    count: 0,
  });
  const clickWorking = () => {
    if (working.count >= workingProjects.length - 1) {
      setWorking((prev) => {
        return {
          details: {},
          count: 0,
        };
      });
    } else {
      setWorking((prev) => {
        return {
          details: {},
          count: prev.count + 1,
        };
      });
    }
    setWorking((prev) => {
      return {
        details: workingProjects[prev.count],
        count: prev.count,
      };
    });
  };
  const clickInProgress = () => {
    if (inProgress.count >= inProgressProjects.length - 1) {
      setInProgress((prev) => {
        return {
          details: {},
          count: 0,
        };
      });
    } else {
      setInProgress((prev) => {
        return {
          details: {},
          count: prev.count + 1,
        };
      });
    }
    setInProgress((prev) => {
      return {
        details: inProgressProjects[prev.count],
        count: prev.count,
      };
    });
  };
  const clickCompleted = () => {
    if (completed.count >= completedProjects.length - 1) {
      setCompleted((prev) => {
        return {
          details: {},
          count: 0,
        };
      });
    } else {
      setCompleted((prev) => {
        return {
          details: {},
          count: prev.count + 1,
        };
      });
    }
    // setDetails(data[count]);
    setCompleted((prev) => {
      return {
        details: completedProjects[prev.count],
        count: prev.count,
      };
    });
  };

  const clickWorkingBack = () => {
    setWorking((prev) => {
      return {
        details: prev.details,
        count: prev.count - 1,
      };
    });
  };
  const clickProgressBack = () => {
    setInProgress((prev) => {
      return {
        details: prev.details,
        count: prev.count - 1,
      };
    });
  };
  const clickCompletedBack = () => {
    setCompleted((prev) => {
      return {
        details: prev.details,
        count: prev.count - 1,
      };
    });
  };
  return (
    <div className="testbody col-md-7 container-fluid">
      <div className="testbody--details">
        <h6>working...</h6>
        <Card
          forwardClick={clickWorking}
          project={working.details}
          backClick={clickWorkingBack}
        />
      </div>
      <div className="testbody--details">
        <h6>in-progress...</h6>
        <Card
          forwardClick={clickInProgress}
          project={inProgress.details}
          backClick={clickProgressBack}
        />
      </div>
      <div className="testbody--details">
        <h6>completed...</h6>
        <Card
          forwardClick={clickCompleted}
          project={completed.details}
          backClick={clickCompletedBack}
        />
      </div>
    </div>
  );
};

export default Cardbody;
