import React from 'react';
import './index.css';
import UsersList from './UsersList';
import { ContextProvider } from './themeContext'

function App() {
  const [githubUsers, setGithubUsers] = React.useState([]);
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [textValue, changeTextValue] = React.useState("");

  React.useEffect(() => {
    if (textValue !== "") {
      setIsLoading(true);
      fetch(`https://api.github.com/search/users?q=${textValue}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
        })
        .then((data) => setGithubUsers(data.items.slice(0, 50)))
        .catch((err) => setError(err));
      setIsLoading(false);
    } else {
      setGithubUsers([]);
    }
  }, [textValue]);

  const contextContent = { githubUsers, error, isLoading, textValue, changeTextValue }

  return (
    <ContextProvider value={contextContent}>
      <div>
        <h1>Github users search</h1>
        <UsersList />
      </div>
    </ContextProvider>
  );
}

export default App;
