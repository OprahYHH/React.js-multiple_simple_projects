/**
 * source code: https://github.com/RohitKS7/react-restaurant-site
 * demo: https://react-restaurant-site.stackblitz.io/
 */
import React, { useState } from "react";
import { jsonData } from "../../Data/data";
import Menu from "../../Data/menu";

const Category = new Set (
    Menu.map((item) => {
        return item.category;
    })
)

// add new element in the array
const CategoryList = [...Category, 'All'];

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="menu-navbar">
                <div className="btn-group">
                    {
                        menuList.map((item) => {
                            return (
                                <button 
                                className="btn-group__item"
                                onClick={() => filterItem(item)}>
                                    {item}
                                </button>
                            )
                        })
                    }
                </div>
            </nav>
        </>
    )
}

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-card-container">
                {menuData.map((items) => {
                    const { id, name, category, image, description, price } = items;
                    return (
                        <>
                        <div className="card-container" key={id}>
                            <div className="menu-card">
                                <div className="menu-card-body">
                                    <span className="menu-card-number menu-card-circle menu-subtle">{id}</span>
                                    <span className="menu-card-author menu-subtle">{category}</span>
                                    <h2 className="menu-card-title">{name}</h2>
                                    <span className="menu-card-price menu-subtle">${price}</span>
                                    <span className="menu-description menu-subtle">{description}</span>
                                    <div className="menu-card-read">Read</div>
                                </div>
                                <img src={image} alt="menu images" className="menu-card-media" />
                                <span className="menu-card-tag menu-subtle">Booking Now</span>
                            </div>
                        </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

const App = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(CategoryList);

  // filter out the category for navbar
  const filterItem = (list) => {
    if (list === 'All') {
        return setMenuData(Menu);
    }

    const updateList = Menu.filter((item) => {
        return item.category === list;
    })
    setMenuData(updateList)
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default function R007() {
  return (
    <div>
      <h3 className="center subtitle">Project: {jsonData[6].projectName}</h3>
      <App />
    </div>
  );
}
