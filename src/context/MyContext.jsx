import { createContext, useContext, useState } from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const MyContext = createContext();

export default function MyContextProvider({children}){

    const [data,setData] = useState("anushka")
    const mainUserData={
        data,
    };

    return(
        <MyContextProvider.Provider value={mainUserData}>
            {children}
        </MyContextProvider.Provider>
    )
}

export const useProfileData = () => useContext(MyContext)