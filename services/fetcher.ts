import BASR_URL from "@/constants/constants";
import axios from "axios";
axios.defaults.baseURL = BASR_URL;

const fetcher = async (url: string) => axios.get(url).then((res) => res.data);
export default fetcher;