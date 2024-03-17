import { useEffect, useState } from "react";
import "../../Style/Button.css";
import Apartment from "./Apartment";
import { useLoaderData } from "react-router-dom";
import Pagination from "./Pagination";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Apartments = () => {
  const { count } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    axiosPublic.get("/apartments").then((res) => setApartments(res.data));
  }, []);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = apartments.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-white pb-16">
      <div className="bg-yellow-300 h-40">
        <h2 className="text-6xl font-DM text-center pt-10 text-black ">
          All Apartments
        </h2>
      </div>
      <div className="max-w-6xl mx-auto mt-14">
        <div className="grid grid-cols-3 gap-10">
          {currentPosts.map((apartment) => (
            <Apartment key={apartment._id} apartment={apartment}></Apartment>
          ))}
        </div>
        <div>
          <Pagination
            totalPosts={apartments.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Apartments;
