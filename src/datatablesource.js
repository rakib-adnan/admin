export const userColums =[
    { field: 'id', headerName: 'ID', width: 70 },{
        field:"user", headerName: "User", width:230, renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="avatar" />
                        {params.row.username}
                </div>
            )
        },
    },
    {
        field:"email", headerName: "Email", width:230,
    },
    {
        field:"age", headerName: "Age", width:100,
    },
    {
        field:"status", headerName: "Status", width:160,
        renderCell:(params)=>{
            return(
             <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            );
        }
    }
]
export const userRows =[
    {
        id: 1,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        status: "active",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 2,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        status: "passive",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 3,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        status: "active",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 4,
        username: "johnd",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEABy10QnLp_dlJWIWx8KKu7rV9L6MBKUyeIkuGRMUqYu8VM3F_G4O0YtvXU1j4id_24&usqp=CAU",
        status: "passive",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 5,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-8-1.png",
        status: "pending",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 6,
        username: "johnd",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSQe7R-hq_QumlxnxQQ7VIGczKaR4RYqemzC_cTMrqbajp6gKZCNHwdCSQ7M20nz57oA&usqp=CAU",
        status: "active",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 7,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-9.png",
        status: "passive",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 1,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        status: "active",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 2,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        status: "passive",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 3,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        status: "active",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 4,
        username: "johnd",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEABy10QnLp_dlJWIWx8KKu7rV9L6MBKUyeIkuGRMUqYu8VM3F_G4O0YtvXU1j4id_24&usqp=CAU",
        status: "passive",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 5,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-8-1.png",
        status: "pending",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 6,
        username: "johnd",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSQe7R-hq_QumlxnxQQ7VIGczKaR4RYqemzC_cTMrqbajp6gKZCNHwdCSQ7M20nz57oA&usqp=CAU",
        status: "active",
        email: "john@gmail.com",
        age : 35
    },
    {
        id: 7,
        username: "johnd",
        img : "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-9.png",
        status: "passive",
        email: "john@gmail.com",
        age : 35
    },
    
]