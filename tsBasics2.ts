const object1 : {name:string , age:number} = {
  name: 'Divya',
  age: 20
};

const object2 : {id:number , male:boolean} = {
  id: 1313,
  male : false
};

const object3 : {name:string , rollNo:number} = {
  name: 'DivyaSai',
  rollNo : 25
};

const object4 : {name:string, male:boolean , id:number} = {
    name: 'Sai',
    male: true,
    id :1318
  };
function mergedFunction(a: {name:string , age:number}  , b: {id:number , male:boolean}, c:{name:string , rollNo:number}, d:{name:string, male:boolean , id:number})
{
const mergedObjects = {
  ...a,
  ...b,
  ...c,
  ...d,
};
console.log(mergedObjects);
}
mergedFunction(object1, object2, object3,object4)