import React, { useEffect, useState } from 'react';

import { Ui, NavBar, Footer, Newsbtn, PopIcon } from "@py120/ui";

import * as Realm from "realm-web";
import { userInfo } from 'os';
//import { Container } from '@material-ui/core';
import { Container } from "semantic-ui-react";

const appid = "py120aIDa1-tnvfa";
const app: Realm.App = new Realm.App({ id: appid });

const UserDetail: React.FC<{ user: Realm.User }> = ({ user }) => {
	return(
		<div>
			<h1>Logged in with Anon: {user.id}</h1>
		</div>
	);
}

const Login: React.FC<{ setUser: (user: Realm.User) => void }> = ({ setUser }) =>{
	const loginAnon = async () =>{
		const user: Realm.User = await app.logIn(Realm.Credentials.anonymous());
		setUser(user);
	};
	return <button onClick={loginAnon}>Log In</button>
}

interface About {
	title: string;
}

//needs an intermediate container to hold the icon, like messenger bubble
const PopCont = ({ children }) => (
	<Container style={{ margin: 20, width: 25, height: 25, 'min-width': 25, }}>
		
	</Container>
);

export const App = () => {
	const [user, setUser] = React.useState<Realm.User | null>(app.currentUser);
    return(
        <>
	    <div className="mainContainer">
			<NavBar />
			<Ui />
			{/* {user ? <UserDetail user={user} /> : <Login setUser={setUser} />} */}
			<PopCont>
				<PopIcon />
			</PopCont>
			{/* <PopIcon /> */}
			{/* <Newsbtn /> */}
	    </div>
		
		<Footer />
        </>
    );
};

export default App;
