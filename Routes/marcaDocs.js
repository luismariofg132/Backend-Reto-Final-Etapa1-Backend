/**
 * @swagger
 * components:
 *  schemas:
 *      Marca:
 *          type: object
 *          properties:
 *              id_marca:
 *                  type: number autoincrement
 *                  description: Identificador de la marca
 *              nombre_marca:
 *                  type: string
 *                  description: Nombre de la marca
 *              activa:
 *                  type: enum
 *                  description: Marca activa o inactiva solo puede ser si o no
 *              descripcion_marca:
 *                  type: string
 *                  description: Descripcion de la marca
 *          required:
 *              - activa
 *              - descripcion_marca
 *              - nombre_marca
 *              - id_marca
 *          example:
 *              activa: si
 *              descripcion_marca: marca de coches lider en el mercado
 *              nombre_marca: Toyota
 *              id_marca: 45
 */

// Trae todas las marcas
/**
 * @swagger
 * /api/marca:
 *  get:
 *      summary: Trae todas las marcas
 *      tags: [Marca]
 *      responses:
 *          200:
 *              description: Traer todas las lineas
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Marca'
 *
 */
// Crear una nueva marca
/**
 * @swagger
 * /api/marca:
 *  post:
 *      summary: Crea una nueva marca
 *      tags: [Marca]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Marca'
 *      responses:
 *          200:
 *              description: Marca creada
 *          400:
 *              description: Marca no creada por error en el envio de datos
 *          500:
 *              description: Marca no creada por error en el servidor
*/
// editar una linea con put
/**
 * @swagger
 * /api/marca/id_marca:
 *  put:
 *      summary: Edita una marca pasandole el id por parametro
 *      tags: [Marca]
 *      parameters:
 *        - in: path
 *          name: id_marca
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la linea
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Marca'
 *      responses:
 *          200:
 *              description: Traer todas las marcas
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Marca'
 *          400:
 *              description: Error en envio de datos por parte del cliente
 *          500:
 *              description: Error en el servidor
 *
 */

// editar una marca con patch
/**
 * @swagger
 * /api/marca/id_marca:
 *  patch:
 *      summary: Edita una marca pasandole el id por parametro
 *      tags: [Marca]
 *      parameters:
 *        - in: path
 *          name: id_marca
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la marca
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Marca'
 *      responses:
 *          200:
 *              description: Traer todas las marcas
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Marca'
 *          400:
 *              description: Error en envio de datos por parte del cliente
 *          500:
 *              description: Error en el servidor
 *
 */

// Eliminar una marca
/**
 * @swagger
 * /api/marca/id_marca:
 *  delete:
 *      summary: Elimina una marca por el id
 *      tags: [Marca]
 *      parameters:
 *        - in: path
 *          name: id_marca
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la marca
 *      responses:
 *          200:
 *              description: marca eliminada
 *          500:
 *              description: Error en el servidor
 *
 */