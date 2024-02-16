export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://server-mlm01.blockchainboostup.com/category/",
      { method: "get" }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
