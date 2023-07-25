import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import Button from "react-bootstrap/esm/Button"
import '../Style/Update.css'
const url='https://profiledb1.onrender.com'

const Update = () => {

    let [id, set_id] = useState(0)
    let [photo, setPhoto] = useState("")
    let [photo2, setPhoto2] = useState("")
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [contact, setContact] = useState("")
    let [address, setAddress] = useState("")
    let [Business, setBusiness] = useState("")
    let [location, setLocation] = useState("")



    let navigate = useNavigate()

    useEffect(() => {
        set_id(localStorage.getItem("_id"))
        setPhoto(localStorage.getItem("photo"))
        setPhoto2(localStorage.getItem("photo2"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
        setContact(localStorage.getItem("contact"))
        setAddress(localStorage.getItem("address"))
        setBusiness(localStorage.getItem("Business"))
        setLocation(localStorage.getItem("location"))


    }, [])

    let handleUpdate = async (e) => {
        e.preventDefault()
        let updateData = {photo, photo2, name, contact, email, address, Business, location }
        try {
            await axios.put(`${url}/list/${id}`, updateData)
            alert('updated')
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div className="product4">

            <form action="">

                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="text" placeholder="enter img1" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} /> <br />
                <input type="text" placeholder="enter img2" name="photo2" value={photo2} onChange={(e) => setPhoto2(e.target.value)} /> <br />
                <input type="number" placeholder="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} maxLength={10} minLength={10} /> <br />
                <input type="email" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="text" placeholder="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />  <br />
                <input type="text" placeholder="Business" name="Business" value={Business} onChange={(e) => setBusiness(e.target.value)} /> <br />
                <input type="text" placeholder="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} /> <br />


                <Button onClick={handleUpdate}>Update</Button>

            </form>

        </div>
    )
}

export default Update
