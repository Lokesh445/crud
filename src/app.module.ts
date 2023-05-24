import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todos/todo.module';
import { AuthModule } from './auth/auth.module';



//connectivity with SQL Datbase
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lokesh@123',
      database: 'my_crud',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),

    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
