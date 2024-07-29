const nodemailer = require('nodemailer');

exports.saveFormData = async (req, res) => {
  try {
    const formData = req.body;

    // Email configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_ADMIN,
      subject: 'New Form Submission',
      text: `You have a new form submission from ${formData.firstName} ${formData.lastName}.
             Email: ${formData.email}
             Subject: ${formData.subject}
             Query: ${formData.query}`,
      replyTo: formData.email // reply-to address
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });

    res.status(201).json({ message: "Form data received and email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
