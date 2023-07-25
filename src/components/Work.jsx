import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import '../Style/Work.css'
import Button from "react-bootstrap/esm/Button"
const url='https://profiledb2.onrender.com'


const Work = () => {
    let [designation, setDesignation] = useState("")
    let [companyName, SetCompanyName] = useState("")
    let [companyLocation, setCompanyLocation] = useState("")
    let [_id, Set_id] = useState("")



    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        let data = { designation, companyLocation, companyName, _id }


        if (designation && companyLocation && companyName && _id) {
            axios.post(`${url}/add-work`, data)

                .then((res) => {
                    alert(res.data.message)
                    navigate('/home')
                }).catch((err) => {
                    alert(err.data.message)
                })

        } else {
            alert('please fill all the data')
        }

    }

   
    return (
        <div className="product2">

            
            <form action="">
                <input type="text" placeholder="enter ubiqe _id" name="_id" value={_id} onChange={(e) => Set_id(e.target.value)}  /> <br />
                <input type="text" placeholder="designation" name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} /> <br />
                <input type="text" placeholder="companyName" name="companyName" value={companyName} onChange={(e) => SetCompanyName(e.target.value)} /> <br />
                <input type="text" placeholder="companyLocation" name="companyLocation" value={companyLocation} onChange={(e) => setCompanyLocation(e.target.value)} /> <br />

                <Button onClick={handleSubmit}>Add-Data</Button>
            </form>
        </div>
    );
}

export default Work;