import axios from "axios";

import {
  onGlobalError,
  onGlobalSuccess,
  API_HOST_PREFIX,
} from "./serviceHelpers";

const contactUsEndpoint = `${API_HOST_PREFIX}/api/emails/contact`;

const contactUs = (payload) => {
  const config = {
    method: "POST",
    url: contactUsEndpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const contactUsService = { contactUs };

export default contactUsService;
