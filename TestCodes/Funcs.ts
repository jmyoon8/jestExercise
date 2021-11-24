import Data from "./Data";

export const findAll = () => {
  return Data.user;
};
export const create = (user: string) => {
  Data.user.push(user);
};
export const destroy = (user: string) => {
  Data.user.splice(Data.user.indexOf(user), 1);
};
export const modify = (targetUser: string, modifyUserName: string) => {
  const findIndex = Data.user.findIndex((item) => item === targetUser);
  Data.user[findIndex] = modifyUserName;
};
