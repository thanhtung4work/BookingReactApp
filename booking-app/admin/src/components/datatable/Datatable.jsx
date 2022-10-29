import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import * as React from 'react';
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Datatable = ({columns}) => {
  
  const [list, setList] = useState();
  const {data, loading, error} = useFetch("/user");

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = (id) => {

  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Xoá</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm người dùng mới
        <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={list}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  )
}

export default Datatable