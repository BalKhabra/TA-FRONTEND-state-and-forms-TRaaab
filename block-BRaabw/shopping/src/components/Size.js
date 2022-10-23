import React from 'react'
import Product from "./Product"
import data from "./data.json";


class Size extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sizes: [],
            order: "select",
        };
    }
    //to get dynamic size options handleClick is used
    //handleOrder is used for adding to cart/ordering
    handleClick = (size) => {
        if (this.state.sizes.includes(size)) {
            this.setState((prevState) => ({
                sizes: prevState.sizes.filter((s) => s !== size),
            }));
        } else {
            this.setState((prevState) => ({
                sizes: prevState.sizes.concat(size),
            }))
        }
    };
    handleOrder = (order, sizes, products) => {
    let sortedProduct = [...products];
    if(sizes.length > 0) {
        sortedProduct = sortedProduct.filter((p) => {
            for (let size of sizes) {
                if (p.availableSizes.includes(size)) {
                    return true;
                }
            }
        });
    }

    if (order === "highest") {
        sortedProduct = sortedProduct.sort((a, b) => a.price - b.price);
      }
      if (order === "lowest") {
        sortedProduct = sortedProduct.sort((a, b) => b.price - a.price);
      }
      return sortedProduct;
};
    handleChange = (event) => {
    this.setState({ order: event.target.value });
  };
render(){
    let { order } = this.state;
    const products = this.handleOrder(order, this.state.sizes, data.products)
    let sizes = data.products.reduce((acc, cv) => {
        acc = acc.concat(cv.availableSizes);
        return acc;
    }, [])
    const unique = [...new Set(sizes)];
    //this first div creates the product-filter dropdown
    //the second div section is the entire main-page for product, size, cart
    return(
        <>
        <div className='flex even'>
            <h3>{products.length}Products found</h3>
            <form>
                <label htmlFor="order">Order By:</label>
                <select onChange={this.handleChange}>
                    <option value="select">Select</option>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                </select>
            </form>
        </div>
        <div className='flex'>
        <aside className='flex-30'>
            <div className='grid'>
                {unique.map((size, i) => (
                    <p key={i} className={this.state.sizes.includes(size) ? "circle active" : "circle"}
                    onClick={() => this.handleClick(size)}>
                        {size}
                    </p>
                ))}
            </div>
        </aside>
        <Product item={products} />
        </div>
        </>
    )
}
}


export default Size;
