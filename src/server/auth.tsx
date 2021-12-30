export const TOKEN_KEY = '&appMarcos-token';
export const ID_USUARIO = '&id-usuario';
export const NOME_USUARIO = '&nome-usuario';

export const login = (token:any) => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.clear();

export const setIdUsuario = (id:any) => localStorage.setItem(ID_USUARIO, id);
export const getIdUsuario = () => localStorage.getItem(ID_USUARIO);

export const setNomeUsuario = (nome:any) => localStorage.setItem(NOME_USUARIO, nome);
export const getNomeUsuario = () => localStorage.getItem(NOME_USUARIO);

export const getToken = () => localStorage.getItem(TOKEN_KEY);