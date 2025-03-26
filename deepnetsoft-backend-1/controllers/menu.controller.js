const Menu = require("../models/menu.model");

exports.addMenuItem = async (req, res) => {
  try {
    let { category, heading, name, description, price } = req.body;

    if (!category || !heading || !name || !price) {
      return res.status(400).json({ 
        message: "Missing required fields. Please provide category, heading, name, and price." 
      });
    }

    if (isNaN(price) || price <= 0) {
      return res.status(400).json({ message: "Price must be a positive number." });
    }

    // Convert category, heading, and name to lowercase for uniformity
    category = category.toLowerCase();
    heading = heading.toLowerCase();
    name = name.toLowerCase();

    let menu = await Menu.findOne({ category });

    if (!menu) {
      menu = new Menu({ 
        category, 
        headings: [{ title: heading, items: [] }] 
      });
    }

    // Find heading (case insensitive)
    let menuHeading = menu.headings.find(h => h.title.toLowerCase() === heading);

    if (!menuHeading) {
      menu.headings.push({ title: heading, items: [] });
      menuHeading = menu.headings[menu.headings.length - 1];
    }

    // Check if item exists under the same heading (case insensitive)
    const existingItem = menuHeading.items.find(item => item.name.toLowerCase() === name);
    if (existingItem) {
      return res.status(400).json({ 
        message: `An item with name "${name}" already exists under heading "${heading}"` 
      });
    }

    // Add new menu item
    menuHeading.items.push({ name, description, price });

    // Save updated menu
    const savedMenu = await menu.save();

    res.status(201).json({
      message: "Menu item added successfully",
      menu: savedMenu
    });
  } catch (error) {
    console.error("Error adding menu item:", error);
    res.status(500).json({ 
      message: "Error adding menu item", 
      error: error.message 
    });
  }
};


exports.getMenusByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const menu = await Menu.findOne({ category: { $regex: new RegExp(category, "i") } });

    
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(200).json({
        category,
        headings: []
      });
    }
  } catch (error) {
    res.status(500).json({ 
      message: "Error fetching menu", 
      error: error.message 
    });
  }
};
