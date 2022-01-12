import { useQuery } from "react-query";

const randomUserQuery = () => {
  const id = ['rduser', {name: 'dao'}];
  const info = useQuery(id, fetcher, {staleTime: 0});
  return {
    info,
  }
}
