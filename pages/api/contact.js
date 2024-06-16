import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, carModel, rentalDates, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: ['itsrazaalishah303@gmail.com',"hammadn788@gmail.com", email], 
        subject: `New Contact Form Submission from ${name}`,
        html: `
        You Car has been booked on ${rentalDates} here is your detailed information: 
               <p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Car Model: ${carModel}</p>
               <p>Rental Dates: ${rentalDates}</p>
               <p>Message: ${message}</p>
               `,
      });

      res.status(200).json({ message: 'Your Information is Sended' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
