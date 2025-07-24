import { useState } from "react";

const useErrorHandler = () => {
  const [error, setError] = useState("");

  const handleError = (error) => {
    if (error.response) {
      setError(error.response.data.message || "Something went wrong.");
    } else if (error.request) {
      setError("No response from server. Please try again.");
    } else {
      setError("An error occurred. Please check your network.");
    }
  };

  return { error, setError, handleError };
};

export default useErrorHandler;
