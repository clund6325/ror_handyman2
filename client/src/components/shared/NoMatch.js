import { Link } from 'react-router-dom';

const NoMatch = () => (
  <>
    <h1>404 Page Not Found</h1>
    <Link to="/">
      Return Home
    </Link>
    <br />
    <img src="https://images.unsplash.com/photo-1610311213453-e1a8e0ca6e18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d3JvbmclMjB3YXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="wrong way" width="1000"/>
  </>
)

export default NoMatch;