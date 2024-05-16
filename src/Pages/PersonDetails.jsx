import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonDetails = ({ setId }) => {
  const [deleteData, setDeleteData] = useState([]);

  const [details, setDetails] = useState([]);

  const navigate = useNavigate(); //for navigation purpose
  // fetching the data inside useEffect hook
  useEffect(() => {
    fetchData(); //function call for fetching data
  }, [deleteData]);
  //to re-render the page after deleting deledata is given inside this dependency array

  //function for fetching data
  const fetchData = async () => {
    await axios
      .get("https://66432c6f3c01a059ea21d019.mockapi.io/api/personData")
      .then((result) => setDetails(result.data))
      .catch((error) => console.log(error));
  };
  //This function is written for edit button. 
  //This function set the id of which data need to be edited and navigated to the edit page to edit that data(which has the passed id)
  const handleEdit = (id) => {
    setId(id);
    navigate(`/editdetails/:${id}`);
  };

  //This is the function written for delete button , 
  //its function is deleting the particular data using the id value
  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://66432c6f3c01a059ea21d019.mockapi.io/api/personData/${id}`
      )
      .then((result) => setDeleteData(result.data))
      .catch((error) => console.log(error));
  };

  // the return part contains card to display all the api data which is achieved using map. 
  return (
    <div>
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-xl-4 row-cols-md-2 row-cols-1 d-flex justify-content-center align-items-center mt-5">
          {details.map((element, index) => {
            return (
              <div key={index}>
                <div
                  className="card  mt-3 ms-auto me-auto"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.GWzzRFdPbYo9J7vr2arBrgHaHa&pid=Api&P=0&h=180"
                    className="card-img-top"
                    alt={element.name}
                    style={{ width: "18rem", height: "11rem" }}
                  />
                  <div className="card-body">
                    <span className="card-title fw-bold mb-3 fs-6">
                      {element.name} (Id:{element.id})
                    </span>
                    <hr />
                    <p className="text-center workdetail ">
                      WORK DETAILS <i className="bi bi-laptop"></i>
                    </p>
                    <p className="small ">
                      {element.name} with <b>username {element.username}</b> is working
                      in the company named{" "}
                      <span className="company fw-bold ">
                        {element.company.name} 
                      </span>
                      , which has a catchphrase {" "}
                      <i className="workdetail">
                        {element.company.catchPhrase}{" "}
                      </i>
                      and bs: <i>{element.company.bs}</i> .
                    </p>

                    <hr />
                    <p className="contact">
                      <span className="bolder">
                        {" "}
                        <i className="bi bi-house"></i> :{" "}
                      </span>{" "}
                      <span className="small  ">
                        {" "}
                        {element.address.street}, {element.address.city}
                      </span>{" "}
                    </p>
                    <p className="contact">
                      <span className="bolder">
                        {" "}
                        <i className="bi bi-telephone"></i> :{" "}
                      </span>{" "}
                      <span className="small  "> {element.phone}</span>{" "}
                    </p>
                    <p className="contact">
                      <span className="bolder ">
                        <i className="bi bi-envelope"></i> :{" "}
                      </span>{" "}
                      <span className="small  "> {element.email}</span>{" "}
                    </p>
                    <p className="contact">
                      <span className="bolder ">
                        <i className="bi bi-globe2"></i> :{" "}
                      </span>{" "}
                      <span className="small "> {element.website}</span>{" "}
                    </p>
                    <hr />
                  </div>
                  <div className="d-flex justify-content-between ms-3 me-3 mb-4 cardend small ">
                    {/* 
    onclicking the edit button handleEdit function is called and id is passed as parameter to achieve the required action */}
                    <button
                      className="btn edit"
                      onClick={() => handleEdit(element.id)}
                    >
                      Edit <i className="bi bi-pencil-square"></i>
                    </button>

                    {/* onclicking the delete button handleDelete function is called and id is passed as parameter to achieve the required action */}
                    <button
                      className="btn  delete"
                      onClick={() => {
                        handleDelete(element.id);
                      }}
                    >
                      Delete <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
