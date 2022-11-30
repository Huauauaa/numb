import { InMemoryCache, makeVar } from '@apollo/client'
import { nanoid } from 'nanoid'
import seeds from './seed.json'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      words: {
        read() {
          return wordsVar()
        },
      },
      fields: {
        filterWords: {
          read(_, { variables }) {
            console.log({ variables }, wordsVar())
            return wordsVar()
          },
        },
      },
    },
  },
})

const initialWords = seeds.map((item) => ({ ...item, id: nanoid() }))

export const wordsVar = makeVar(initialWords)
