import jwt from "jsonwebtoken";
import { db } from "../config/db.js";
import bcrypt from "bcryptjs";

const generateToken = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};

const setCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    // Check if user already exists
    const [existingUsers] = db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with hashed password
    const [result] = db.execute(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );
    const userId = result.insertId;

    // Generate tokens
    const { accessToken, refreshToken } = generateToken(userId);

    // Store refresh token
     db.execute(
      "INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)",
      [userId, refreshToken]
    );

    setCookies(res, accessToken, refreshToken);

    res.status(201).json({
      user: { id: userId, name, email, role: "customer" },
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.error("Error in signup controller:", error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fetch user from DB
    const [users] =  db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (users.length === 0) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    const user = users[0];

    // Compare hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    // Generate tokens
    const { accessToken, refreshToken } = generateToken(user.id);

    // Store refresh token
     db.execute(
      "INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)",
      [user.id, refreshToken]
    );

    setCookies(res, accessToken, refreshToken);

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken) {
       db.execute("DELETE FROM refresh_tokens WHERE token = ?", [
        refreshToken,
      ]);
    }
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout Controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ error: "No refresh token provided" });
    }

    // Verify token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Check if token exists in DB
    const [tokens] = await db.execute(
      "SELECT user_id FROM refresh_tokens WHERE token = ?",
      [refreshToken]
    );
    if (tokens.length === 0) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }

    // Generate new access token
    const accessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.status(200).json({ accessToken });
  } catch (error) {
    console.log("Error in refreshToken controller", error.message);
    res.status(500).json({ error: "Server error", error: error.message });
  }
};
