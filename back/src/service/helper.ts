import { ClienteType } from "../model/ClienteType";

function calcularDistancia(ponto1:ClienteType, ponto2:ClienteType) {
    const {x: x1, y: y1} = ponto1.localizacao;
    const {x: x2, y: y2} = ponto2.localizacao;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
  
export default function calcularCaminhoMaisCurto(pontos: ClienteType[]) {
    const caminho = [0]; // Começamos no primeiro ponto
    const visitados = new Set([0]); // Mantém registro dos pontos já visitados
    let pontoAtual = 0;
  
    while (visitados.size < pontos.length) {
      let menorDistancia = Infinity;
      let proximoPonto = 0;
  
      // Encontrar o ponto mais próximo não visitado
      for (let i = 0; i < pontos.length; i++) {
        if (!visitados.has(i)) {
          const distancia = calcularDistancia(pontos[pontoAtual], pontos[i]);
          if (distancia < menorDistancia) {
            menorDistancia = distancia;
            proximoPonto = i;
          }
        }
      }
  
      // Adiciona o próximo ponto ao caminho
      caminho.push(proximoPonto);
      visitados.add(proximoPonto);
      pontoAtual = proximoPonto;
    }
  
    // Adiciona o ponto inicial novamente ao final do caminho
    caminho.push(0);
    
    return caminho.map(index => pontos[index]);
  }
  
  // Exemplo de uso:
//   const pontos = [{x:0, y:0}, {x:1, y:0}, {x:0, y:1}, {x:2, y:1}, {x:1, y:1}];
//   const caminhoMaisCurto = calcularCaminhoMaisCurto(pontos);
//   console.log('O caminho mais curto passando por todos os pontos é:', caminhoMaisCurto);
  