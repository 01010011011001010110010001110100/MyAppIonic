import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {
  private unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  private decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  private especiales = ['once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  private centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  convertir(num: number): string {
    if(num === 1000) return 'mil';
    if(num === 100) return 'cien';
    
    let resultado = '';
    const c = Math.floor(num / 100);
    const d = Math.floor((num % 100) / 10);
    const u = num % 10;
    
    if(c > 0) resultado += this.centenas[c] + ' ';
    if(d === 1 && u > 0) {
      resultado += this.especiales[u - 1];
    } else {
      if(d > 0) resultado += this.decenas[d] + ' ';
      if(u > 0) resultado += this.unidades[u];
    }
    
    return resultado.trim();
  }
}
