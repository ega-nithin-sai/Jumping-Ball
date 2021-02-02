//Function to check if two objects are touching
function isTouching(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object1.width/2 + object2.width/2 &&
      object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object1.height/2 + object2.height/2){
      return true;
    }
    else {
      return false;
    }
  }

  //Function for Boucing Off
  function bounceOff(object1,object2){
    if(object2.x - object1.x <= object2.width/2 + object1.width/2 &&
      object1.x - object2.x <= object2.width/2 + object1.width/2){
  
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
  
    if(object2.y - object1.y <= object2.height/2 + object1.height/2 &&
      object1.y - object2.y <= object2.height/2 + object1.height/2){
  
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    }
  }

  //Function for Colliding Two Objects
  function collide(collidedObject,collidingObject){
    if(collidedObject.x - collidingObject.x < collidedObject.width/2 + collidingObject.width/2 &&
      collidingObject.x - collidedObject.x < collidedObject.width/2 + collidingObject.width/2){
      collidingObject.velocityX = collidedObject.velocityX;
    }
  
  
    if(collidedObject.y - collidingObject.y < collidedObject.height/2 + collidingObject.height/2 &&
        collidingObject.y - collidedObject.y < collidedObject.height/2 + collidingObject.height/2){
        collidingObject.velocityY = collidedObject.velocityY;
    }
  }

//Function for Displacing Two Objects
function displace(collidedObject,collidingObject){
    if(collidedObject.x - collidingObject.x < collidedObject.width/2 + collidingObject.width/2 &&
      collidingObject.x - collidedObject.x < collidedObject.width/2 + collidingObject.width/2){
      collidedObject.velocityX = collidingObject.velocityX;
    }
  
    if(collidedObject.y - collidingObject.y < collidedObject.height/2 + collidingObject.height/2 &&
      collidingObject.y - collidedObject.y < collidedObject.height/2 + collidingObject.height/2){
      collidedObject.velocityY = collidingObject.velocityY;
  }
  }
  
  