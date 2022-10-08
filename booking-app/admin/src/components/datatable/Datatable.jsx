import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import * as React from 'react';
import { userColumns, userRows } from "../../datatablesource";
const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">Xem</div>
            <div className="deleteButton">Xoá</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
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