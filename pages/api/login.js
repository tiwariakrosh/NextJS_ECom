import User from '../../models/User'
import connectDB from '../../middleware/mongoose'
import CryptoJS from 'crypto-js'
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let user = await User.findOne({ "email": req.body.email })
        let bytes = CryptoJS.AES.decrypt(user.password, 'secret123');
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
            if (req.body.email == user.email && req.body.password == decryptedPass) {
                var token = jwt.sign({ email: user.email, name: user.anme }, 'jwtsecret', { expiresIn: '1h' });
                res.status(200).json({ success: true, token })
            }
            else {
                res.status(200).json({ success: false, error: "Invalid Credentials" })
            }
        }
        else {
            res.status(200).json({ error: false, error: "No user found" })
        }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}


export default connectDB(handler)