import { useGetPokemonByNameQuery } from "./store/rtkQuery";

const Counter2 = () => {
  const { data, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  if (isLoading)
    return (
      <>
        <h1>Counter 2</h1>
        <h2>Loading</h2>
      </>
    );

  if (data) {
    return (
      <>
        <h1>Counter 2</h1>
        <h2>{data.name}</h2>
      </>
    );
  }
};

export default Counter2;
