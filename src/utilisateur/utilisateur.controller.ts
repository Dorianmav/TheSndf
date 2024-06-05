/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateur')
export class UtilisateurController { 
    constructor(private readonly utilisateurService: UtilisateurService) {
    }

    @Get()
    getAllUtilisateurs() {
        return "ok";
    }

    @Get(':id')
    getUtilisateur() {
        return "ok";
    }

    @Get('email/:email')
    getUtilisateurByEmail() {
        return "ok";
    }

    @Post()
    createUtilisateur() {
        return "ok";
    }

}