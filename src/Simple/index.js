import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function Exmaple() {
  const { isLoading, error, data, isFetching } = useQuery('repoData', () => 
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  )
  
  if (isLoading) return 'loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.description}</h1>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "fetching..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}