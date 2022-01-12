import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const GetInfo = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
       axios.get(url).then((response) => {
        setData(response.data); 
       })
       .catch((err) => {
           setError(err);
       })
       .finally(() => {
           setLoading(false);
       }); 
    }, [url]);

    return { data, loading, error }
}

export default GetInfo;