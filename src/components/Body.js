import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Body = () => {

    //Local State Variable --- Super powerful variable
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

   const [searchText, setSearchText] = useState("");

   console.log("Body Rendered")

   useEffect(()=> {
    fetchData();
   }, []);

   const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9780919&lng=77.63785589999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    console.log(json,json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //Optional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

   const onlineStatus = useOnlineStatus();

   if(onlineStatus === false) 
   return (
    <h1>
        Looks like you're offline. Please check your internet connection!!
    </h1>
    );
   

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText}
                     onChange={(e)=> {
                        setSearchText(e.target.value);
                     }} />
                    <button 
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=> {
                        //Filter the restaurant cards and update the UI
                        //searchText
                        console.log(searchText)

                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={()=>{
                     const filteredList = listOfRestaurants.filter(
                      (res) => res.data.avgRating > 4);

                      setListOfRestaurants(filteredList);
                     
                    }}

                >
                    Top Rated Restaurants
                </button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                  filteredRestaurants.map((restaurant) => (
                  <Link key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard  resData={restaurant}/>
                    </Link>
                ))}
            </div>

        </div>
    )
};

export default Body;