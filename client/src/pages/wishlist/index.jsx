import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Wishlist = ({ wishlist, setWishlist }) => {
  const navigate = useNavigate();
  const handleDelete = (_id) => {
    let deleted = wishlist.filter((del) => del._id !== _id);
    setWishlist(deleted);
  };
  const handleRemoweAll = () => {
    setWishlist([]);
    navigate("/")
  };

  return (
    <div>
      <div className="container">
        <div className="allwish">
          {wishlist.map((wish) => {
            return (
              <div className="wishlist">
                <img src={wish.img} alt="" width={"310px"} />
                <div className="info">
                  <h2>{wish.name}</h2>
                  <button
                    onClick={() => handleDelete(wish._id)}
                    className="removeBtn"
                  >
                    {" "}
                    Remove{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={() => handleRemoweAll()} className="removeAllBtn">
          {" "}
          Remove All
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
