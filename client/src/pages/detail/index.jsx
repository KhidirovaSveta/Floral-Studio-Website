import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import {Helmet} from "react-helmet";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${_id}`)
      .then((data) => setDetail(data.data));
  }, []);

  const detailDelete = (_id) => {
    axios
      .delete(`http://localhost:8080/${_id}`)
      .then((data) =>
        axios.get(`http://localhost:8080/`).then((data) => setDetail(data.data))
      );
    navigate("/");
  };
  return (
    <div id="Detail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{detail.name}</title>
      </Helmet>
      <div className="container">
        <button onClick={() => navigate(-1)} className="goBack">
          {" "}
          Go Back{" "}
        </button>
        <div className="detail">
          <img src={detail.img} width={"400px"} alt="" />

          <div className="info">
            <p>
              Name: <h1> {detail.name}</h1>
            </p>
            <p>
              Price: <h3>${detail.price}</h3>
            </p>
            <button onClick={() => detailDelete(detail._id)} className="detailDelBtn"> <i className="fa-solid fa-trash "></i>  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
