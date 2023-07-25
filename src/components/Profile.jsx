import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const url = 'https://profiledb2.onrender.com'

const Profile = () => {

    let [val, SetVal] = useState([])
    let params = useParams()



    useEffect(() => {
        let fetchData = async () => {

            try {
                let res = await axios.get(`${url}/next-work/${params.id}`)
                SetVal(res.data)
                console.log(res.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()

    }, [])


    return (



        <div align='center' style={{margin:'150px 500px'}}>

            <div  className="bg-white p-3" style={{boxShadow:'-5px 5px 25px white',borderRadius:'10px'}}>
                <h1><u>Work-profile</u></h1>
                <h5>NAME: {val.name}</h5>
                <h5>Business: {val.Business}</h5>
                <h5>lOCATION: {val.location}</h5>
                <h5>ADDRESS: {val.address}</h5>
                <Link to='/home'> <Button>Back-to-Home</Button></Link>
            </div>

           

        </div>
    );
}

export default Profile;