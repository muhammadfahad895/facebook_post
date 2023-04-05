import React from "react";
import angry from "../../assets/angry.svg";
import care from "../../assets/care.svg";
import haha from "../../assets/haha.svg";
import like from "../../assets/like.svg";
import love from "../../assets/love.svg";
import sad from "../../assets/sad.svg";
import wow from "../../assets/wow.svg";

const ReactionIcons = () => {
  return (
    <div className="Reaction-icons">
      <img src={like} alt=""/>
      <img src={love} alt="" />
      <img src={care} alt="" />
      <img src={haha} alt="" />
      <img src={wow} alt="" />
      <img src={sad} alt="" />
      <img src={angry} alt="" />
    </div>
  );
};

export default ReactionIcons;
