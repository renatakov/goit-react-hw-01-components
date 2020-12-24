import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistic.module.css";

const Statistic = ({ title, stats }) => {
  return (
    <>
      <section className={classes.statisticses}>
        <h2 className={classes.title}>{title}</h2>

        <ul className={classes.statlist}>
          <li className={classes.item1}>
            <span className={classes.label}>{stats[0].label}</span>
            <span className={classes.percentage}>{stats[0].percentage} %</span>
          </li>
          <li className={classes.item2}>
            <span className={classes.label}>{stats[1].label}</span>
            <span className={classes.percentage}>{stats[1].percentage} %</span>
          </li>
          <li className={classes.item3}>
            <span className={classes.label}>{stats[2].label}</span>
            <span className={classes.label}>{stats[2].percentage} %</span>
          </li>
          <li className={classes.item4}>
            <span className={classes.label}>{stats[3].label}</span>
            <span className={classes.percentage}>{stats[3].percentage} %</span>
          </li>
        </ul>
      </section>
    </>
  );
};

Statistic.propTypes = {
  stats: PropTypes.array,
};

export default Statistic;
