export const userColumns = [
  {
    field: "user",
    headerName: "User",
    width: 80,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.Img || "/avatar_icon.jpg"} alt="img" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "Lastname",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "Firstname",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "Email",
    headerName: "Email",
    width: 180,
  },
  {
    field: "Country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "Phone",
    headerName: "Phone",
    width: 100,
  },
];

export const realEstateColumns = [
  {field: "_id", headerName: "ID", width: 70},
  {
    field: "Name", 
    headerName: "Name", 
    width: 200
  },
  {
    field: "Type", 
    headerName: "Type", 
    width: 100
  },
  {
    field: "City", 
    headerName: "City", 
    width: 100
  },
  {
    field: "Address", 
    headerName: "Adresss", 
    width: 200
  },
  {
    field: "Title", 
    headerName: "Title", 
    width: 100
  },
]

export const roomColumns = [
  {field: "_id", headerName: "ID", width: 70},
  {
    field: "Title", 
    headerName: "Title", 
    width: 100
  },
  {
    field: "Desc", 
    headerName: "Description", 
    width: 250
  },
  {
    field: "Price", 
    headerName: "Price", 
    width: 100
  }
]