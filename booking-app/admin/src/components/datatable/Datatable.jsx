import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import * as React from 'react';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div className="deleteButton">Xoá</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm người dùng mớ
        <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
          Thêm mới
        </Link>
      </div>
   <DataGrid
    rows={userRows}
    columns={userColumns.concat(actionColumn)}
    pageSize={9}
    rowsPerPageOptions={[9]}
    checkboxSelection
    />
    </div>
  )
}

export default Datatable