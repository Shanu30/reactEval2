import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    return fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const changePageTo = (num) => {
    if (num <= 1) {
      setPage(1);
      return;
    }
    setPage(num);
  };
  const perPage = 2;

  console.log(data);
  return (
    <>
      <div>
        {data
          .filter((_, i) => i >= (page - 1) * perPage && i < page * perPage)
          .map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                cast={item.cast}
                category={item.category}
              />
            );
          })}
      </div>

      <div>
        <Pagination
          currentPage={page}
          onClickCallback={(page) => changePageTo(page)}
          total={data.length}
        />
      </div>
    </>
  );
}
