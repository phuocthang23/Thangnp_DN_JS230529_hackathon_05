import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const Round = () => {
  const [data, setData] = useState([]);
  // const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3537/api")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  }, []);

  console.log(data);

  const game = data.map((data) =>
    data.game.map((item) => item.players.map((name) => name.name))
  );
  console.log(game);

  return (
    <div className="table">
      <table>
        {game.map((render) => {
          <tr key={render.index}>
            <th>#</th>
            <th>{render[0]}</th>
            <th>{render[1]}</th>
            <th>{render[2]}</th>
            <th>{render[3]}</th>
          </tr>;
        })}

        <tr className="second">
          <td>Sum of scores(20)</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Round 1</td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="number" />
          </td>
        </tr>
      </table>
      <button>Add round</button>
    </div>
  );
};

export default Round;
