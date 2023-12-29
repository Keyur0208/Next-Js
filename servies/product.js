export  default async function Products(){
   
     let data = await fetch ("https://dummyjson.com/products");
     data = await data.json();
     return data.products;    
}
