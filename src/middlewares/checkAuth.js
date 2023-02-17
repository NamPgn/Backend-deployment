import expressJwt from "express-jwt";

export const requiredSignin=expressJwt({
  algorithms:["HS256"],
  secret:"123",
  requestProperty:"auth"
})


export const checkAuth=(req,res,next)=>{
  const isAdmin=true;
  if(isAdmin){
    next();
  }else{
    res.status(400).json({
      message:"Bạn không phải Admin"
    })
  }
}

