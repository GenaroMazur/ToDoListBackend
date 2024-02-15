import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions: swaggerJSDoc.Options = {
    "swaggerDefinition": {
        "info": {
            "title": "Endpoints de 'Lista De Que-Haceres'",
            "description": "Todos los endpoints de el backend",
            "version": "v1.0.0"
        }
    },
    "apis": ["./../modules/*/infraestructure/http/*"]
};