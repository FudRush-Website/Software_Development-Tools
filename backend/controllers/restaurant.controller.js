import cloudinary from "../lib/cloudinary.js";
import { db } from "../config/db.js";

export const getAllRestaurants = async (req, res) => {
  try {
    const [restaurants] = await db.execute("SELECT * FROM restaurants");
    res.json({ restaurants });
  } catch (error) {
    console.log("Error in getAllRestaurants controller", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getFeaturedRestaurants = async (req, res) => {
  try {
    const [restaurants] = await db.execute(
      "SELECT * FROM restaurants WHERE is_featured = ?",
      [true]
    );
    if (restaurants.length === 0) {
      return res
        .status(404)
        .json({ message: "Featured restaurants not found" });
    }
    res.json(restaurants);
  } catch (error) {
    console.log("Error in getFeaturedRestaurants controller", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const createRestaurant = async (req, res) => {
  try {
    const { name, description, image, category } = req.body;
    let imageUrl = "";

    if (image) {
      const cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "restaurants",
      });
      imageUrl = cloudinaryResponse.secure_url;
    }

    await db.execute(
      "INSERT INTO restaurants (name, description, image, category) VALUES (?, ?, ?, ?)",
      [name, description, imageUrl, category]
    );

    res.status(201).json({ message: "Restaurant created successfully" });
  } catch (error) {
    console.log("Error in createRestaurant controller", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const [restaurant] = await db.execute(
      "SELECT image FROM restaurants WHERE id = ?",
      [id]
    );
    if (restaurant.length === 0) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    if (restaurant[0].image) {
      const publicId = restaurant[0].image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`restaurants/${publicId}`);
        console.log("Deleted Image from cloudinary");
      } catch (error) {
        console.log("Error deleting image from cloudinary", error);
      }
    }

    await db.execute("DELETE FROM restaurants WHERE id = ?", [id]);
    res.json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.log("Error in deleteRestaurant controller", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getRestaurantsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const [restaurants] = await db.execute(
      "SELECT * FROM restaurants WHERE category = ?",
      [category]
    );
    res.json(restaurants);
  } catch (error) {
    console.log("Error in getRestaurantsByCategory controller", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const toggleFeaturedRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const [restaurant] = await db.execute(
      "SELECT is_featured FROM restaurants WHERE id = ?",
      [id]
    );
    if (restaurant.length === 0) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const newStatus = !restaurant[0].is_featured;
    await db.execute("UPDATE restaurants SET is_featured = ? WHERE id = ?", [
      newStatus,
      id,
    ]);

    res.json({ message: "Restaurant featured status updated" });
  } catch (error) {
    console.log("Error in toggleFeaturedRestaurant controller", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
