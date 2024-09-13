/* eslint-disable no-unused-vars */
import axios from "axios";

// Get All Product
const getAllProductData = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ProductAction = {
  getAllProductData,
};
