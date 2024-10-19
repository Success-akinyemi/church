import Product from "./Product";

function Products({ data, quantityToDisplay, slug, pagination, noPerPage }) {

    const productsToDisplay = quantityToDisplay ? data.slice(0, quantityToDisplay) : data;

  return (
    <div className="flex items-center justify-center gap-3 small-pc:mb-4 flex-wrap w-full">
        {
            productsToDisplay?.map((item, idx) => (
                <Product key={idx} data={item} />
            ))
        }
    </div>
  )
}

export default Products