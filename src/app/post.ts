export interface Post {
  id: string;
  link: string;
  title: string;
  body: string;
}

export interface Master {
  id: number;
  a_iden_string: string;
  b_iden_string: string;
  reg_place: string;
  dca: number;
  cca: number;
  colo: string;
  name: string;
  cc: string;
  my: string;
  ctr: string;
  dt: string;
}

export interface postResult {
  result: string
}
