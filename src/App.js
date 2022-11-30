import './App.css'
import { useQuery, gql } from '@apollo/client'
import { useState } from 'react'

const GET_WORDS = gql`
  query GetWords($keywords: Boolean) {
    filterWords(keywords: $keywords) {
      id
      abbr
      words
    }
  }
`

function App() {
  console.log('app')
  const [checked, setChecked] = useState(false)
  const {
    loading,
    error,
    data = { filterWords: [] },
  } = useQuery(GET_WORDS, {
    variables: { keywords: 't' },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const onChange = (val) => {
    setChecked(val.target.checked)
  }

  console.log(data.filterWords)

  return (
    <>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {data.filterWords.map(({ id, words }) => (
        <div key={id}>{words}</div>
      ))}
    </>
  )
}

export default App
