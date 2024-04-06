import React, { useState } from "react";
import { Multiplier } from "./Multiplier";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultVal }) => {
  const [rowData, setRowData] = useState(
    defaultVal || {
      food: "",
      amount: "",
      multipliers: null

    }
  );
  // batch
  const [typeErrors, setTypeErrors] = useState("");
  const [foodError, setFoodError] = useState("");
  const [amountError, setAmountError] = useState("");

  const validateForm = () => {
    if (rowData.food !== "" && rowData.amount !== "") {
      setTypeErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(rowData)) {
        if (!value && value !== 0 & value !== null) {
          errorFields.push(key);
        }
      }
      setTypeErrors(errorFields.join(", "));
      return false;
    }
  };

  // useCallback to rpelace handleChange
  const handleChange = (e) => {
    setRowData({ ...rowData, [e.target.name]: e.target.value });
  };

  // useMemo -> to replace Multiplier
  const handleSubmitInitial = async(e) => {
    e.preventDefault();

    if (!validateForm()) return;

    var multiplyArray = await Multiplier(rowData.food, rowData.amount);

    if (multiplyArray.length === 0) {
      setFoodError(true);
      setAmountError(true);
      return;
    } else if (multiplyArray[0] === "amount") {
      setAmountError(true);
      setFoodError(false);
      return;
    } else if (multiplyArray[0] === "food") {
      setFoodError(true);
      setAmountError(false);
      return;
    }

    rowData.multiplierCa = multiplyArray[0];
    rowData.multiplierFe = multiplyArray[1];
    rowData.multiplierMg = multiplyArray[2];
    rowData.multiplierK = multiplyArray[3];
    rowData.multiplierZn = multiplyArray[4];
    rowData.multiplierVa = multiplyArray[5];
    rowData.multiplierVe = multiplyArray[6];
    rowData.multiplierVd = multiplyArray[7];
    rowData.multiplierVc = multiplyArray[8];
    rowData.multiplierVb12 = multiplyArray[9];

    onSubmit(rowData);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="food">Food</label>
            <input name="food" onChange={handleChange} value={rowData.food} />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount (g)</label>
            <input
              name="amount"
              onChange={handleChange}
              value={rowData.amount}
            />
          </div>
          {typeErrors && <div className="error">{`Please include: ${typeErrors}`}</div>}
          {foodError && <div className="error">{`Invalid food choice. Please try again.`}</div>}
          {amountError && <div className="error">{`Invalid amount choice. Please try again.`}</div>}
          <button type="submit" className="btn" onClick={handleSubmitInitial}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};