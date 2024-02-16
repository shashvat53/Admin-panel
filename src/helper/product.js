export const editProduct = async () => {
  try {
    const response = await fetch(
      "https://server-mlm01.blockchainboostup.com/product/ITM-02",
      { method: "PUT" }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
