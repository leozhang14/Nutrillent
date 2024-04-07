import React from "react";

import { BsFillXSquareFill, BsPencilSquare } from "react-icons/bs";

import "./Table.css";

export const Table = ({rows, deleteRow, editRow, total}) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Food</th>
            <th>Amount (g)</th>
            <th>Calcium</th>
            <th>Iron</th>
            <th>Magnesium</th>
            <th>Potassium</th>
            <th>Zinc</th>
            <th>Vitamin A</th>
            <th>Vitamin B12</th>
            <th>Vitamin C</th>
            <th>Vitamin D</th>
            <th>Vitamin E</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.food}</td>
                <td>{(row.amount).toString().concat(" g")}</td>
                <td>{(Math.round((row.amount * row.multiplierCa) * 10) / 10).toString().concat(" mg")}</td>
                <td>{(Math.round((row.amount * row.multiplierFe) * 10) / 10).toString().concat(" mg")}</td>
                <td>{(Math.round((row.amount * row.multiplierMg) * 100) / 100).toString().concat(" mg")}</td>
                <td>{(Math.round((row.amount * row.multiplierK) * 10) / 10).toString().concat(" mg")}</td>
                <td>{(Math.round((row.amount * row.multiplierZn) * 100) / 100).toString().concat(" mg")}</td>
                <td>{(Math.round((row.amount * row.multiplierVa) * 100) / 100).toString().concat(" mcg RAE")}</td>
                <td>{(Math.round((row.amount * row.multiplierVb12) * 100) / 100).toString().concat(" mcg")}</td>
                <td>{(Math.round((row.amount * row.multiplierVc) * 100) / 100).toString().concat(" mg")}</td>
                <td>{(Math.round((row.amount * row.multiplierVd) * 100) / 100).toString().concat(" mcg")}</td>
                <td>{(Math.round((row.amount * row.multiplierVe) * 100) / 100).toString().concat(" mg")}</td>
                <td className="expand" align="center">
                  <span className="actions">
                    <BsFillXSquareFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsPencilSquare
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
          <tr>
            <td><b>Total</b></td>
            <td>{(Math.round((total[0]) * 10) / 10).toString().concat(" g")}</td>
            <td>{(Math.round((total[1]) * 10) / 10).toString().concat(" mg")}</td>
            <td>{(Math.round((total[2]) * 10) / 10).toString().concat(" mg")}</td>
            <td>{(Math.round((total[3]) * 10) / 10).toString().concat(" mg")}</td>
            <td>{(Math.round((total[4]) * 10) / 10).toString().concat(" mg")}</td>
            <td>{(Math.round((total[5]) * 10) / 10).toString().concat(" mg")}</td>
            <td>{(Math.round((total[6]) * 10) / 10).toString().concat(" mcg RAE")}</td>
            <td>{(Math.round((total[7]) * 10) / 10).toString().concat(" mcg")}</td>
            <td>{(Math.round((total[8]) * 10) / 10).toString().concat(" mg")}</td>
            <td>{(Math.round((total[9]) * 10) / 10).toString().concat(" mcg")}</td>
            <td>{(Math.round((total[10]) * 10) / 10).toString().concat(" mg")}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};