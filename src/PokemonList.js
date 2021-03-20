import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemonList }) => {
	return (
		<>
			<h1 className="title">Pokemons</h1>
			<div className="list-container">
				{pokemonList.map(({ id, name }) => (
					<Link
						key={id}
						className="list-item"
						style={{
							backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
						}}
					>
						<div className="list-item-name">{name}</div>
					</Link>
				))}
			</div>
		</>
	);
};

PokemonList.PropTypes = {
	          /* METELE SAZÓN BY TEGO CALDERON
                                      ¡Oye!
                            ¡Sandunga a la borincana!
                            ¡Pa' mis canchanchanas!
                            ¡Y pa' Republica Dominicana!
                            ¡Con Looney Tunes y Noriega!
                            ¡Mas Flow!
                            ¡Mas Flow!
                            ¡Y yo creí que ellos sabian de ti!
                            ¡Looney, nos fuimos afuego!
                            ¡Pa' to'a esas shorty's en los New Yores!
                            Oye, metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            El saborioco
                            El mahuapachoso
                            El que tiene a los guasones nerviosos
                            What you talking?
                            Mas bellaqueo que en el Lucky
                            Este caballo no corre con jockey
                            Báilalo, nena
                            Esto es cosa buena
                            Pero no me hables con la boca llena
                            Anormales, llegaron los generales
                            Por mas que trates
                            A ti no te sale
                            Yo lo que traigo es la saranana
                            El cambumbo si no empata, gana
                            Pa' que vacilen
                            Mis canchanchanas
                            Con Looney Tun-Tunes
                            Los otros maman
                            Pa' tos las shorty's en los New Yores
                            Pa' los maliantes en las prisiones
                            Metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            Dice, metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            Mami, tú sabes que yo soy el mas caracachimba
                            El feo de las nenas lindas
                            Oye metele sazón
                            Bateria y reggaeton
                            Que lo demas lo pone Calderón
                            Ese lechón
                            Quiere cojer pón
                            Con el hijue puta en el microphone
                            'Tate quieto
                            Que ahora vine a pan pillao
                            No te duermas de ese lao, mamao
                            En el mismo sandungueo yo te parto
                            Pa' que sepa que yo soy el que reparto
                            El bacalao a mi me gusta afeitao
                            Sin espinas, ya pal de veces me he ahogao'
                            Ten cuidao', este negro esta aprobao'
                            Desde que sali no he parao
                            Se han esmandao, los han abuchao
                            Y hasta con hamburgers le han tirao
                            Andan guillao'
                            Pero no han hecho un mandao
                            Tocando bravos y son dos cagaos
                            Sandunguiao'
                            Bien Abayardiao'
                            De Puerto Rico pa' to' los la'os
                            Metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            Metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            Metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            Metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            El saborioco
                            El mahuapachoso
                            El que tiene a los guasones nerviosos
                            What you talking?
                            Mas bellaqueo que en el Lucky
                            Este caballo no corre con jockey
                            Báilalo, nena
                            Esto es cosa buena
                            Pero no me hables con la boca llena
                            Anormales, llegaron los generales
                            Por mas que trates
                            A ti no te sale
                            Yo lo que traigo es la saranana
                            El cambumbo si no empata, gana
                            Pa' que vacilen
                            Mis canchanchanas
                            Con Looney Tun-Tunes
                            Los otros maman
                            Pa' tos las shorty's en los New Yores
                            Pa' los maliantes en las prisiones
                            Metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            Dice
                            Metele sazón
                            Batería y reggaeton
                            Que lo demas lo pone Calderón
                            Oye!
                            Tego Calderón!
                            El Aballarde!
                            Con Looney Tunes y Noriega!
                        Mas Flow!
                            Mas Flow!
                            Oye!
                            Asi que brega!
                            Mueve la parcela, nena!
                            Que lo que traigo es maizena!
                            Pa' tos las shorty's en los Nueva Yores!
                            De los mejores!
                            Oye!
                            El Aballarde!
                            Looney Tunes y Noriega!
                            Jeje!
                            Vamos pa' la brea!
                            Vamos pa' la brea!
                            Pa' que crea!
                            Jeje!
                            Ja!
                            Metele sazón!
                            Bateria y reggaeton!
                            Que lo demas lo pone Calderón!
                            Morón, cabrón!
                            El hijueputa en el microphone!
                            Hey!
                            Oye, Con Looney Tunes y Noriega!
                            Je!
                            Yo crei que ellos sabian...
                            Yo crei que ellos sabian, declaro...
                            Te gusta el pico
                                  */
            	pokemonList: PropTypes.array.isRequired,
};

export default PokemonList;
