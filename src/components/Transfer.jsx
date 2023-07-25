import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import '../Style/Transfer.css'
import Button from "react-bootstrap/esm/Button";
const url='https://profiledb2.onrender.com'


const Transfer = () => {


    let [_id, Set_id] = useState("")
    let [name, setName] = useState("")
    let [address, setAddress] = useState("")
    let [Business, setBusiness] = useState("")
    let [location, setLocation] = useState("")

    let navigate = useNavigate()

    useEffect(() => {
        Set_id(localStorage.getItem("_id"))
        setName(localStorage.getItem("name"))
        setAddress(localStorage.getItem("address"))
        setBusiness(localStorage.getItem("Business"))
        setLocation(localStorage.getItem("location"))
    }, [])

    let handleTransfer = async (e) => {
        e.preventDefault()
        let updateData = { name, address, Business, location, _id }

        try {

            fetch(`${url}/next-work`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData)
            })

            alert('posted')
            navigate('/home')
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div className="product3">

            <form action="">
                <input type="text" placeholder="_id" name="_id" value={_id} onChange={(e) => Set_id(e.target.value)} /> <br />
                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="text" placeholder="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />  <br />
                <input type="text" placeholder="Business" name="Business" value={Business} onChange={(e) => setBusiness(e.target.value)} /> <br />
                <input type="text" placeholder="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} /> <br />


                <Button className="btn1" onClick={handleTransfer}>Transfer</Button>

            </form>


       
        </div>
    );
  
}

export default Transfer;