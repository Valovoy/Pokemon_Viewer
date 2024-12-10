import { useState } from 'react'
import PokemonDetails from '../PokemonDetails/PokemonDetails'
import PokemonList from '../PokemonList/PokemonList'
import styles from './Pokemon.module.css'

const Pokemon = () => {
	const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.list}>
					<PokemonList onSelect={setSelectedPokemon} />
				</div>
				<div className={styles.info}>
					{selectedPokemon && <PokemonDetails name={selectedPokemon} />}
				</div>
			</div>
		</div>
	)
}

export default Pokemon
