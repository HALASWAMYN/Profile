import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
import '../Style/SingleProfile.css'
const url='https://profiledb1.onrender.com'


const SingleProfile = () => {

    let [posts, setPosts] = useState([])
    let params = useParams()

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get(`${url}/list/${params.id}`)
            setPosts(res.data)

        }
        fetchData()
    }, [posts])



    return (
        <div className="list2" >
            <div style={{ display: 'flex' }}>
                <div>
                    <img height={'260px'} width={'250px'} src={posts.photo2} alt="" />
                </div>
                <div style={{marginLeft:'20px'}}>
                    <p>NAME: {posts.name}</p>
                    <p>PHONE: {posts.contact}</p>
                    <p>EMAIL: {posts.email}</p>
                    <p>Business: {posts.Business}</p>
                    <p>lOCATION: {posts.location}</p>
                    <p>ADDRESS: {posts.address}</p>
                </div>
            </div>
            <Link  to='/home'> <Button>Back-to-Home</Button></Link>
            <Link  to={`/home/profile/${posts._id}`} ><Button>Work-Profile</Button></Link>
    
        </div>

    );
}

export default SingleProfile;