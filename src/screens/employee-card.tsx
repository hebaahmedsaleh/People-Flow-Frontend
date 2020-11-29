import React from "react";
import { useDispatch } from "react-redux";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { employeeProps, statusType } from "./employees-list";
import { StatusItem } from "./status-item";
import { updateEmployee } from "../actions";
const EmployeeCard = (props: { employee: employeeProps }) => {

    const { employee: { name, image, salary, age, status, title } } = props;
    const dispatch = useDispatch();
    const changeStatus: (status: statusType) => any = (status) => {
        const newObj = {
            ...props.employee,
            status
        }
        return dispatch(updateEmployee(newObj));
}

return (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText
            primary={name}
            style={{ fontWeight: 'bold', color: '#3db2cc', cursor: 'pointer' }}
            secondary={
                <>
                    <Typography
                        component="span"
                        variant="body2"
                        style={{ display: "flex" }}
                        color="textPrimary"
                    > {title}
                    </Typography>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                    >
                        salary is {salary} - {age} years old
            <Chip variant="outlined" size="small" label={`status: ${status}`} style={{ marginLeft: 10 }} />
                    </Typography>

                </>
            }
        />
        <span>
            <StatusItem status={status} updateStatus={changeStatus} />
        </span>
    </ListItem>);
};

export { EmployeeCard };
