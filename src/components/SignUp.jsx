import { useState } from "react";
// import { useNavigate } from "react-router";
import axios from 'axios'
import '../Style/SignUp.css'
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
const url='https://profiledb1.onrender.com'

const SignUp = () => {

    let [email, SetEmail] = useState("")
    let [password, SetPassword] = useState("")
    let [name, SetName] = useState("")
    let [confirm, SetConfirm] = useState("")

    // let navigate=useNavigate()


    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { email, name, password, confirm }

        if (name && email && (password === confirm)) {


            axios.post(`${url}/signup`, data)

                .then((res) => {
                    alert(res.data.message)
                    // navigate('/')
                })
        } else {
            alert('invalid credentials')
        }
    }


    return (
        <div className="signUp">
            <form action="">
                <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => SetName(e.target.value)} />
                <input type="email" placeholder="EMAIL" name="email" value={email} onChange={(e) => SetEmail(e.target.value)} />
                <input type="password" placeholder="password" name="password" value={password} onChange={(e) => SetPassword(e.target.value)} />
                <input type="password" placeholder="Confirm password" name="confirmPassword" value={confirm} onChange={(e) => SetConfirm(e.target.value)} />

                <div>
                    <Button onClick={handleSubmit}>signUp</Button>
                    <p>already a user ?</p>
                    <Link to='/'><Button>Login</Button></Link>
                </div>

            </form>
        </div>
    );
}

export default SignUp;