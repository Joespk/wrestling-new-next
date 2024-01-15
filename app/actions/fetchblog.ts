"use server";

import axios from "axios";

export const fetchBlogs = async () => {
  try {
    const res = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*`
    );
    return res.data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
