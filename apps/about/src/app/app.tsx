import React, { useEffect, useState } from 'react';

import { Ui, NavBar, Footer } from "@py120/ui";

import * as Realm from "realm-web";
import { userInfo } from 'os';

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

export const App = () => {
	const [user, setUser] = React.useState<Realm.User | null>(app.currentUser);
    return(
        <>
	    <div className="mainContainer">
			<NavBar />
			<Ui />
			{user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
	    </div>
		<Footer />
        </>
    );
};

export default App;
