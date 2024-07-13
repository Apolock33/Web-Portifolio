import React, { createContext, useEffect, useState } from 'react';
import useWindowDimensions from 'use-window-dimensions';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const { width } = useWindowDimensions();
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if (width <= 1024) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    })

    return (
        <GlobalContext.Provider value={{ mobile }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalProvider, GlobalContext }