document.getElementById('Myform ').addEventListener('submit ', function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
});

// let form = document.querySelector(".productForm")


// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   let data = new FormData(e.target)
//   let obj ={}
// for (const [key, value] of data) {
//     obj[key] = value
//   }

//   let acccountArrayStr = localstorage.getItem("acccountArray")
//   let acccountArray = acccountArrayStr ? JSON.parse(acccountArraystr) : []
//   acccountArray.push(obj)
//   localstorage.setItem("acccountArray", JSON.stringify(acccountArray))
// })

