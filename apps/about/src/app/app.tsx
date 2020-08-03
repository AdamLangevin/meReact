import React, { useEffect, useState } from 'react';

import { Ui, NavBar} from "@py120/ui";

interface About {
	title: string;
}

export const App = () => {
    return(
        <>
	    <div className="mainContainer">
			<NavBar />
			<Ui />
	    </div>
        </>
    );
};

export default App;
