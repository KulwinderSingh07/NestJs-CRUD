import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from 'src/schemas/user.schema';

@Module({
    imports:[MongooseModule.forFeature([{name:"UserModel",schema:UsersSchema}])],
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule {}
