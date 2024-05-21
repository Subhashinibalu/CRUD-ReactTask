import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPerson = () => {
    const navigate = useNavigate()

    //The input data fileds where we gonna enter our new datas need to empty initially
    const [addData, setAddData] = useState({
        id:"" ,
        name: "",
username: "",
email: "",
address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
        lat: "",
        lng: ""
        }
    },
phone: "",
website: "",
company: {
    name: "",
    catchPhrase: "",
    bs: ""
}
    })


    const handleChange = (e)=>{
        const {name,value}=e.target
        setAddData((preData)=>({
                ...preData,
                [name]:value,
                
                      
                    
                
            
        }))
    }
  
    const handleDeepChange = (e)=>{
        const {name,value}=e.target
        setAddData((preData)=>({
        ...preData,        
                company:{
                   ...preData.company, [name]:value
                },
        
                    
               
            
        }))
    }
    const handleDeepestChange = (e)=>{
        const {name,value}=e.target
        setAddData((preData)=>({
        ...preData,        
            
                    
                address:{
                    ...preData.address,[name]:value
                }
            
        }))
    }
   
   
//once the form is submitted the new datas will be added to the api data using post operation
    const handleSubmit= async(e)=>{
        e.preventDefault()
        await axios.post(`https://664cc7edede9a2b5565199e6.mockapi.io/api/personData`,addData)
        .then(result=>{
          
            result.data})
        .catch(error=>console.log(error))
        navigate("/persondetails");
        
    

    }
 //The input field where the newdata need to be entered  is placed inside the form, 
 //on enetering the new data , it will call the respective function as mentioned in the input filed
    return (
        
        <div>
        <h3 className="text-center editform ">ADD NEW PERSON DETAILS </h3>
        <br />
        <div className="container text-center  ">
          <div className="row  ">
            <form onSubmit={handleSubmit}>
              <div className="row ms-auto me-auto">
                <label>UserName</label>
                <input
                  type="text"
                  className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                  name="username"
                  placeholder='Enter the username'
                  value={addData.username}
                  onChange={handleChange}
                  required
                />
  
                <label>Name</label>
                <input
                  type="text"
                  className="col-12 text-center mb-3 p-1 border-dark-subtle"
                  name="name"
                  placeholder='Enter the Person Name'
                  value={addData.name}
                  onChange={handleChange}
                  required
                />
  
                <label>Email Id</label>
                <input
                  type="text"
                  name="email"
                  placeholder='Enter the Email address'
                  className="col-12 text-center  mb-3 p-1 border-dark-subtle "
                  value={addData.email}
                  onChange={handleChange}
                  required
                />
  
                <label>Phone </label>
                <input
                  type="text"
                  className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                  name="phone"
                  placeholder='Enter the Mobile Number '
                  value={addData.phone}
                  onChange={handleChange}
                  required
                />
  
                <label>Website </label>
                <input
                  type="text"
                  className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                  name="website"
                  placeholder='Enter the Website Address'
                  value={addData.website}
                  onChange={handleChange}
                  required
                />
  
                <label>Company Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder='Enter the Company Name'
                  className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                  value={addData.company.name}
                  onChange={handleDeepChange}
                  required
                />
  
                <br />
  
                <label>Company bs</label>
                <input
                  type="text"
                  className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                  name="bs"
                  placeholder='Enter the Company bs'
                  value={addData.company.bs}
                  onChange={handleDeepChange}
                  required
                />
  
                <label>Company Catch Pharse</label>
                <input
                  type="text"
                  name="catchPhrase"
                  placeholder='Enter the Company Catch Phrase'
                  className="col-12 text-center mb-3 p-1 border-dark-subtle"
                  value={addData.company.catchPhrase}
                  onChange={handleDeepChange}
                  required
                />
  
                <label>Street Name</label>
                <input
                  type="text"
                  className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                  name="street"
                  placeholder='Enter the Street Name'
                  value={addData.address.street}
                  onChange={handleDeepestChange}
                  required
                />
  
                <label>City Name</label>
                <input
                  type="text"
                  name="city"
                  placeholder='Enter the City Name'
                  className="col-12 text-center  mb-3 p-1 border-dark-subtle "
                  value={addData.address.city}
                  onChange={handleDeepestChange}
                  required
                />
  
                <div>
                  <br />
                  <button
                    className="btn btn-success col-sm-3 col-md-3 ms-auto me-auto col-lg-1 "
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
      </div>
    );
};

export default AddPerson;