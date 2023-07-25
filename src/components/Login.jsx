import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import '../Style/Login.css'
import Button from "react-bootstrap/esm/Button"
const url='https://profiledb1.onrender.com'


const Login = () => {

    let [email, SetEmail] = useState("")
    let [password, SetPassword] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        let data = { email, password }
        axios.post(`${url}/login`, data)
            .then((res) => {
                if (res.data.message == 'login successfully') {
                    alert(res.data.message)
                    navigate('/home/')
                } else {
                    alert(res.data.message)
                }
            })
    }

    return (
        <div className="login">
            <form action="" >
                <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)} name="email" placeholder="Email" />  <br /> 
                <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} name="password" placeholder="password" /> <br /> 
                <Button class='btn btn-secondary' onClick={handleSubmit}>login</Button> <br /> 
            </form>
            <p>Are you a new User ?</p>

            <Link to='/signUp' ><Button>signUp</Button></Link>

        </div>
    );
}

export default Login;