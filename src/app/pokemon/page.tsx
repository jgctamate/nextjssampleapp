"use client"
import React from 'react';
import styles from '../page.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Suspense } from 'react';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { usePokemon } from '../../hooks/usePokemon';

export default function Page() {
  return (
    <div>
      <main>
        <Link href="/" underline="hover">Return to Home</Link>
        <PokemonList />
      </main>
    </div>
  );
}

function PokemonList() {
  const { pokemons, loading } = usePokemon();

  if (loading) {
    return (
      <div>
        <CircularProgress />
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
      </div>
    );
  }

  return (
    <Grid container spacing={3} className={styles.pokemonGrid}>
      {pokemons.map((pokemon: any) => (
        <Grid item={true} key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
          <Card className={styles.pokemonCard}>
            <CardMedia
              component="img"
              height="140"
              image={pokemon.image_url}
              alt={pokemon.pokemon}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.pokemon}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type: {pokemon.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Abilities: {pokemon.abilities.join(', ')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hitpoints: {pokemon.hitpoints}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Evolutions: {pokemon.evolutions.join(', ')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {pokemon.location}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}