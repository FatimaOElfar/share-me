import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();
  // console.log("catID", categoryId);
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      // console.log("searchquery", query);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });

      // console.log("searchquery", query);
    } else {
      const query = feedQuery 
      // console.log("feedQu",query)
      client.fetch(feedQuery).then((data) => {
      
        // console.log("feedData", data)
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  
  if (loading) {
    return <Spinner message="We are adding new ideas to your feed!" />;
  }

  if (!pins?.length) {
    return <h2>No pins available</h2>;
  }

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
