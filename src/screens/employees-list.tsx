import React, { useEffect }   from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { fetchEmployees } from '../actions';

import { stateType } from "../reducer";
import { EmployeeCard } from './employee-card';

export type statusType = "APPROVED" | "ADDED" | "ACTIVE" | "INACTIVE" | "INCHECK";
export type employeeProps = {     
    age: string;
    id: string;
    image: string;
    name: string;
    salary: string;
    status: statusType;
    title: string;
};


  type employeeArray = employeeProps[];

  const useStyles = makeStyles((theme: any) => ({
    root: {
      width: '100%',
      backgroundColor: "#ecfcff",
    }
  }));

const EmployeesList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const employeesData: employeeArray = useSelector((state:stateType) => Object.values(state.employees.employees));
    
	useEffect(() => {
		dispatch(fetchEmployees());
    },[ dispatch ]);    
    
    return(
        <div>
            {employeesData.map((employee: employeeProps, index: number) => {                
                return(
                    <List className={classes.root} key={index}>
                        <EmployeeCard employee={employee} />
                            {index !== employeesData.length - 1 && <Divider />}
                        </List>
                )
            })}
        </div>
    )
}

export { EmployeesList };