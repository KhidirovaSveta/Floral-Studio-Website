import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./index.scss"
import { Link } from 'react-router-dom';
const FlowersCard = ({wishlist, setWishlist}) => {
    const [flower, setFlower] = useState([])
    const [toggle, setToggle] = useState(true)
    
    useEffect(() => {
     axios.get(`http://localhost:8080/`).then((data) => setFlower(data.data))
    }, [])
    


    const handleSearch = (value) => {
      axios.get(`http://localhost:8080/`).then((data) => {
        let searchByName = data.data.filter((flower) => flower.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        setFlower(searchByName)
      })

    }

    const handleSort = () => {
     setToggle(!toggle)
     if(toggle) {
      let sortByPrice = flower.sort((a, b) => a.price - b.price)
      setFlower([...sortByPrice])
     }else{
      axios.get(`http://localhost:8080/`).then((data) => setFlower(data.data))
     }
    }

    const handleDelete = (_id) => {
      axios.delete(`http://localhost:8080/${_id}`).then((data) => axios.get(`http://localhost:8080/`).then((data) => setFlower(data.data)))
    }

    const handleWishlish = (el) => {
      if(!wishlist.find((e) => e._id === el._id)){
        setWishlist([...wishlist, el])
      }else{
        alert("Alreade exist")
      }
    }

  return (
    <div id='FlowersCard'>
      <div className="search-and-sort">
        <input type="text" placeholder='Search' className='search'  onChange={(e) => handleSearch(e.target.value)}/>
      <button onClick={() => handleSort()} className="sortBtn"> Sort by price </button>
      </div>
        <div className="container">
            <div className="flowCards">
                {flower.map((flower) => {
                    return(
                     <div className="flowCard">
                      <Link to={`/detail/${flower._id}`}>
                       <img src={flower.img} alt="" />
                      </Link>
                       <div className="card-Text">
                        <h3 className='flow-name'>{flower.name}</h3>
                        <p>${flower.price}</p>
                        <button className='deleteBtn' onClick={() => handleDelete(flower._id)}> <i className="fa-solid fa-trash "></i> </button>
                        <button className={(wishlist.find((e) => e._id === flower._id)) ? "add" : "notadd"} onClick={() => handleWishlish(flower)}> <i class="fa-solid fa-heart"></i></button>
                       </div>
                     </div>

                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default FlowersCard