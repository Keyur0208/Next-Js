import React from "react";
import Products from "@/servies/product";

export default async function datafetch() {

    const product = await Products();
    console.log(product);

    return (
        <main className="container-fluid">
            <h1 className="text-center" >Product Datils</h1>
            <br></br>

            <div className="row" >
                {
                    product.map((item) => {
                        return (
                            <>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4 "  style={{height:"35rem"}} >
                                    <div className="card">
                                        <div className="product-image" >
                                            <img src={item.thumbnail} className="w-100" style={{height:'20rem'}} />
                                        </div>
                                        <div class="contentBox p-3">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                            <a href="#" class="buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </main>
    )
}

