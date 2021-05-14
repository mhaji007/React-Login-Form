export const authenticate = (jwt, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};

export const forgotPassword = (email) => {
  console.log("email from forgotPassword in auth ===> ", email);
  return fetch(`${process.env.REACT_APP_API}/forgot-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => {
      console.log("forgot password response: ", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};


export const resetPassword = (resetInfo) => {
  return fetch(`${process.env.REACT_APP_API}/reset-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resetInfo),
  })
    .then((response) => {
      console.log("forgot password response: ", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

