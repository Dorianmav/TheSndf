/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur as UtilisateurModel, } from '@prisma/client';

@Controller('utilisateur')
export class UtilisateurController {
    constructor(private readonly utilisateurService: UtilisateurService) {
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<UtilisateurModel> {
        return this.utilisateurService.utilisateur({ id: Number(id) });
    }

    

    @Post()
    async signupUser(
        @Body() userData: { email: string, password: string, username: string },
    ): Promise<UtilisateurModel> {
        return this.utilisateurService.createUtilisateur(userData);
    }


}