import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID ub1uVT0-zNfWrsypUG-dFEuJMknnm0WIw_7GFO0JP18",
      },
})