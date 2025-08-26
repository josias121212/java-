$(document).ready(function () {

    $("#btnAgregar").click(function () {
        const nombre = $("#nombre").val().trim();
        const cedula = $("#cedula").val().trim();
        const correo = $("#correo").val().trim();
        const direccion = $("#direccion").val().trim();

       
        if (!nombre || !cedula || !correo || !direccion) {
            alert("Por favor, llena todos los campos.");
            return;
        }

        
        const nuevaFila = `
            <tr>
                <td>${nombre}</td>
                <td>${cedula}</td>
                <td>${correo}</td>
                <td>${direccion}</td>
                <td>
                    <button class="btn btn-danger btn-sm btnEliminar">
                        <i class="bi bi-trash"></i> Eliminar
                    </button>
                </td>
            </tr>
        `;

       
        $("#tablaDatos").append(nuevaFila);

        
        $("#nombre, #cedula, #correo, #direccion").val("");
    });

   
    $(document).on("click", ".btnEliminar", function () {
        $(this).closest("tr").fadeOut(300, function () {
            $(this).remove();
        });
    });

});
