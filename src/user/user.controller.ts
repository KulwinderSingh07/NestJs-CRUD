import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserdto } from './dto';
import { EditUserdto } from './dto/Edit-user.dto';

@Controller('user')
export class UserController {
    constructor(private Userservice:UserService){}

    @Post()
    create_user(@Body() dto:CreateUserdto){
        return this.Userservice.PostUser(dto)
    }

    @Get()
    get_users(){
        return this.Userservice.GetAllUsers()
    }

    @Get(":id")
    get_user_id(@Param("id") id:string){
        return this.Userservice.GetUserBy_Id(id)
        
    }

    @Patch(":id")
    update_user(@Body() dto:EditUserdto,@Param("id") id:string){
        // console.log(id)
        return this.Userservice.UpdateUser(dto,id)

    }

    @Delete()
    delte_user(@Query("id") id:string){
        return this.Userservice.DeletParticularUser(id)

    }
}
