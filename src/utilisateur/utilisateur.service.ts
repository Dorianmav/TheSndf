/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Prisma, Utilisateur } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UtilisateurService {
    constructor(
        private prisma: PrismaService,
    ) { }

    async utilisateur(
        utilisateurWhereUniqueInput: Prisma.UtilisateurWhereUniqueInput
    ) {
        return this.prisma.utilisateur.findUnique({
            where: utilisateurWhereUniqueInput
        })
    }

    async getAllUtilisateurs(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UtilisateurWhereUniqueInput;
        where?: Prisma.UtilisateurWhereInput;
        orderBy?: Prisma.UtilisateurOrderByWithRelationInput;
    }): Promise<Utilisateur[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.utilisateur.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createUtilisateur(data: Prisma.UtilisateurCreateInput): Promise<Utilisateur> {
        return this.prisma.utilisateur.create({
            data
        })
    }

    async updateUtilisateur(params: {
        where: Prisma.UtilisateurWhereUniqueInput;
        data: Prisma.UtilisateurUpdateInput;
    }): Promise<Utilisateur> {
        const { where, data } = params;
        return this.prisma.utilisateur.update({
            data,
            where,
        })
    }

}
