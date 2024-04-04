import React, { useState, useEffect, useRef } from "react";

interface MenuItemData {
  value: number | string;
  label: string;
}

interface DropdownProps {
  menuItems: MenuItemData[];
  Icon: any;
}

// Imports and interfaces...

const Dropdown: React.FC<DropdownProps> = ({ menuItems, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<number | string>("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (value: number | string, index: number) => {
    setSelectedValue(value);
    setSelectedIndex(index);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }} ref={dropdownRef}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "180px",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "16px",
          borderRadius: "8px",
          paddingRight: "5px",
          border: "1px solid #ccc",
          cursor: "pointer",
          position: "relative",
          backgroundColor: "white",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon />
        <span>{selectedValue || "Сортировать"}</span>
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 5px)",
            left: 0,
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 1000,
            width: "240px",
            overflowY: "auto",
            transition: "height 0.3s ease",
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "8px",
                width: "240px",
                cursor: "pointer",
                borderBottom: "none",
                color: selectedIndex === index ? "#1BB234" : "#000",
                background: selectedIndex === index ? "#EEF4FF" : "transparent",
                transition: "background-color 0.3s, color 0.1s",
              }}
              onClick={() => handleChange(item.value, index)}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseLeave={() => setSelectedIndex(null)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
