import { All, Injectable } from '@nestjs/common';
import { CreateUserdto, EditUserdto } from './dto';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as argon from "argon2"

@Injectable()
export class UserService {
    constructor(@InjectModel("UserModel") private UserModel:Model<User>){}
  async PostUser(dto:CreateUserdto){
    try{
        dto.Password=await argon.hash(dto.Password)
       const Userdata=await this.UserModel.create(dto)
       return {
        Created_User:Userdata
       }
    }catch(err){
        return {
            message:err.message
        }
    }
    }

    async GetAllUsers(){try{
        const AllUsers=await this.UserModel.find()
        return{
            Users:AllUsers
        }
    }
    catch(err){
        return{
            message:err.message
        }
    }
    }

    async GetUserBy_Id(id:string){
        try{
        const Userdata=await this.UserModel.findById(id)
        return{
            Userdata
        }
    }
    catch(err){
        return{
            message:err.message
        }
    }
    }

    async UpdateUser(dto:EditUserdto,id:string){
        try{
            // console.log(id)
        const Userdata=await this.UserModel.findByIdAndUpdate(id,dto)
        return {
            Userdata
        }
    }catch(err){
        return{
            message:err.message
        }
    }

    }

    async DeletParticularUser(id:string){
        try{
        await this.UserModel.findByIdAndDelete(id)
        return {
            deleted:true
        }
    }catch(err){
        return {
            message:err.message
        }
    }
    }

}
