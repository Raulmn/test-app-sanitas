import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {
    transform(items: any[], filter: string, keySearch: string[]): any {
        if (!items || !filter) {
            return items;
        }
        let itemTmp: any[] = []
        keySearch.every((key: string) => {
            itemTmp = items.filter(item => {
                return item[key].toLowerCase().indexOf(filter.toLowerCase()) !== -1
            });
            return itemTmp.length === 0;
        });
        return itemTmp;
    }
}
