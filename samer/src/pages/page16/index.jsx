import Axios from 'axios';
import React from 'react';
import { useQuery } from "react-query";

const App = () => {
  const fetcher = (prop) => {
    console.log(prop)
    return Axios('https://randomuser.me/api/')
  };
  const info = useQuery(['rduser', {name: 'dao'}], fetcher, {staleTime: 0});

  console.log(info)
  console.log(info.status)

  return (
    <div>
      {info.data?.data.results[0].email}
    </div>
  )
}

export default App;
