import { Route, Routes } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import AddProfile from "./AddProfile";
import SingleProfile from "./SingleProfile";
import Work from "./Work";
import Transfer from "./Transfer";
import Update from "./Update";
import { useState } from "react";
import Profile  from "./Profile";


const HomePortel = () => {

    let [search,setSearch]=useState("")

    return ( 
        <div className="homeportel">

            <Navbar setSearch={setSearch}/>
            <Routes>
                <Route path="/" element={<Home search={search}  />}/>
                <Route path="/add-post" element={<AddProfile/>}/>
                <Route path="/list/:id" element={<SingleProfile/>} />
                <Route path='/add-work' element={<Work/>}/>
                <Route path="/transfer" element={<Transfer/>}/>
                <Route path="/update" element={<Update/>} /> 
                <Route path="/profile/:id" element={<Profile/>} />
               
           
              
            </Routes>
        </div>
     );
}
 
export default HomePortel;