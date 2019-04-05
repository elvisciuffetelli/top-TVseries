import axios from 'axios';

const HttpClient = (url) => axios.get(url)
  .then(response => response.data)
  .catch(error => {
    console.log(error);
  });

export default HttpClient;
