import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import '../Style/Home.css'
const url='https://profiledb1.onrender.com'



const Home = ({ search }) => {

    let [post, setPost] = useState([])


    useEffect(() => {

        let fetchData = async () => {
            try {

                let res = await axios.get(`${url}/list`)
                let data = res.data
                setPost(data)

            } catch (error) {
                console.log(error);
            }

        }
        fetchData()
    }, [])


    let handleDelete = async (_id) => {
        try {
            await axios.delete(`${url}/list/${_id}`);
            setPost((prevPosts) => prevPosts.filter((post) => post._id !== _id));
        } catch (error) {
            console.log(error);
        }
    };

    let setToLocalStorage = (_id, photo, photo2, name, contact, email, address, Business, location) => {
        localStorage.setItem("_id", _id)
        localStorage.setItem("photo", photo)
        localStorage.setItem("photo2", photo2)
        localStorage.setItem("name", name)
        localStorage.setItem("contact", contact)
        localStorage.setItem("email", email)
        localStorage.setItem("address", address)
        localStorage.setItem("Business", Business)
        localStorage.setItem("location", location)

    }

    let setToLocalStorage2 = (_id, name, address, Business, location) => {
        localStorage.setItem("_id", _id)
        localStorage.setItem("name", name)
        localStorage.setItem("address", address)
        localStorage.setItem("Business", Business)
        localStorage.setItem("location", location)

    }

    let filterData = post.filter((data) =>

        data.name.toLowerCase().includes(search.toLowerCase())
    )

    return (

        <div className="home" style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '50px' }} >

            {filterData.map(val => (

                <div class="card" className="list" style={{ width: '18rem' }}>
                    <Link to={`/home/list/${val._id}`}>     <img height='200px' width='200px' src={val.photo} class="card-img-top" alt="..." /> </Link>
                    <div class="card-body m-3">
                        <h5 class="card-title">NAME: {val.name} <p></p> </h5>
                        <h5 class="card-text">PHONE: {val.contact} <p></p> </h5>
                        <h5 class="card-text">ROLE: {val.Business} <p></p> </h5>


                        <Link to='/home/update'>  <button className="bt2" onClick={() => setToLocalStorage(
                            val._id,
                            val.photo,
                            val.photo2,
                            val.name,
                            val.contact,
                            val.email,
                            val.address,
                            val.Business,
                            val.location,

                        )}>Update</button></Link>

                        <Link to='/home/transfer'> <button className="bt3" onClick={() => setToLocalStorage2(
                            val._id,
                            val.name,
                            val.address,
                            val.Business,
                            val.location,

                        )}>Transfer</button> </Link>

                        <button className="bt4" onClick={() => handleDelete(val._id)}>Delete</button>


                    </div>
                </div>

            ))}
        </div>
    );
}

export default Home;