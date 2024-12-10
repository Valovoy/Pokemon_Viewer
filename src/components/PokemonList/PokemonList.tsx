import { useEffect, useState } from 'react'
import { List, arrayMove } from 'react-movable'
import { useGetPokemonListQuery } from '../../api/pokemonApi'
import { IPokemonListItem } from '../../types/PokemonTypes'
import { HandleIcon } from '../../ui/HandleIcon'
import styles from './PokemonList.module.css'

interface IProps {
  onSelect: (name: string) => void
}

const PokemonList = ({ onSelect }: IProps) => {
  const { data, isLoading } = useGetPokemonListQuery()

  const [pokemonList, setPokemonList] = useState<IPokemonListItem[]>([])

  const handleReorder = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number
    newIndex: number
  }) => {
    setPokemonList(prev => arrayMove(prev, oldIndex, newIndex))
  }

  useEffect(() => {
    if (data) setPokemonList(data)
  }, [data])

  if (isLoading) return <div>Loading...</div>

  return (
    <List
      values={pokemonList}
      onChange={handleReorder}
      renderList={({ children, props }) => (
        <ul {...props} className={styles.list}>
          {children}
        </ul>
      )}
      renderItem={({ value: pokemon, props }) => (
        <li
          {...props}
          key={pokemon.id}
          className={styles.itemContainer}
          onClick={() => onSelect(pokemon.name)}
        >
          {pokemon.name}
          <button
            data-movable-handle
            className={styles.sortButton}
            tabIndex={-1}
          >
            <HandleIcon />
          </button>
        </li>
      )}
    />
  )
}

export default PokemonList
