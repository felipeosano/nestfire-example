import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EnumFirebaseFunctionVersion, FirebaseHttps } from 'nestfire';

@FirebaseHttps(EnumFirebaseFunctionVersion.V1, { memory: '256MB' })
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
