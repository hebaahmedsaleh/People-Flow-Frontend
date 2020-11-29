import { createAsyncAction } from 'redux-promise-middleware-actions';
import { employeeProps } from './screens/employees-list';

const options = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
	'Access-Control-Allow-Headers': 'Content-Type'
};

const apiUrl = "http://localhost:4000/employee";

export const FETCH_EMPLOYEE = 'employee/fetch';
/*
 * Function: fetch Employee
 * Description: Fetch employees data
 */

const fetchEmployee = createAsyncAction(FETCH_EMPLOYEE, async (id: number) => {
	const response = await fetch(`${apiUrl}/employees/${id}`, { headers: options });
	const result = await response.json();
	return result;
});

export const FETCH_EMPLOYEES = 'employee/fetch-all';
/*
 * Function: fetch Employees
 * Description: Fetch employees data
 */

const fetchEmployees = createAsyncAction(FETCH_EMPLOYEES, async () => {
	const response = await fetch(apiUrl, { headers: options });
	const result = await response.json();
	return result;
});

export const ADD_EMPLOYEE = 'employee/add-employee';
/*
 * Function: addEmployees
 * Description:Add Employees data
 */
const addEmployee = createAsyncAction(ADD_EMPLOYEE, async (data: any) => {
	const response = await fetch(`${apiUrl}/create`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	const result = await response.json();
	return result;
});

export const UPDATE_EMPLOYEE = 'employee/update-employee';
/*
 * Function: updateEmployees
 * Description: Update Employee data
 */
const updateEmployee = createAsyncAction(UPDATE_EMPLOYEE, async (data: employeeProps) => {
	const response = await fetch(`${apiUrl}/update/${data.id}`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	const result = await response.json();
	return result;
});


export { fetchEmployee, fetchEmployees, addEmployee, updateEmployee };
