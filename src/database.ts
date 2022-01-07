import { Club, Clubs, Match, Matches } from "./types";

const clubs: Clubs = require('../es.1.clubs.json');
const resultados : Matches = require('../es.1.json');


export function getClub(code: string): string{
    const club = clubs.clubs.find(club => (code === club.code) );
    if (!club){
        throw new Error("No existe este equipo");
    }
    return club.name;
}

export function getResultado(eq1:string, eq2:string): Match {
    const match = resultados.matches.find(match => {
        return eq1 == match.team1 && eq2 == match.team2 ;
    });
    if (!match){
        throw new Error("No existe este partido este año");
    }
    return match;
}