import Card from "./Card";

import { products } from "../constants";

const Main = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};

export default Main;
