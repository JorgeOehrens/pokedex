import Image from "next/image";
import { GetServerSideProps } from "next";

type Pokemon = {
  name: string;
  sprite: string;
  types: string[];
};

type Props = {
  pokemon: Pokemon;
};

export default function Home({ pokemon }: Props) {
  return (
    <main className="flex flex-row min-h-screen items-center justify-between p-24">
      <div className="basis-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full"
            src={pokemon.sprite}
            alt={pokemon.name}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {pokemon.name}
          </h5>
          <div className="flex mt-4 md:mt-6">
            {pokemon.types.map((type, index) => (
              <a
                key={index}
                href="#"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center ${
                  index === 0
                    ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    : "text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                }`}
              >
                {type}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/venusaur');
    const data = await res.json();

    if (!data || !data.name || !data.sprites || !data.sprites.front_default || !data.types) {
      throw new Error('Datos incompletos de la API');
    }

    const pokemon: Pokemon = {
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map((type: any) => type.type.name),
    };

    return {
      props: {
        pokemon,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        pokemon: null,
      },
    };
  }
};
