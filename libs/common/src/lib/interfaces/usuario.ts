/**
 * Usuário do site.
 */
export interface Usuario {

  /**
   * Identificador único do usuário.
   */
  _id: number;

  /**
   * Nome de usuário.
   */
  username: string;

  /**
   * Senha plana do usuário.
   *
   * TO DO: refatorar! Falha gravíssima de segurança!
   */
  password: string;

  /**
   * `true` se o usuário for administrador.
   */
  administrador: boolean;

}
