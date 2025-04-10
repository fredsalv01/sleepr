import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserDocument } from "../models/user.schema";

const getCurrentUSerByContext = (context: ExecutionContext): UserDocument => {
  const request = context.switchToHttp().getRequest();
  return request.user;
}

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): any => getCurrentUSerByContext(context)
)