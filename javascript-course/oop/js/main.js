// class Introduction{
//     name = "John Doe";

//     constructor(username){
//         console.log("Object created" +username)
//     }

//     info(){
//         return this.name;
//     }

//     add(x,y){
//         return x+y
//     }
// }

// let obj = new Introduction('ram');
// // console.log(obj.info());
// console.log(obj.add(2,3));

// inheritance
// bind method
// call method
// apply method

// module export

// regex

// promise: async,await

// htta request: fetch,ajax,axios
// packages: npm, yarn,pnpm
// typescript

// webpack

// reactjs: 

// express


// class Laptop{

//     constructor(name){
//             console.log("Laptop",name);
//     }
  
// }
// class Dell extends Laptop{
//     constructor(name,price){
//         console.log("Dell");
//         console.log(price)
//         super(name);
//     }
// }

// let obj = new Dell('dell',40000);


// what is static method
// static method is a method that is called 
// on the class itself, not on the object instance.


// class Dell {
//    static info(){
//         console.log("Dell");
//     }
// }

// Dell.info();

// let obj = new Dell()
// obj.info();


// class Laptop{
//     products=[
//         { id:1, name:'dell', price:40000, quantity:2 },
//         { id:2, name:'hp',  price:50000,quantity:3 },   
//     ]
//     show(){
//         console.log(this.products);
//     }
//     add(new_item){  
//         this.products.push(new_item);
//         console.log(this.products);
//     }
//     remove(id){  
//         this.products = this.products.filter((item)=>item.id !== id);
//         console.log(this.products);
//     }
//     update(id,quantity){  
//         this.products = this.products.map((item)=>{
//             if(item.id === id){
//                 item.quantity = quantity;
//             }
//             return item;
//         });
//         console.log(this.products);
//     }
// }
// let obj = new Laptop();
// let items ={
//     id:3,
//     name:'lenovo',
//     price:60000,
//     quantity:4
// }

// obj.add(items);

// obj.remove(1);



// class scope
// public, private, protected

// class Laptop{
//      #x=10

//     //  getX(){
//     //     console.log(this.#x);
//     //  }

//     //  setX(value){
//     //      this.#x = value;
//     //  }

//     get x(){
//         return this.#x;
//     }
//     set x(value){
//         this.#x = value;
//     }

// }

// let obj = new Laptop();
// console.log(obj.x);
// obj.setX(20);
// obj.getX();
// obj.x = 20;
// console.log(obj.x);


// bind method
// what is bind method
// bind method is a method that is called
// to bind the object to the function

// let obj = {
//     name:'ram',
//     age:20
// }

// function info(){
//     console.log(this.name);
// }

// let binded = info.bind(obj);
// binded();

// call method
// what is call method
// call method is a method that is called
// to bind the object to the function
// and also called the function
// let obj = {
//     name:'ram',
//     age:20
// }

// function info(){
//     console.log(this.name);
// }

// info.call(obj);
// apply method

// what is apply method
// apply method is a method that is called
// to bind the object to the function
// and also called the function

// let obj = {
//     name:'ram',
//     age:20
// }

// function info(){
//     console.log(this.name);
// }

// info.apply(obj);
