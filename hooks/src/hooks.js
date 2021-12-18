import { useState, useEffect, useCallback } from 'react';

export const useWinResize = () => {
  const de = document.documentElement;
  const [size, setSize] = useState({
    width: de.clientWidth,
    height: de.clientHeight,
  });
  const resize = useCallback(() => {
    setSize({
      width: de.clientWidth,
      height: de.clientHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  return size;
};

export const useParams = () => {
  const paramsArray = window.location.search.substr(1).split('&');
  const paramsObj = {};
  let i;
  paramsArray.forEach((item) => {
    i = item.indexOf('=');
    paramsObj[item.slice(0, i)] = item.slice(i + 1);
  });
  return paramsObj;
};

// export const useGetUser = () => {
//   await fetch('https://randomuser.me/api/').then((res) => res.json())
//   // console.log(result)
//   return result
// };

export function useGetUser(){
  const [datas,setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://randomuser.me/api/').then((res) => res.json())
      setDatas(result.results)
    }
    fetchData();
  },[])
  return datas
}
