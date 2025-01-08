"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePokemon() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      const response = await axios.get('https://dummyapi.online/api/pokemon');
      await delay(500);
      const data = response.data;
      setPokemons(data);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading };
}