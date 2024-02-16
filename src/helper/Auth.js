const OnlineServer = process.env.REACT_APP_SERVER_BACKEND;

//Authors only
export const signin = (user) => {
  return fetch(`${OnlineServer}/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user?.formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err, "2"));
};

export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    return fetch(`${OnlineServer}/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  }
};

// export const register = (user) => {
//   return fetch(${OnlineServer}/user/userInsert, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user?.formData),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// To remain signed in even browser automatically remove user details
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", JSON.stringify(data?.token));
    localStorage.setItem("userData", JSON.stringify(data?.user));
    next();
  }
};

// check whether user is signed in or not
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) {
    return JSON.parse(localStorage.getItem("token"));
  }
};
