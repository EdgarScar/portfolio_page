import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card'
import './UsersList.css';

//Generates an unordered list of UserItems 
const UsersList = props => {
  //Check if users exist 
  if (props.items.length === 0){
    return (
      <div className="center">
        <Card>
          <h2>No Users found</h2>
        </Card>
      </div>
    );
  };
  //Return unordered list of UserItems 
  return (
  <ul>
    {/*Array of User Objects is mapped to generate individual UserItems with props*/}
     {props.items.map(user =>
        <UserItem 
        key={user.id} 
        id={user.id} 
        image={user.image} 
        name={user.name} 
        placeCount={user.places}
        />
        )} 
    </ul>
  );
};

export default UsersList; 