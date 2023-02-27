import { addUser, getAll, getUser, editUser, deleteUser, getDataUser } from "../services/auth";
import { generateToken } from "../services/requestToken";
import { comparePassWord, passwordHash } from "../services/security";
var path = require('path');
import jwt from "jsonwebtoken"
const PORT = process.env.PORT;

export const signup = async (req, res) => {
    try {
        const { username, email, password, image } = req.body;
        // const { filename } = req.file;
        // filename ? filename : "https://taytou.com/wp-content/uploads/2022/08/Tai-anh-dai-dien-cute-de-thuong-hinh-meo-nen-xanh-la.png";

        // console.log("req.file", filename)

        const getuser = await getDataUser({ email: email }); //tìm lấy ra cái thằng email
        if (getuser) { //kiểm tra nếu mà nó email đã tồn tại thì trả về cái lỗi
            res.status(401).json({
                success: false,
                message: 'Tài khoản đã tồn tại'
            })
        }
        // mã hóa mật khẩu
        const hashPw = passwordHash(password);
        const newUser = {
            username: username,
            email: email,
            password: hashPw,
            image: image,
        }
        await addUser(newUser)
        return res.status(200).json({
            success: true,
            message: 'Signup success'
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "Không đăg kí dđược "
        })
    }
}

export const singin = async (req, res) => {
    try {
        var { password, email } = req.body;
        console.log("email", email);
        const getUserLogin = await getDataUser({ email: email })
        if (!getUserLogin) {
            res.status(401).json(
                {
                    success: false,
                    message: 'Tài khoản không tồn tại'
                }
            )
        }

        const comparePw = comparePassWord(password, getUserLogin.password);
        if (!comparePw) {
            res.status(401).json(
                {
                    success: false,
                    message: 'Nhập lại mật khẩu đi'
                }
            )
        }
        const user = {
            _id: getUserLogin._id,
            username: getUserLogin.username,
            email: getUserLogin.email,
            role: getUserLogin.role,
            image: getUserLogin.image
        }
        console.log("getUserLogin", user)
        const tokenAuth = generateToken(user)

        let transporter = NodeMailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.PS, // generated ethereal password
            },
        });

        // send mail with defined transport object
        transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: `${email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Nam chào bạn", // plain text body
            html: "<b>Nam chào bạn</b>", // html body
        }, (err) => {
            if (err) {
                console.log("err", err)
            } else {
                console.log("send mail thành công")
                res.json({
                    success: true,
                    message: "Send mail thành công"
                })
            }
        });
        res.status(200).json({
            success: true,
            message: 'Thành công',
            data: {
                user,
                token: tokenAuth
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Xem lại code đi',
        })
    }
}

export const getAlluser = async (req, res) => {
    try {
        const data = await getAll();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

export const edit = async (req, res) => {
    try {
        const { username, email, password, role, _id, image } = req.body;
        // const { filename } = req.file;
        const payload = req.body;
        let datas = {
            username: username,
            email: email,
            image: image,
            password: password,
            role: role
        }
        const data = await editUser(_id, datas);
        res.status(200).json({
            message: "Thành công", data
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Lỗi rồi"
        })
    }
}

// export const editImage = async (req, res) => {
//     try {
//         const { filename } = req.file;
//         const { id } = req.params;
//         const payload = {
//             image: `http://localhost:8000/images/` + filename,
//         }
//         const data = await editImg(id, payload);
//         console.log("data", data);
//         res.json(data);
//     } catch (error) {
//         return res.status(400).json({
//             message: "Lỗi rồi"
//         })
//         console.log(error);
//     }
// }

export const remove = async (req, res) => {
    const id = req.params.id;
    try {
        var data = await deleteUser(id);
        console.log(data);
        res.status(200).json({
            message: "Thành công", id,

        })
    } catch (error) {
        return res.status(400).json({
            message: "Lỗi rồi"
        })
        console.log(error)
    }
}

export const getAuth = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await getUser(id);
        res.status(200).json({
            message: "Thành công",
            data
        })
        // console.log(await getUser(id))
    } catch (error) {
        return res.status(400).json({
            message: "Lỗi rồi"
        })
        console.log(error)
    }
}

// export const addUser = async (req, res) => {
//     try {
//         var { username, email, password, role } = req.body;
//         const { filename } = req.file;
//         filename ? filename : "https://taytou.com/wp-content/uploads/2022/08/Tai-anh-dai-dien-cute-de-thuong-hinh-meo-nen-xanh-la.png";

//         // console.log("req.file", filename)

//         const getuser = await getDataUser({ email: email }); //tìm lấy ra cái thằng email
//         if (getuser) { //kiểm tra nếu mà nó email đã tồn tại thì trả về cái lỗi
//             res.status(401).json({
//                 success: false,
//                 message: 'Tài khoản đã tồn tại'
//             })
//         }
//         // mã hóa mật khẩu
//         var hashPw = passwordHash(password);
//         const newUser = {
//             username: username,
//             email: email,
//             password: hashPw,
//             image: `http://localhost:8000/images/` + filename,
//             role: role
//         }
//         console.log("newUsser", newUser)
//         await addUser(newUser)
//         return res.status(200).json({
//             success: true,
//             message: "Thành công",
//             newUser: [newUser]
//         })
//     } catch (error) {
//         console.log(error);
//         res.json({
//             message: "Không đăg kí dđược "
//         })
//     }
// }

export const commented = async (req, res) => {
    try {
        const data = req.body;
        const textComment = await addPost(data);
        res.json(textComment);
        console.log(textComment)
    } catch (error) {
        console.log(error);
    }
}