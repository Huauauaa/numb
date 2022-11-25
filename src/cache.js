import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar();
          },
        },
        visibilityFilter: {
          read() {
            return visibilityFilterVar();
          },
        },
      },
    },
  },
});

const todosInitialValue = [
  {
    id: 0,
    completed: true,
    text: 'Use Apollo Client 3',
  },
];

export const todosVar = makeVar(todosInitialValue);

export const visibilityFilterVar = makeVar({
  id: 'show_all',
  displayName: 'All',
});
