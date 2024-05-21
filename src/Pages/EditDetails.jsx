import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditDetails = ({ id }) => {
  const navigate = useNavigate(); // used for navigation purpose whereever required
  // initially the values need to be empty
  const [editdata, setEditData] = useState({
    id: "",
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
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);
  //The data which need to be edited is  fetched  inside use effect hook using the id of the data
  const fetchData = async () => {
    await axios
      .get(` https://664cc7edede9a2b5565199e6.mockapi.io/api/personData/${id}`)
      .then((result) => setEditData(result.data))
      .catch((error) => console.log(error));
  };
  //on changing each values in the displayed input field it will call the respective functions handleChange,handleDeepChangeand handleDeepestChange
  //Three separate functions is written to handle the nested state object

  // on the below three functions the edited data is set using the usestate hook
  // ,where the the previous state is updated with the current value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleDeepChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      company: {
        ...preData.company,
        [name]: value,
      },
    }));
  };

  const handleDeepestChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,

      address: {
        ...preData.address,
        [name]: value,
      },
    }));
  };

  //once the form is submitted the edited datas will be change in the the existing api data using put operation

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://664cc7edede9a2b5565199e6.mockapi.io/api/personData/${id}`,
        editdata
      )
      .then((result) => {
        
        result.data;
      })
      .catch((error) => console.log(error));
    navigate("/persondetails");
  };
  //   the datas which need to be edited is displayed inside the form input field where we can also edit,
  //    on changing the values the respective functions of the input field is called
  return (
    <div>
      <h3 className="text-center editform">EDIT FORM</h3>
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
                value={editdata.username}
                onChange={handleChange}
              />

              <label>Name</label>
              <input
                type="text"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                name="name"
                value={editdata.name}
                onChange={handleChange}
              />

              <label>Email Id</label>
              <input
                type="text"
                name="email"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle "
                value={editdata.email}
                onChange={handleChange}
              />

              <label>Phone </label>
              <input
                type="text"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                name="phone"
                value={editdata.phone}
                onChange={handleChange}
              />

              <label>Website </label>
              <input
                type="text"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                name="website"
                value={editdata.website}
                onChange={handleChange}
              />

              <label>Company Name</label>
              <input
                type="text"
                name="name"
                className="col-12 text-center mb-3 p-1 border-dark-subtle"
                value={editdata.company.name}
                onChange={handleDeepChange}
              />

              <br />

              <label>Company bs</label>
              <input
                type="text"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                name="bs"
                value={editdata.company.bs}
                onChange={handleDeepChange}
              />

              <label>Company Catch Pharse</label>
              <input
                type="text"
                name="catchPhrase"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                value={editdata.company.catchPhrase}
                onChange={handleDeepChange}
              />

              <label>Street Name</label>
              <input
                type="text"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                name="street"
                value={editdata.address.street}
                onChange={handleDeepestChange}
              />

              <label>City Name</label>
              <input
                type="text"
                name="city"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle "
                value={editdata.address.city}
                onChange={handleDeepestChange}
              />

              <div>
                <br />
                <button
                  className="btn btn-success col-sm-3 col-md-3 ms-auto me-auto col-lg-1 "
                  type="submit"
                >
                  update
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

export default EditDetails;
