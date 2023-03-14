import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Pokemon = ({data}) => {
  console.log(data)

  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>{data.name} number #{data.id}</h1>
      <Image alt = 'none' src={data.sprites.front_default} width={400} height={400} />
    </div>
  )
}

export default Pokemon

export const getStaticProps = async ({params}) => { //params es la ruta
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await response.json()

  return {props:{ data}}
}

export const getStaticPaths = async () => {
  const paths = [
    { params: {id: '1' } },
    { params: {id: '2' } },
  ]
  return {
    paths,
    fallback: 'blocking',
  }
}

// export const getServerSideProps = async ({params}) => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//   const data = await response.json()

//   return {props:{ data}}
// }