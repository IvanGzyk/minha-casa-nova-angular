/**
 * Imoveis colocados a venda no site
 */

export interface Imovel {

  /**
   *identificador unico do imavel
   */
  _id: number;

  /**
   * descrição do imovel
   */
  descricao: string;

  /**
   * bairro onde se localiza o imovel
   */
  bairro: string;

  /**
   * cidade onde se localiza o imovel
   */
  cidade: string;

  /**
   * valor venal do imovel
   */
  valor: number;

  /**
   * metragem do imovel
   */
  mt: number;

  /**
   * Objeto contendo as fotos do imovel (o obj de conter principal com uma imagem principal e img com um array de imagens)
   */
  fotos: object;

}
