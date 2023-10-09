import { factsReact } from "./factsReact";

const FactsList = () => {
  return factsReact.map((fact) => (
    <ul>
      <li>{fact}</li>
    </ul>
  ));
}

export default function Main() {
  return (
    <div className="main">
      <h1>Fun facts about React</h1>
      <FactsList />
    </div>
  );
}
