import React from "react";
import "./todosLoading.css";

function TodosLoading() {
    return (
        <div className="loader">
          <div className="bar red"></div>
          <div className="bar orange"></div>
          <div className="bar yellow"></div>
          <div className="bar green"></div>
          <div className="bar blue"></div>
          <div className="bar violet"></div>
        </div>

    );
  }

export { TodosLoading };