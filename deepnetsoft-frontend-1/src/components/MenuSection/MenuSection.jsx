import React, { useEffect, useState } from "react";
import "./MenuSection.css";
import Button from "react-bootstrap/Button";
import "../Option/Option.css";
import axios from "axios";

function MenuSection() {
  const [category, setCategory] = useState("food");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenuData(category);
  }, [category]);

  const fetchMenuData = async (selectedCategory) => {
    try {
      const response = await axios.get(
        `https://deepnetsoft-backend-1.onrender.com/api/menus/${selectedCategory}`
      );
      console.log("Fetched Data:", response.data);
      if (response.data && response.data.headings) {
        setMenu(response.data.headings);
      } else {
        setMenu([]);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
      setMenu([]);
    }
  };

  return (
    <div>
      <div className="option-wrapper">
        <img src="/optionbackground.png" alt="" className="desktop-image" width={"100%"} height={"100%"} />
        <img src="/optionbackground-mobile.png" alt="" className="mobile-image" width={"100%"} height={"100%"} />
        <div className="option-container">
          <Button className={category === "food" ? "border-button" : "no-border-button"} onClick={() => setCategory("food")}>Food</Button>
          <Button className={category === "drinks" ? "border-button" : "no-border-button"} onClick={() => setCategory("drinks")}>Drinks</Button>
          <Button className={category === "brunch" ? "border-button" : "no-border-button"} onClick={() => setCategory("brunch")}>Brunch</Button>
        </div>
      </div>


      {menu.length > 0 ? (
        menu.map((heading, index) => (
          <div key={index} className="menu-section-title">

            <img src="/menubackground.png" alt="menu background" className="desktop-image" width={"100%"} />
            <img src="/menubackground-mobile.png" alt="menu background mobile" className="mobile-image" width={"100%"} />

            <div className="centered-container">
              <div className="section-title-wrapper">
                <div className="line"></div>
                <h2 className="section-title">{heading.title}</h2>
                <div className="line"></div>
              </div>

              <div className="menu-content">
                {heading.items.map((item, idx) => (
                  <div className="menu-item" key={idx}>
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <div className="dotted-line"></div>
                      <span className="item-name">${item.price}</span>
                    </div>
                    <p className="item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <img src="/drink.png" alt="drink" className="drink-image" />
            <img src="/cocktail.png" alt="cocktail" className="cocktail-image" />
            <img src="/menu-frame-left.png" alt="menu-frame-left" className="menu-frame-left" />
            <img src="/menu-frame-right.png" alt="menu-frame-right" className="menu-frame-right" />
          </div>
        ))
      ) : (
        <div className="menu-section-title">
          <img src="/menubackground.png" alt="menu background" className="desktop-image" width={"100%"} />
          <img src="/menubackground-mobile.png" alt="menu background mobile" className="mobile-image" width={"100%"} />
          <div className="centered-container">
            <div className="menu-content">
              <p className="no-items-message">No items available for this category.</p>
            </div>
          </div>
          <img src="/drink.png" alt="drink" className="drink-image" />
          <img src="/cocktail.png" alt="cocktail" className="cocktail-image" />
          <img src="/menu-frame-left.png" alt="menu-frame-left" className="menu-frame-left" />
          <img src="/menu-frame-right.png" alt="menu-frame-right" className="menu-frame-right" />
        </div>
      )}
    </div>
  );
}

export default MenuSection;
