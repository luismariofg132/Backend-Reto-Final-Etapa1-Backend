/**
 * @swagger
 * components:
 *  schemas:
 *      Vehiculo:
 *          type: object
 *          properties:
 *              placa:
 *                  type: string
 *                  description: Placa del vehiculo
 *              modelo:
 *                  type: number
 *                  description: Modelo del vehiculo
 *              fv_seguro:
 *                  type: string
 *                  description: Fecha de vencimiento del seguro, en el formato AAAA-MM-DD
 *              fv_tecnicomecanica:
 *                  type: string
 *                  description: Fecha de vencimiento de la tecnicomecanica, en el formato AAAA-MM-DD
 *              id_linea:
 *                  type: number
 *                  description: Identificador de la linea, esta debe de existir en la base de datos
 *          required:
 *              - placa
 *              - modelo
 *              - fv_seguro
 *              - fv_tecnicomecanica
 *              - id_linea
 *          example:
 *              placa: ABC123
 *              modelo: 2019
 *              fv_seguro: 2019-12-31
 *              fv_tecnicomecanica: 2019-12-31
 *              id_linea: 1
 */

// Traer todos los vehiculos
/**
 * @swagger
 * /api/vehiculo:
 *  get:
 *      summary: Trae todos los vehiculos
 *      tags: [Vehiculo]
 *      responses:
 *          200:
 *              description: Traer todas los vehiculos
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Vehiculo'
 *
*/

// Crear un nuevo vehiculo
/**
 * @swagger
 * /api/vehiculo:
 *  post:
 *      summary: Crea un nuevo vehiculo
 *      tags: [Vehiculo]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Vehiculo'
 *      responses:
 *          200:
 *              description: Vehiculo creado
 *          400:
 *              description: Vehiculo no creado por error en el envio de datos
 *          500:
 *              description: Vehiculo no creado por error en el servidor
*/
// editar una linea con put
/**
 * @swagger
 * /api/vehiculo/placa:
 *  put:
 *      summary: Edita un vehiculo pasandole la placa por parametro
 *      tags: [Vehiculo]
 *      parameters:
 *        - in: path
 *          name: placa
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador del vehiculo
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Vehiculo'
 *      responses:
 *          200:
 *              description: Traer todos los vehiculos
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Vehiculo'
 *          400:
 *              description: Error en envio de datos por parte del cliente
 *          500:
 *              description: Error en el servidor
 *
 */

// editar un vehiculo con patch
/**
 * @swagger
 * /api/vehiculo/placa:
 *  patch:
 *      summary: Edita un vehiculo pasandole la placa por parametro
 *      tags: [Vehiculo]
 *      parameters:
 *        - in: path
 *          name: placa
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador del vehiculo
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Vehiculo'
 *      responses:
 *          200:
 *              description: Traer todos los vehiculos
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Vehiculo'
 *          400:
 *              description: Error en envio de datos por parte del cliente
 *          500:
 *              description: Error en el servidor
 *
 */


// Eliminar un vehiculo
/**
 * @swagger
 * /api/vehiculo/placa:
 *  delete:
 *      summary: Elimina un vehiculo pasandole la placa por parametro
 *      tags: [Vehiculo]
 *      parameters:
 *        - in: path
 *          name: placa
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador del vehiculo
 *      responses:
 *          200:
 *              description: Vehiculo eliminado
 *          500:
 *              description: Error en el servidor
 *
 */
 // Modelo Mayor y Menor
/**
 * @swagger
 * /api/vehiculo/MinMax:
 *     get:
 *         summary: Trae el modelo mayor y menor de los vehiculos
 *         tags: [Vehiculo]
 *         responses:
 *              200:
 *                  description: Modelo mayor y menor de los vehiculos
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  Modelo_max:
 *                                      type: number
 *                                      description: Modelo mayor
 *                                  Modelo_min:
 *                                      type: number
 *                                      description: Modelo menor
 *                              example:
 *                                  Modelo_max: 2019
 *                                  Modelo_min: 1998
 */

// Consulta por el rango de vencimiento del seguro
/**
 * @swagger
 * /api/vehiculo/fechaSeguro:
 *  post:
 *      summary: Consulta los vehiculos por el rango de vencimiento del seguro
 *      tags: [Vehiculo]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      fecha_inicio:
 *                          type: string
 *                          format: date
 *                      fecha_fin:
 *                          type: string
 *                          format: date
 *      responses:
 *          200:
 *              description: Vehiculos por el rango de vencimiento del seguro en un json
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Vehiculo'
 */
// Suma modelos
/**
 * @swagger
 * /api/vehiculo/sumarModelo:
 *  get:
 *      summary: Suma los modelos de los vehiculos
 *      tags: [Vehiculo]
 *      responses:
 *          200:
 *              description: Suma de los modelos de los vehiculos
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: string
 *                          example: "14069"
 */

// Promediar Modelos
/**
 * @swagger
 * /api/vehiculo/promediarModelo:
 *  get:
 *      summary: Promedio de los modelos de los vehiculos
 *      tags: [Vehiculo]
 *      responses:
 *          200:
 *              description: Promedio de los modelos de los vehiculos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                      example: "2009.8571"
 */