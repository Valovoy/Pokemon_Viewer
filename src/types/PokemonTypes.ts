export interface IPokemonListItem {
  id: string
  name: string
  url: string
}

export interface IPokemon {
  name: string
  photo: string
  weight: number
  height: number
  base_experience: number
  abilities: string[]
}

export interface IPokemonApiResponse {
  name: string
  weight: number
  height: number
  base_experience: number
  sprites: {
    front_default: string
  }
  abilities: {
    ability: {
      name: string
    }
  }[]
}
