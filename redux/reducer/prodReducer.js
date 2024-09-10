/* eslint-disable no-unused-vars */
import axios from "axios";
import base_url from "../../../utils/base_url";
import { getConfigWithToken } from "../../../utils/config";

// Get All Client
const getAllProductData = async () => {
  const config = await getConfigWithToken();

  try {
    const response = await axios.get(`${base_url}clients?populate=*`, config);
    return response.data;
  } catch (error) {
    console.error("Error during getting Product data:", error);
    throw error;
  }
};

export const ProductService = {
  getAllProductData,
};
