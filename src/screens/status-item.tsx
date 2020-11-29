import React from "react";
import styled from "@emotion/styled";

import { statusType } from "./employees-list";
const statusArray: statusType[] = ["ADDED","INCHECK", "APPROVED","ACTIVE","INACTIVE",];

const StatusContainer = styled.div(
  {
    padding: 25,
    color: "black",
    flex: 1,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "2px 0 0 0",
    border: "1px solid #efefef",
    backgroundColor: "white",
    position: "relative",
    "& > *": {
      margin: "0 0 0 30px",
    },
    "& + &": {
      borderLeft: 0,
    },
    "&:first-child": {
      "& > *": {
        margin: "0 0 0 15px",
      },
      "&:before": {
        content: "none",
      },
    },
    "&:last-child": {
      "&:after": {
        content: "none",
      },
      "&:before": {
        borderLeft: "19px solid #efefef",
      },
    },
    "&:after": {
      content: '" "',
      display: "block",
      position: "absolute",
      width: 0,
      height: 0,
      top: 0,
      right: -19,
      borderLeft: "20px solid white",
      borderTop: "29px solid transparent",
      borderBottom: "29px solid transparent",
      zIndex: 1,
    },

    "&:before": {
      content: '" "',
      display: "block",
      position: "absolute",
      width: 0,
      height: 0,
      top: 0,
      left: "-0.2px",
      borderLeft: "20px solid #efefef",
      borderTop: "29px solid transparent",
      borderBottom: "29px solid transparent",
    },
  },
  ({ active, activeColor }: { active: boolean; activeColor: string }) => {
    if (active) {
      return {
        backgroundColor: activeColor,
        color: "white",
        "&:after": {
          right: "-21px",
          borderLeft: "21px solid white",
          borderLeftColor: activeColor,
        },
        "&:before": {
          borderLeftColor: "white",
        },
      };
    }
  }
);

const StatusItem = (props: { status: statusType, updateStatus: (status: statusType) => any }) => {
  const { status, updateStatus } = props;
  const changeStatus:(status: statusType) => any = (status: statusType) => updateStatus(status);
  return (
    <div
      style={{
        margin: "0 0 16px",
        height: "60px",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "72%",
          marginRight: "16px",
          flexShrink: "inherit",
        }}
      >
        {statusArray.map((x: statusType, index: number) => <StatusContainer key={index} onClick={() => changeStatus(x)} active={status === x} activeColor="#3db2cc" > {x} </StatusContainer>)}
      </div>
    </div>
  );
};

export { StatusItem };
