import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){}


  async create(createUsuarioDto: CreateUsuarioDto) {

    const validateEmail = await this.usuarioRepository.findOneBy({email: createUsuarioDto.email});

    if(validateEmail){
      return { message: 'Este Email já Existe!' };
    }

    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  findAll() {
 return this.usuarioRepository.find({
      select: ['id', 'name', 'email'],
 });
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: { id },
      select: ['id', 'name', 'email'],
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}
