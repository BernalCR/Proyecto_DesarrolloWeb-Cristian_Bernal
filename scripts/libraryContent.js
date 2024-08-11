//Toast que sale cuando se agrega un producto
const pAddedToast = () =>{
    Toastify({
      text: "Product added",
      duration: 2000,
      close: true,
      position: "right",
      offset: { 
          y: 65 
        },
      stopOnFocus: true, 
      style: {
          background: "#fff",
          color: "#000",
          boxShadow: "1px 0px 4px 1px #0000009e",
          borderLeft: "4px solid #16c60c",
          padding: "10px 15px 12px 15px",
      }
    }).showToast();
  }
  
  //Toast que indica que el producto esta agotado
  const outStockToast = () =>{
    Toastify({
      text: "Out of stock",
      duration: 2000,
      close: true,
      position: "right",
      offset: { 
          y: 65 
        },
      stopOnFocus: true, 
      style: {
          background: "#fff",
          color: "#000",
          boxShadow: "1px 0px 4px 1px #0000009e",
          borderLeft: "4px solid #ff0000",
          padding: "10px 15px 12px 15px",
      }
    }).showToast();
  }
  
  //Alert que sale cuando la compra se ha finalizado
  const purchasecompleted = () =>{
    Swal.fire({
      icon: 'success',
      title: 'Thanks for your purchase',
      text: 'Come back soon!',
    })
  }
  