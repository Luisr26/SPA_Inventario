document.addEventListener('DOMContentLoaded', () => {
    const save = document.querySelector('#btn-save');
    const ID = document.querySelector('#id-product');
    const name = document.querySelector('#name-product');
    const quantity = document.querySelector('#quantity-product');
    const price = document.querySelector('#price-product');
    const tbody = document.querySelector('.container_master');

    save.addEventListener("click", (e) => {
        e.preventDefault();

        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = ID.value;
        tr.appendChild(tdId);

        const tdProducto = document.createElement('td');
        tdProducto.textContent = name.value;
        tr.appendChild(tdProducto);

        const tdCantidad = document.createElement('td');
        tdCantidad.textContent = quantity.value;
        tr.appendChild(tdCantidad);

        const tdPrecio = document.createElement('td');
        tdPrecio.textContent = price.value;
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

        document.querySelector('tbody').appendChild(tr);

    });
});
