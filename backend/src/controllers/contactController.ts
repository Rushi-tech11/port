import { Request, Response } from "express";
import Contact from "../models/Contact";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { name, email, subject, message } = req.body;

    const newMessage = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};