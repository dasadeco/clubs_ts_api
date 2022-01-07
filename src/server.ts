import express from 'express';
import { getClub, getResultado } from './database';

export default function createServer(){
    const app = express();
    let e:Error;
    app.get('/resultados/:equipo1/:equipo2', (req, res) =>{
        try{
            let team1 = getClub(req.params.equipo1);
            let team2 = getClub(req.params.equipo2);
            let match = getResultado(team1, team2);
            if (match.score){
                res.json({
                    date: match.date,
                    result: `${team1} ${match.score.ft[0]} - ${match.score.ft[1]} ${team2}`    
                })
            }else
                res.json({
                    date: match.date
                })
        }catch (err: unknown) {
                const e = err as ErrorEvent;
                res.status(400).json({
                    error: e.message
                })
        }
    });

    return app;
} 