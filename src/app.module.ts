import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { QuestionsModule } from './questions/questions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Question } from './questions/entities/question.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

function isDev(env: string): boolean {
  return env == 'dev' || env == 'development';
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        // entities: [Question],
        synchronize: isDev(configService.get('NODE_ENV')),
      }),
      inject: [ConfigService],
    }),
    // QuestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}