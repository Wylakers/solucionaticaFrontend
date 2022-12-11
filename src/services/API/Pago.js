import axios from "axios";

const URI = process.env.REACT_APP_BACKENDURI || "http://localhost:8000";

const post = async (request) => {
  const url = URI.concat("/pago");

  return await axios.post(url, request);
};

const sendEmail = async (request) => {
  const url = URI.concat("/send-email");

  return await axios.post(url, request);
};

const Pago = { post, sendEmail };

export default Pago;
