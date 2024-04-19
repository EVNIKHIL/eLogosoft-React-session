import { useGetPokemonByNameQuery } from "./store/rtkQuery";

const Counter = () => {
  const { data, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  console.log(data);

  if (isLoading)
    return (
      <>
        <h1>Counter 1</h1>
        <h2>Loading</h2>
      </>
    );

  if (data) {
    return (
      <>
        <h1>Counter 1</h1>
        <h2>{data.name}</h2>
      </>
    );
  }
};

export default Counter;
