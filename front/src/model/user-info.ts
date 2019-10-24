export enum UserRole {
  ROLE_FIGHTER = 'ROLE_FIGHTER',
  ROLE_ADMIN = 'ROLE_ADMIN'
}

export interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  roles: UserRole[];
}
