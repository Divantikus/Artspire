export const createAuthHeader = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };
};
