import React, { Component } from "react";
import Axios from "axios";
import axios from "axios";

// import React from 'react';

const Table = () => {
    state = {
        employees: [],
        filteredEmployees: [],
        search: "",
    }
    
    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        axios.get("https://randomuser.me/api/?results=25")
        .then((respond) => {
            for (let i = 0; i < response.data.results.length; i++) {
                console.log(response.data.results[i].gender);
              }
        })
    }
        
    


};

export default Table;