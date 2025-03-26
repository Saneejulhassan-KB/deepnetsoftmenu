import React, { useState, useEffect } from "react";
import "./MenuForm.css";

const MenuForm = () => {
  const [menuData, setMenuData] = useState({
    category: "Food",
    heading: "",
    name: "",
    description: "",
    price: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuData(prev => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const fetchCurrentMenu = async (category) => {
    try {
      const response = await fetch(`http://localhost:5000/api/menus/${category}`);
      if (response.ok) {
        const data = await response.json();
        setCurrentMenu(data);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchCurrentMenu(menuData.category);
  }, [menuData.category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/menus/add-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...menuData,
          price: Number(menuData.price)
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCurrentMenu(data.menu);
        setSuccess("Menu item added successfully!");
        setMenuData(prev => ({
          ...prev,
          heading: "",
          name: "",
          description: "",
          price: "",
        }));
      } else {
        setError(data.message || "Error adding menu item");
      }
    } catch (error) {
      setError("Failed to connect to server. Please try again later.");
      console.error("Error:", error);
    }
  };

  const renderCurrentMenu = () => {
    if (!currentMenu) return null;

    return (
      <div className="current-menu">
        <h3>Current Menu Items for {currentMenu.category}</h3>
        {currentMenu.headings && currentMenu.headings.length > 0 ? (
          currentMenu.headings.map((heading, index) => (
            <div key={index} className="menu-heading">
              <h4>{heading.title}</h4>
              <ul>
                {heading.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.name} - ${item.price}
                    <p className="item-description">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No items added yet for this category.</p>
        )}
      </div>
    );
  };

  return (
    <div className="menu-form-container">
      <h2>Add Menu Item</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit} className="menu-form">
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={menuData.category} onChange={handleChange}>
            <option value="Food">Food</option>
            <option value="Drinks">Drinks</option>
            <option value="Brunches">Brunches</option>
          </select>
        </div>

        <div className="form-group">
          <label>Heading</label>
          <input
            type="text"
            name="heading"
            value={menuData.heading}
            onChange={handleChange}
            placeholder="e.g., Cocktails"
            required
          />
        </div>

        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            name="name"
            value={menuData.name}
            onChange={handleChange}
            placeholder="e.g., Mojito"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={menuData.description}
            onChange={handleChange}
            placeholder="Brief description"
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={menuData.price}
            onChange={handleChange}
            placeholder="Price"
            min="0"
            step="0.01"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Menu Item
        </button>
      </form>

      {renderCurrentMenu()}
    </div>
  );
};

export default MenuForm;
