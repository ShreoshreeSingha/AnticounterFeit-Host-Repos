import axios from 'axios';

const Demo = () => {

  const url = 'https://rare-months-dance-49-37-248-35.loca.lt/api/productmaster/';

  // const options = {
  //   withCredentials: true,
  //   headers: {
  //     Authorization: 'Basic ' + btoa('admin:adminpw'),
  //   },
  // };

  axios.get(url)
    .then(response => {
      console.log(response.json());
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <>
      <div>
        
      </div>
    </>);
}

export default Demo;