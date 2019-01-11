const express = require('express');

const app = express();
const PORT = 8081;

app.get('/api/heroes', (req, res) => {
  return res.send([
      {
        id: 1,
        name: 'Batman',
        power: 9,
        agility: 7,
        endurance: 8,
        strength: 'Money',
        logoSrc: 'https://images-na.ssl-images-amazon.com/images/I/41Vd-ON7ZFL._SX425_.jpg',
      },
      {
        id: 2,
        name: 'Superman',
        power: 10,
        agility: 7,
        endurance: 8,
        strength: 'Kryptonite',
        logoSrc: 'https://images.esellerpro.com/2486/I/145/4/u_20260840_Half%20Moon%20Bay_Homewares_Coasters_coaster-superman-logo.JPG',
      },
      {
        id: 3,
        name: 'Flash',
        power: 8,
        agility: 10,
        endurance: 9,
        strength: 'Speed',
        logoSrc: 'https://res.cloudinary.com/teepublic/image/private/s--qGKEnqg8--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1449793529/production/designs/369093_1.jpg',
      },
      {
        id: 4,
        name: 'Spiderman',
        power: 6,
        agility: 10,
        endurance: 9,
        strength: 'Spider web',
        logoSrc: 'https://images-na.ssl-images-amazon.com/images/I/21h0Z1IkEQL.jpg',
      },
      {
        id: 5,
        name: 'Iron Man',
        power: 6,
        agility: 10,
        endurance: 9,
        strength: 'Money',
        logoSrc: 'https://banner2.kisspng.com/20180422/ulq/kisspng-iron-man-stencil-star-lord-carving-pumpkin-skin-vector-5add1fe3591321.7899373015244410593649.jpg',
      }     
    ])
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));


