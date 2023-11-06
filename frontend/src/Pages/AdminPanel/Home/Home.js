import React, { useEffect, useState } from "react";
import "./Home.css";
import DataGrid from "../../../Components/PanelAdmin/DataGrid/DataGrid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { MdDone } from "react-icons/md";
import { RiForbid2Line } from "react-icons/ri";

export default function Home() {
  const [adminName, setAdminName] = useState("");
  const [lastRegisteredUsers, setLastRegisteredUsers] = useState([]);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/infos/p-admin", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((panelAdminInfo) => {
        setAdminName(panelAdminInfo.adminName);
        setLastRegisteredUsers(panelAdminInfo.lastUsers);
        setInfos(panelAdminInfo.infos);
      });
  }, []);

  return (
    <>
      <div className="container">
        <p className="main-color" style={{ fontWeight: "700" }}>
          <span style={{ color: "#000" }}>Welcome,</span>
          {adminName}
        </p>
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex justify-content-around mb-4 flex-wrap">
              {infos.map((infobax) => {
                return (
                  <div className="box">
                    <div className="content-grid d-flex justify-content-between">
                      <div className="d-flex flex-column gap-3">
                        <p className="count-title">{infobax.title}</p>
                        <h3>
                          <span className="counter">{infobax.count}</span>{" "}
                        </h3>
                      </div>
                      <a href="#" className="notification_btn">
                        Today
                      </a>
                    </div>
                    <div className="d-flex flex-column gap-2 ">
                      <span className="tip text-end">95%</span>
                      <span className="line"></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <DataGrid>
              <Grid
                container
                rowGap={2}
                columnGap={1}
                className="properties-list p-3"
              >
                <Grid
                  item
                  xs={12}
                  md={12}
                  className="d-flex gap-3 align-items-center "
                >
                  <h4 className="pb-3">Last Users</h4>
                </Grid>
                {lastRegisteredUsers.map((user) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{ padding: "10px" }}
                      className="d-flex border rounded gap-5  p-3 flex-column flex-lg-row "
                      key={user._id}
                    >
                      <Grid
                        className="d-flex flex-column flex-wrap"
                        xs={12}
                        md={6}
                      >
                        <p className="main-color fw-500 ">UserName</p>
                        <p className="fw-500 ">{user.username}</p>
                      </Grid>
                      <Grid className="d-flex  flex-column" xs={12} md={6}>
                        <p className="main-color fw-500 flex-wrap">Email</p>
                        <p className="fw-500">{user.email}</p>
                      </Grid>
                      <Grid
                        className="d-flex flex-column flex-wrap"
                        style={{ overflow: "hidden" }}
                        xs={12}
                        md={6}
                      >
                        <p className="main-color fw-500 ">Phone</p>
                        <p className="fw-500" style={{ maxWidth: "177px" }}>
                          {user.phone}
                        </p>
                      </Grid>
                      <Grid className="d-flex flex-column" xs={12} md={4}>
                        <p className="main-color fw-500 ">Created at</p>
                        <p className="fw-500 ">{user.createdAt.slice(0, 10)}</p>
                      </Grid>
                      <Grid className="d-flex flex-column" xs={12} md={4}>
                        <p className="main-color fw-500 ">Role</p>
                        <p className="fw-500" style={{ cursor: "pointer" }}>
                          {user.role}
                        </p>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </DataGrid>
          </div>
        </div>
      </div>
    </>
  );
}
