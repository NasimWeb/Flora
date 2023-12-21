import React, { useEffect, useState } from 'react'
import DataGrid from "../../../Components/PanelAdmin/DataGrid/DataGrid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import { MdDone } from "react-icons/md";
import { RiForbid2Line } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function Tikets() {

    const [tickets , setTickets] = useState([])

  useEffect(() => {
     fetch('https://node-flora.liara.run/v1/tickets' , {
        method : 'GET',
        headers : {
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
        }
     })
     .then(res => res.json())
     .then(allTickets => setTickets(allTickets))
  } , [])



  return (
    <>
    
    <DataGrid>
      <Grid container rowGap={2} columnGap={1} className="properties-list p-4">
        <Grid item xs={12} md={12} className="d-flex gap-3 align-items-center">
          <h4 className="pb-3">Tickets</h4>{" "}
        </Grid>
        {tickets.map((ticket) => {
          return (
            <Grid
            key={ticket._id}
              item
              xs={12}
              md={12}
              style={{ padding: "10px" }}
              className="d-flex border rounded p-4 gap-3 flex-column flex-lg-row"
             
            >
              <Grid className="d-flex flex-column" xs={12} md={4}>
                <p className="main-color fw-500 ">title</p>
                 <p className=''>{ticket.title}</p>
              </Grid>
              <Grid className="d-flex flex-column" xs={12} md={4}>
                <p className="main-color fw-500 ">user</p>
                 <p className=''>{ticket.user}</p>
              </Grid>
              <Grid className="d-flex flex-column" xs={12} md={4}>
                <p className="main-color fw-500 ">createdAt</p>
                 <p className=''>{ticket.createdAt.slice(0,10)}</p>
              </Grid>
              <Grid className="d-flex flex-column" xs={12} md={4}>
                <p className="main-color fw-500 ">updatedAt</p>
                 <p className=''>{ticket.updatedAt.slice(0,10)}</p>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </DataGrid>
    
    
    
    
    
    </>
  )
}
