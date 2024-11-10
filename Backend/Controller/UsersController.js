import { User } from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const CreateUser = async (req, res) => {
  const { userName, password, phoneNumber,role } = req.body;

  // Validate inputs
  if (!userName || !password || !phoneNumber) {
    return res.status(400).json({
      message: "One or more input fields are empty",
    });
  }

  // Check if phone number already exists
  const existingNumber = await User.findOne({ phoneNumber });
  if (existingNumber) {
    return res.status(400).json({
      message: "Phone number already exists",
    });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      userName,
      password: hashedPassword,
      phoneNumber,
      role
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      data: savedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { phoneNumber, password } = req.body;

  // Validate inputs
  if (!phoneNumber || !password) {
    return res.status(400).json({
      message: "One or more input fields are empty",
    });
  }

  try {
    // Find user by phone number
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        userName: user.userName,
        role: user.role,
      },
      process.env.JWT_TOKEN, // Ensure JWT_TOKEN is correctly set in your .env file
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      data: user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export { CreateUser, loginUser };