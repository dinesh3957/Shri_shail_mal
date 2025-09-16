import React, { useState } from "react";
import "./teachers_list.css";

const teachers = [
  { id: 1, name: "Teacher 1", img: "https://www.alaska.edu/_resources/images/placeholders/profile.png" },
  { id: 2, name: "Teacher 2", img: "https://www.alaska.edu/_resources/images/placeholders/profile.png" },
  { id: 3, name: "Teacher 3", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Teacher 4", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Teacher 5", img: "https://via.placeholder.com/100" }
];

export default function teachers_list() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 2 < teachers.length ? prev + 2 : 0));
  };

  return (
    <div className="teachers-wrapper">
      {/* Desktop: scroll list */}
      <div className="teachers-container desktop-view">
        {teachers.map((teacher) => (
          <div className="teacher-card" key={teacher.id}>
            <img src={teacher.img} alt={teacher.name} className="teacher-img" />
            <span className="teacher-name">{teacher.name}</span>
          </div>
        ))}
      </div>

      {/* Mobile: 2 teachers + next button */}
      <div className="mobile-view">
        <div className="mobile-cards">
          {teachers.slice(current, current + 2).map((teacher) => (
            <div className="teacher-card small" key={teacher.id}>
              <img src={teacher.img} alt={teacher.name} className="teacher-img small" />
              <span className="teacher-name small">{teacher.name}</span>
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={handleNext}>➜</button>
      </div>
    </div>
  );
}
