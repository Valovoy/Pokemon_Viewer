import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  IPokemon,
  IPokemonApiResponse,
  IPokemonListItem,
} from '../types/PokemonTypes'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_ENTRY_POINT }),
  endpoints: builder => ({
    getPokemonList: builder.query<IPokemonListItem[], void>({
      query: () => 'pokemon',
      transformResponse: (response: { results: IPokemonListItem[] }) =>
        response.results.map(item => ({
          ...item,
          id: crypto.randomUUID(),
        })),
    }),
    getPokemonDetails: builder.query<IPokemon, string>({
      query: (name: string) => `pokemon/${name}`,
      transformResponse: (response: IPokemonApiResponse): IPokemon => ({
        name: response.name,
        weight: response.weight,
        height: response.height,
        base_experience: response.base_experience,
        photo: response.sprites.front_default,
        abilities: response.abilities.map(item => item.ability.name),
      }),
    }),
  }),
})

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi
