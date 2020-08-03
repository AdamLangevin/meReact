import { Express } from 'express';

interface About {
	title : string;
}

const about : About[] = [{ title: 'About 1' }, {title: 'About 2'}];

export function addAboutRoutes(app: Express) {
	app.get('/app/about', (req, res) => res.send(about));
	app.post('/app/addAbout', (req, res) => {
		const newAbout = {
		  title: `New About ${Math.floor(Math.random() * 1000)}`,
		};
		about.push(newAbout);
		res.send(newAbout);
	});
}
