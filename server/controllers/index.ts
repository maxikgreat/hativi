import {app, RequestAuth0, ResponseAuth0} from '../';import {renameKeys} from '../../helpers';export const renderPage = (path: string) => (req: RequestAuth0, res: ResponseAuth0) => app.render(req, res, path);export const customLogin = () => (req: RequestAuth0, res: ResponseAuth0) => {	return res.oidc.login({		returnTo: '/find_blogger',	});}export const me = async (req: RequestAuth0, res: ResponseAuth0) => {	try {		if (req.oidc.user && Object.keys(req.oidc.user).length === 0) {			return res.status(401).json({ message: 'Unauthorized' });		}		return res.status(200).json(renameKeys(req.oidc.user));	} catch (err) {		res.status(400).end();	}}