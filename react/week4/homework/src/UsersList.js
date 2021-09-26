import React from 'react';
import SearchUser from './SearchUser';
import UserItem from './UserItem';
import { context } from "./themeContext";

function UsersList() {
    const contextValue = React.useContext(context)

    return (
        <div>
            <SearchUser />
            {contextValue.error ? (
                <h3>Error fetching: {contextValue.error.toString()}</h3>
            ) : (
                <ul>
                    {contextValue.githubUsers.length < 1 ? <p>No Result</p> : contextValue.githubUsers.map((aUser) => <UserItem key={aUser.id} text={aUser.login} />)}
                </ul>)
            }
        </div>
    );

}

export default UsersList;