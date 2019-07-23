import CloudWords from './CloudWords.js'

const cities = [
  {
    name: 'Tokio',
    population: 38001000
  },
  {
    name: 'Delhi',
    population: 25703168
  },
  {
    name: 'Shangai',
    population: 23740778
  },
  {
    name: 'New York',
    population: 18593220
  },
  {
    name: 'Buenos Aires',
    population: 15180176
  },
  {
    name: 'Lagos',
    population: 13122829
  },
  {
    name: 'Moscow',
    population: 12165704
  },
  {
    name: 'Paris',
    population: 10843285
  },
  {
    name: 'Jakarta',
    population: 10323142
  },
  {
    name: 'Lima',
    population: 9897033
  },
  {
    name: 'Tehran',
    population: 8432196
  },
  {
    name: 'Madrid',
    population: 6199254
  },
  {
    name: 'Toronto',
    population: 5992739
  },
  {
    name: 'Atlanta',
    population: 5142140
  },
  {
    name: 'Sydney',
    population: 4505341
  },
  {
    name: 'Brasilia',
    population: 4155476
  },
  {
    name: 'Tel Aviv',
    population: 3608265
  },
  {
    name: 'Milan',
    population: 3098974
  }
]

ReactDOM.render(
  <div>
    <CloudWords
      height={500}
      width={500}
      words={
        cities.map(
          ({ name, population }) => ({
            text: name,
            size: (4 * population / 1000000).toFixed(1)
          })
        )
      }
    />
  </div>,
  document.getElementById('root')
)
