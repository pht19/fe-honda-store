
function renderByCategory(categoryname){
    let listProductHTML = document.getElementById("listProduct");
    const card = document.querySelector('.card');
    var data = {
        categoryName: categoryname,
        page: 1,
        pageSize : 15
    };
    fetch(API_BASE_URL + "/api/Product/category", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        const xeso = window.renderProducts(response.data);
        listProductHTML.innerHTML = xeso;
    })
    .catch(error => {
        console.error('Lỗi khi gọi API:', error);
    });
}


