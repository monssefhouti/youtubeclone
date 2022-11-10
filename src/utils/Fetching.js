import axios from "axios";
const BASEURL ='https://youtube-v31.p.rapidapi.com'
const options = {
  url: BASEURL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


axios.request(options).then(function (res) {
	console.log(res.data);
}).catch(function (error) {
	console.error(error);
});
export const Fetching= async(url) =>{
    const {data}= await axios.get(`${BASEURL}/${url}`,options);

    return data;



}