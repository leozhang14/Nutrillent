import { useState } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
    setTotal(
      rows.map((currRow, idx) => {
        if (idx === targetIndex) {
          var totalRow = [];
          totalRow.push(total[0] - (Math.round(currRow.amount * 10) / 10));
          totalRow.push(total[1] - (Math.round((currRow.amount * currRow.multiplierCa) * 10) / 10));
          totalRow.push(total[2] - (Math.round((currRow.amount * currRow.multiplierFe) * 10) / 10));
          totalRow.push(total[3] - (Math.round((currRow.amount * currRow.multiplierMg) * 10) / 10));
          totalRow.push(total[4]- (Math.round((currRow.amount * currRow.multiplierK) * 10) / 10));
          totalRow.push(total[5] - (Math.round((currRow.amount * currRow.multiplierZn) * 10) / 10));
          totalRow.push(total[6] - (Math.round((currRow.amount * currRow.multiplierVa) * 10) / 10));
          totalRow.push(total[7] - (Math.round((currRow.amount * currRow.multiplierVb12) * 10) / 10));
          totalRow.push(total[8] - (Math.round((currRow.amount * currRow.multiplierVc) * 10) / 10));
          totalRow.push(total[9] - (Math.round((currRow.amount * currRow.multiplierVd) * 10) / 10));
          totalRow.push(total[10] - (Math.round((currRow.amount * currRow.multiplierVe) * 10) / 10));
          total.idx = idx;
          return totalRow
        } else {
          return null;
        }
      })[total.idx]
    )
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmitFinal = (newRow) => {
    if (rowToEdit === null) {
      setRows([...rows, newRow])
      setTotal(total.map((nutrient, idx) => {
        if (idx === 0) {
          return nutrient + (Math.round(newRow.amount * 10) / 10);
        } else if (idx === 1) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierCa) * 10) / 10);
        } else if (idx === 2) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierFe) * 10) / 10);
        } else if (idx === 3) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierMg) * 10) / 10);
        } else if (idx === 4) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierK) * 10) / 10);
        } else if (idx === 5) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierZn) * 10) / 10);
        } else if (idx === 6) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierVa) * 10) / 10);
        } else if (idx === 7) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierVb12) * 10) / 10);
        } else if (idx === 8) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierVc) * 10) / 10);
        } else if (idx === 9) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierVd) * 10) / 10);
        } else if (idx === 10) {
          return nutrient + (Math.round((newRow.amount * newRow.multiplierVe) * 10) / 10);
        } else {return [];}
      }))
    } else {
      setTotal(
        rows.map((currRow, idx) => {
          if (idx === rowToEdit) {
            var totalRow = [];
            totalRow.push(total[0] + (Math.round(newRow.amount * 10) / 10) - (Math.round(currRow.amount * 10) / 10));
            totalRow.push(total[1] + (Math.round((newRow.amount * newRow.multiplierCa) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierCa) * 10) / 10));
            totalRow.push(total[2] + (Math.round((newRow.amount * newRow.multiplierFe) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierFe) * 10) / 10));
            totalRow.push(total[3] + (Math.round((newRow.amount * newRow.multiplierMg) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierMg) * 10) / 10));
            totalRow.push(total[4] + (Math.round((newRow.amount * newRow.multiplierK) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierK) * 10) / 10));
            totalRow.push(total[5] + (Math.round((newRow.amount * newRow.multiplierZn) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierZn) * 10) / 10));
            totalRow.push(total[6] + (Math.round((newRow.amount * newRow.multiplierVa) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierVa) * 10) / 10));
            totalRow.push(total[7] + (Math.round((newRow.amount * newRow.multiplierVb12) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierVb12) * 10) / 10));
            totalRow.push(total[8] + (Math.round((newRow.amount * newRow.multiplierVc) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierVc) * 10) / 10));
            totalRow.push(total[9] + (Math.round((newRow.amount * newRow.multiplierVd) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierVd) * 10) / 10));
            totalRow.push(total[10] + (Math.round((newRow.amount * newRow.multiplierVe) * 10) / 10) - (Math.round((currRow.amount * currRow.multiplierVe) * 10) / 10));
            total.idx = idx;
            return totalRow
          } else {
            return null;
          }
        })[total.idx]
      )
      setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) {
              return currRow;}
            return newRow;
          })
        );}
  };

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" CrossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lemon&display=swap"
        rel="stylesheet"
      />
      <h1>Nutrillent</h1>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} total={total}/>
      <br></br>
      <button onClick={() => setModalOpen(true)} className="btn">
        Add Entry
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmitFinal}
          defaultVal={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
      <p>
        <b>Nutrillent</b> is a USDA-based online nutrient tracker targeted
        towards those suffering from vitamin and mineral deficiencies.
        Deficiencies are some of the most common healthcare issues in the world
        today, with over two billion people worldwide suffering from at least
        one vitamin or mineral deficiency. Among these, Iron, Zinc, Vitamin D,
        Vitamin A, and Vitamin B12 are the most prevalent. At <b>Nutrillent</b>,
        our goal is to tackle malnourishment and help you ensure you are getting
        the vitamins and minerals you need, without the need for pills and
        medication.
        <br></br>
        <b>Disclaimer: Nutrillent</b> is <b>NOT</b> an alternative
        to a professional medical prescription. For severe nutritional
        deficiencies and disorders, please consult a medically licensed
        professional.
        <br></br>
        <span className="custom">Originally built for Hack the Pulse 2022.</span>
        <div className="centered-container">
          <a href="https://github.com/lzboy14/Nutrillent" aria-label="GitHub" className="github-link" target="_blank" rel="noreferrer"><i class="fa fa-github" aria-hidden="true"></i></a>
      </div>
      </p>
    </div>
  );
}

export default App;
