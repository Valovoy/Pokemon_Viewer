import { useGetPokemonDetailsQuery } from '../../api/pokemonApi'

interface IProps {
  name: string
}

const PokemonDetails = ({ name }: IProps) => {
  const { data, isLoading } = useGetPokemonDetailsQuery(name)

  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>No details available</div>

  return (
    <>
      <img src={data.photo} alt={data.name} />
      <h1>{data.name}</h1>
      <h2>Abilities:</h2>
      <ul>
        {data.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
      <h2>Other Stats:</h2>
      <ul>
        <li>Base Experience: {data.base_experience}</li>
        <li>Height: {data.height}</li>
        <li>Weight: {data.weight}</li>
      </ul>
    </>
  )
}
export default PokemonDetails
