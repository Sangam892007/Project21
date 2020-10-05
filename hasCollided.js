function hasCollided(A,B){
    ab = A.x + A.width/2;
    ba = B.x;
    if (ab >= ba){
       return true;
    }
    else {
       return false;
    
    }

}