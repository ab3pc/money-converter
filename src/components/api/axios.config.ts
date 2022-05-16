import axios from "axios";
import congigServer from "./server.config.json";

export const axiosConfig = axios.create({
	baseURL: congigServer.serveceURL,
	headers: {
		"Content-Type": "application/json"
	}
})