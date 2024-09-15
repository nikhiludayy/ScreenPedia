import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODMxZDM2ZGJjYjQ3MjQ0OTM0ODc4ZmVmNjczMmM4MiIsIm5iZiI6MTcyNjMwOTU5Ni42NjQ5ODksInN1YiI6IjY2ZTU2MDllZjY3OGViMzUwNjZkN2UwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhdh781uhfsnr--eAKs2Z7xBI0O_bAo7sdV99fFta-U'
  },
});

export default instance;
