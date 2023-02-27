export const sendMail = async (email) => {
  let transporter = NodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
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
}