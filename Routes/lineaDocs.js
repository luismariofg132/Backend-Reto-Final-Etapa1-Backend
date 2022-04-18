/**
 * @swagger
 * components:
 *  schemas:
 *      Linea:
 *          type: object
 *          properties:
 *
 *             activa:
 *                 type: enum
 *                 description: Estado de la linea, si esta activa o no, solo puede ser si o no
 *             descripcion_linea:
 *                 type: string
 *                 description: Descripcion de la linea
 *             id_marca:
 *                 type: number
 *                 description: Identificador de la marca a la cual pertenece la linea, la marca debe existir
 *             nombre_linea:
 *                 type: string
 *                 description: Nombre de la linea
 *
 *          required:
 *             - activa
 *             - descripcion_linea
 *             - id_marca
 *             - nombre_linea
 *          example:
 *             activa: si
 *             descripcion_linea: linea de coches
 *             id_marca: 1
 *             nombre_linea: coche
 *
 */
// Traer todas las lineas
/**
 * @swagger
 * /api/linea:
 *  get:
 *      summary: Trae todas las lineas
 *      tags: [Linea]
 *      responses:
 *          200:
 *              description: Traer todas las lineas
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Linea'
 *
*/
// Trae la cantidad de lineas activas e inactivas
/**
 * @swagger
 * /api/linea/actividad:
 *  get:
 *      summary: Trae todas las lineas activas e inactivas
 *      tags: [Linea]
 *      responses:
 *          200:
 *              description: Trae un json con las lineas activas e inactivas
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                        activa:
 *                          type: number
 *                        inactiva:
 *                          type: number
 *                     example:
 *                         activa: 2
 *                         inactiva: 1
 *
*/
// Crear una nueva linea
/**
 * @swagger
 * /api/linea:
 *  post:
 *      summary: Crea una nueva linea
 *      tags: [Linea]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Linea'
 *      responses:
 *          200:
 *              description: Linea creada
*/
// editar una linea con put
/**
 * @swagger
 * /api/linea/id_linea:
 *  put:
 *      summary: Edita una linea pasandole el id por parametro
 *      tags: [Linea]
 *      parameters:
 *        - in: path
 *          name: id_linea
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
 *                   $ref: '#/components/schemas/Linea'
 *      responses:
 *          200:
 *              description: Traer todas las lineas
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Linea'
 *          400:
 *              description: Error en envio de datos por parte del cliente
 *          500:
 *              description: Error en el servidor
 *
 */
// editar una linea con patch
/**
 * @swagger
 * /api/linea/id_linea:
 *  patch:
 *      summary: Edita una linea pasandole el id por parametro
 *      tags: [Linea]
 *      parameters:
 *        - in: path
 *          name: id_linea
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
 *                   $ref: '#/components/schemas/Linea'
 *      responses:
 *          200:
 *              description: Traer todas las lineas
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Linea'
 *          400:
 *              description: Error en envio de datos por parte del cliente
 *          500:
 *              description: Error en el servidor
 *
 */
// Eliminar una linea
/**
 * @swagger
 * /api/linea/id_linea:
 *  delete:
 *      summary: Elimina una linea por el id
 *      tags: [Linea]
 *      parameters:
 *        - in: path
 *          name: id_linea
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la linea
 *      responses:
 *          200:
 *              description: Linea eliminada
 *          500:
 *              description: Error en el servidor o el registro esta asociado a una linea foranea
 *
 */





