const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const User = require('../models/user');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// router.post('/contact', async (req,res) => {
//     // console.log('req.body:', req.body);
//     const user = await new User(req.body);
//     user.save();
//     const fullName = req.body.fullName;
//     const email = req.body.email;
//     console.log('here');
//         await sgMail.send({
//             to: email,
//             from: `"Techmade" <team@techmade.co>`,
//             subject: 'Thanks for reaching out',
//             html: `<p>Thanks for reaching out to Techmade. Someone from our team is going to contact you soon.</p>`
//         });
//     // });
//     return res.status(200).send('Email Sent');
// });

router.post('/join', async (req,  res) => {
    const user = new User(req.body);
    await user.save();
    res.status(200);
    res.end();
});

module.exports = router;