import React from "react";
import PropTypes from "prop-types";
import { Fragment } from 'react';
import style from "./Friend.module.css";

const FriendList = ({ id, friends }) => {
  return (
    <>
      {friends.map((elem) => {
        return (
          <Fragment key={elem.id}>
            <ul className="friend-list">
              <li className="item">
                <span className={elem.isOnline === true ? style.online : style.offline}>{elem.isOnline}</span>
                <img className="avatar" src={elem.avatar} alt="" width="48" />
                <p className="name">{elem.name}</p>
              </li>
            </ul>
          </Fragment>
        );
      })}
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
