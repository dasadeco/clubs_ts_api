import express from 'express';

export default function createServer(){
    const app = express();
    app.get('/resultados/:equipo1/:equipo2', (req, res) =>{
        res.send(`Resultados del ${req.params.equipo1} vs ${req.params.equipo2} `);
    });

    return app;
} 