import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import '../Style/AddProfile.css'
import Button from "react-bootstrap/esm/Button";

const AddProfile = () => {
    let [_id, set_id] = useState ("")
    let [photo, setPhoto] = useState("")
    let [photo2, setPhoto2] = useState("")
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [contact, setContact] = useState("")
    let [address, setAddress] = useState("")
    let [Business, setBusiness] = useState("")
    let [location, setLocation] = useState("")
    let [time, setTime] = useState("")
    const url='https://profiledb1.onrender.com'


    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        let data = { _id, photo, photo2, name, contact, email, address, Business, location, time }

        if (_id && photo && photo2 && name && email && contact && address
            && Business && location && time) {
            axios.post(`${url}/add-post`, data)
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
        <div className="product" >
            <form action="">
                <input type="text" placeholder="_id" name="_id" value={_id} onChange={(e) => set_id(e.target.value)} /> <br />
                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="text" placeholder="enter img1" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} /> <br />
                <input type="text" placeholder="enter img2" name="photo2" value={photo2} onChange={(e) => setPhoto2(e.target.value)} /> <br />
                <input type="tel" placeholder="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} maxLength='10' minLength='10' required/> <br />
                <input type="email" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="text" placeholder="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />  <br />
                <input type="text" placeholder="Business" name="Business" value={Business} onChange={(e) => setBusiness(e.target.value)} /> <br />
                <input type="text" placeholder="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} /> <br />
                <input type="datetime-local" name='time' value={time} onChange={(e) => setTime(e.target.value)} /> <br />

                <Button onClick={handleSubmit}>Add-Data</Button>
            </form>
        </div>
    );
}

export default AddProfile;