import React from 'react';
import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/images/PageNotFound';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img style={{width: '250px', display: 'block', margin: "20px auto"}} src="https://tse4.mm.bing.net/th?id=OIP.-IZl1PTjG21jkXq9Q6NHQgHaF7&pid=Api&P=0&h=180" alt='PageNotFound' />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;