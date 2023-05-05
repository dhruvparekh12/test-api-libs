import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }

}
