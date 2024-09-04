import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCookie(@Query('user') user: string): string {
    return this.appService.getCookie(user);
  }

  @Get('/front')
  frontHTML() {
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cargar y Enviar Archivo</title>
</head>
<body>
    <h1>Cargar y Enviar un Archivo a la API</h1>
    <form id="uploadForm">
        <input type="file" id="fileInput" name="file" required />
        <button type="submit">Enviar</button>
    </form>

    <script>
        document.getElementById('uploadForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevenir el envío del formulario

            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];

            if (!file) {
                alert('Por favor, selecciona un archivo.');
                return;
            }

            const formData = new FormData();
            formData.append('file', file);

            // Enviar el archivo a la API
            fetch('https://tu-api.com/endpoint', { // Reemplaza con la URL de tu API
                method: 'POST',
                body: formData,
                headers: {
                    // 'Content-Type': 'multipart/form-data' se excluye porque fetch configura esto automáticamente
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Éxito:', data);
                alert('Archivo enviado correctamente');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el archivo.');
            });
        });
    </script>
</body>
</html>
`;
  }
}
