import React from "react";
import PropTypes from "prop-types";
import style from "./TransactionHist.module.css";
import { Fragment } from 'react';


const TransactionHistory = ({id, items}) => {

  return(
    <>
    <table className={style.transactionHistory}>
    <thead>
      <tr>
        <th className={style.h1Type}>Type</th>
        <th className={style.h1Amount}>Amount</th>
        <th className={style.h1Currency}>Currency</th>
      </tr>
    </thead>

    {items.map((elem) => {
      return(
        <Fragment key={elem.id}>
    <tbody>
      <tr>
        <td className={style.tdType}>{elem.type}</td>
        <td className={style.tdAmount}>{elem.amount}</td>
        <td className={style.tdCurrency}>{elem.currency}</td>
      </tr>
      <tr>

      </tr>
    </tbody>
    </Fragment>
      )
    })}
  </table>
</>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;