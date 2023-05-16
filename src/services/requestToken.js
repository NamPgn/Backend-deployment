import jwt from "jsonwebtoken"
export { EXPIRES_IN } from "../constans/constan"
export const generateToken = (payload) => {
    const token = jwt.sign(payload, "nampg", { expiresIn: '24h' })
    return token;
}
export const verifyToken = (data) => {
    return jwt.verify(data);
}