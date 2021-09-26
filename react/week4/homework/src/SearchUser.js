import React from 'react';
import { context } from "./themeContext";

function SearchUser() {
    const contextValue = React.useContext(context);

    return <input
        type="text"
        value={contextValue.textValue}
        placeholder="Search for user"
        onChange={(event) => contextValue.changeTextValue(event.target.value)}
    />
}

export default SearchUser;