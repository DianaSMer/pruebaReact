import React from 'react'
import './Item.css'
import { Card, CardMedia, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import social from '../Assets/Social Share.png';



import {useState} from 'react'


import { FaStar} from 'react-icons/fa';

 const Item = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <Card  className={`item card-item`} sx={{ width:'fit-content', mb:2, py: 0, px: 0 }} >
      <CardMedia
        component="img"
        height="300"
        image={props.image}
        alt={props.name}
      />
      <div className="item-content">
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>

        <Typography variant="h5" component="h2">
          {props.description}
        </Typography>

        <div className="item-prices">
          <div className="item-price-new">
            ${props.new_price}
          </div>
          <div className="item-price-old">
            ${props.old_price}
          </div>
        </div>
      </div>
      {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label> 
                    <input type="radio"
                    name= "rating"
                    value= {currentRating}
                    onClick={()=> setRating(currentRating)}
                    
                    />
                <FaStar className= 'star'
                size={10}
                color= {currentRating <= (hover || rating)? "#ffc107": "#e4e5e9"}
                onMouseEnter = {()=> setHover(currentRating)}
                onMouseLeave = {() => setHover(null)}
                ></FaStar>
                </label>
                );
                
              })}
    </Card>
  )
}


const OuterCard = (props) => {
  
  
    return (
      <Card className={`item card-item`} sx={{ backgroundColor: '#e0e0e0', py: 0, px: 0  }}>
        <CardContent>
          <Typography variant="h4" component="h2">
            {props.title}
          </Typography>
          <Item
            image={props.image} 
            name={props.name}
            description={props.description}
            new_price={props.new_price}
            old_price={props.old_price}
          />

   
              
        </CardContent>
        <div className="outer-content">
        <img src={social} alt="" style={{ height: '50px', width: '100px', paddingRight: '70px', paddingLeft: '20px' }} />
        <Button variant="outlined" color='warning' marginbottom='11' borderRadius='60px' disableRipple>Agregar
        </Button>
        </div>
      </Card>
    );
  }



export default OuterCard
