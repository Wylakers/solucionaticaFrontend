import axios from "axios";

const URI = process.env.REACT_APP_BACKENDURI || "http://localhost:8000";

const getAll = async () => {
  const url = URI.concat("/anp");

  return await axios.get(url);
};

const getOne = async (id) => {
  const url = URI.concat(`/anp/${id}`);

  return await axios.get(url);
};

const Anp = { getAll, getOne };

export default Anp;
