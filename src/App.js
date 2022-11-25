import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_TODOS = gql`
  query GetAllTodos {
    todos {
      id
      text
      completed
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.todos.map(({ id, text, completed }) => (
    <div key={id}>
      <input type="checkbox" defaultChecked={completed} />
      {text}
    </div>
  ));
}

export default App;
