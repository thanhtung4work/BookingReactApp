export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 100,
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "country",
      headerName: "Country",
      width: 100
    },
  ];
  