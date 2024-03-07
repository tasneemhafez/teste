import { Product } from './shared/interface/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(prodicts:Product[], term:string): Product[] {
    return prodicts.filter((Product)=>Product.title.toLowerCase().includes(term.toLowerCase()));
  }

}
