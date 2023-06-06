import React, { useEffect, useState } from 'react'

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserList(data);
    }

        useEffect(() => {
            fetchUserData();
        }, []);
        
   
  return (
    <div>

    
    <h1 className='text-center display-4'>ManageUser</h1>
    <hr/>
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {
                userList.map( (user) => ( 
                <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                </tr> ) )
            }
        </tbody>
    </table>
    </div>
  )
}

export default ManageUser