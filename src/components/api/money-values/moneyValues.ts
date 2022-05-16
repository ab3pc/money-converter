import { axiosConfig } from "../axios.config"

export const getMoneyValues = ():Promise<any> => {
	return axiosConfig.get('')
}