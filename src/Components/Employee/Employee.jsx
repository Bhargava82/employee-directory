import React from 'react';

const Employee = () => {
    return (
        <>
        <div
          className="employee"
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#000080",
            color: "#e6e6ff",
            fontFamily: "'Patrick Hand', cursive",
          }}
        >
          <h1 className="display-4" style={{ fontSize: "60px" }}>
            <i className="fad fa-address-book"></i> Employee Directory
          </h1>
          <p>
            Search the Directory by Last Name.
          </p>
        </div>
      </>
    );
};

export default Employee;