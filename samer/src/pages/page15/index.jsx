import Axios from 'axios';
import React from 'react';
import useSWR from 'swr';
const App = () => {
  const fetcher = url => Axios(url);
  const { data, isValidating, error } = useSWR('https://randomuser.me/api/', fetcher);
  console.log(isValidating);
  console.log(data?.data.results[0].email)

  return (
    <div>
      {isValidating ? 'loading' : ''}
      {data?.data.results[0].email}
    </div>
  )
}

export default App;