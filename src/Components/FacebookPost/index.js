import React, { useState } from "react";
import { ImEarth } from "react-icons/im";
import { TfiComment } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import ReactionIcons from "../ReactionIcons";

const FacebookPost = ({ data }) => {
  const style = { fontSize: "1.4em", paddingRight: "0.4rem" };
  const [isHover, setIsHover] = useState(false);
  return (
    <div onMouseEnter={() => setIsHover(false)}>
      <div className="card">
        <div className="post-header" key={data.id}>
          <img src={data.thumbnail} alt="" className="profile-pic" />
          <div className="fb-post">
            <p className="profile-name">{data.brand}</p>
            <p className="posted-date" style={{ fontSize: "14px" }}>
              <span>Yesterday </span>
              <span style={{ paddingRight: "0.4rem" }}>
                at {Math.floor(Math.random() * 12 + 1)} pm
              </span>
              <ImEarth />
            </p>
          </div>
        </div>
        <div className="post-body" onMouseEnter={() => setIsHover(false)}>
          <p className="post-description" style={{ paddingBlock: "0.5rem" }}>
            {data.description}
          </p>
          <div className="post-img_div">
            {data.images.map((i) => (
              <img className="post-img" src={i} alt="" />
            ))}
          </div>
        </div>
        {isHover && <ReactionIcons />}
        <div className="post-footer">
          <div className="cta">
            <p
              className="btn"
              onMouseEnter={() => setIsHover(true)}
              // onPointerOut={() => setIsHover(false)}
            >
              <AiOutlineLike style={style} />
              Like
            </p>
            <p className="btn">
              <TfiComment
                style={{
                  fontSize: "1.2rem",
                  paddingRight: "0.4rem",
                }}
              />
              Comment
            </p>
            <p className="btn">
              <TbShare3 style={style} />
              Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookPost;
