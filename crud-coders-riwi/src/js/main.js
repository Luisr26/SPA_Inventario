document.addEventListener('DOMContentLoaded', () => {
    const save = document.querySelector('#btn-save');
    const ID = document.querySelector('#id-product');
    const tbody = document.querySelector('.container_master');


    window.onload = () => {
        fetch('http://localhost:3000/inventario', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                alert(`Productos Cargados Con Exito`);
                data.forEach(product => {
                    const tr = document.createElement('tr');

                    const tdId = document.createElement('td');
                    tdId.textContent = product.id;
                    tr.appendChild(tdId);

                    const tdProducto = document.createElement('td');
                    tdProducto.textContent = product.name;
                    tr.appendChild(tdProducto);

                    const tdCantidad = document.createElement('td');
                    tdCantidad.textContent = product.quantity;
                    tr.appendChild(tdCantidad);

                    const tdPrecio = document.createElement('td');
                    tdPrecio.textContent = product.price;
                    tr.appendChild(tdPrecio);

                    const tdOpciones = document.createElement('td');
                    const divBtns = document.createElement('div');
                    divBtns.className = 'td-btn';

                    const btnUpdate = document.createElement('button');
                    btnUpdate.textContent = 'Update';
                    btnUpdate.id = 'update-product';

                    const btnDelete = document.createElement('button');
                    btnDelete.textContent = 'Delete';
                    btnDelete.id = 'delete-product';

                    divBtns.appendChild(btnUpdate);
                    divBtns.appendChild(btnDelete);
                    tdOpciones.appendChild(divBtns);
                    tr.appendChild(tdOpciones);

                    tbody.appendChild(tr);
                });
            })
    }


    save.addEventListener("click", (e) => {
        e.preventDefault();

        const name = document.querySelector('#name-product').value;
        const quantity = document.querySelector('#quantity-product').value;
        const price = document.querySelector('#price-product').value;
        const id = ID.value;

        fetch('http://localhost:3000/inventario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                name,
                quantity,
                price
            })
        })
            .then(response => response.json())
            .then(data => {
                alert(`Usuario guardado: ${JSON.stringify(data)}`);
                const tr = document.createElement('tr');

                const tdId = document.createElement('td');
                tdId.textContent = id;
                tr.appendChild(tdId);

                const tdProducto = document.createElement('td');
                tdProducto.textContent = name;
                tr.appendChild(tdProducto);

                const tdCantidad = document.createElement('td');
                tdCantidad.textContent = quantity;
                tr.appendChild(tdCantidad);

                const tdPrecio = document.createElement('td');
                tdPrecio.textContent = price;
                tr.appendChild(tdPrecio);

                const tdOpciones = document.createElement('td');
                const divBtns = document.createElement('div');
                divBtns.className = 'td-btn';

                const btnUpdate = document.createElement('button');
                btnUpdate.textContent = 'Update';
                btnUpdate.id = 'update-product';

                const btnDelete = document.createElement('button');
                btnDelete.textContent = 'Delete';
                btnDelete.id = 'delete-product';

                divBtns.appendChild(btnUpdate);
                divBtns.appendChild(btnDelete);
                tdOpciones.appendChild(divBtns);
                tr.appendChild(tdOpciones);

                tbody.appendChild(tr);
            })
            .catch(error => {
                console.error(`Error al guardar: ${error}`);
            });
    });
});