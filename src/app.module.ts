import { UtilisateurService } from './utilisateur/utilisateur.service';
import { UtilisateurController } from './utilisateur/utilisateur.controller';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { HealthcheckService } from './healthcheck/healthcheck.service';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    HealthcheckModule,

    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),

    /* GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }), */

  ],
  controllers: [
    UtilisateurController,
    AppController],
  providers: [
    UtilisateurService,
    AppService,
  PrismaService,
],
})
export class AppModule { }
