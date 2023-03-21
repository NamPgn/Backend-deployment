import { expressjwt } from 'express-jwt';

export const requiredSignin = expressjwt({
  algorithms: ["HS256"],
  secret: process.env.MK,
  requestProperty: "auth"
});


export const isAuth = (req, res, next) => {
  const status = req.profile._id == req.auth._id;
  if (!status) {
    res.status(401).json({
      message: "Ban khong co quyen truy cap"
    })
  }
  next();
}

export const isAdmin = (req, res, next) => {
  if (req.auth.role == 0) {
    res.status(401).json({
      message: "Ban khong phai la admin...cuts"
    })
  }
  next();
}