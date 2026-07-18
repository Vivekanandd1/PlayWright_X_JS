import data from '../data/data.json';

export class Properties {

    static getProperty(path: string): any {

       return path
      .split('.')
      .reduce((obj: any, key) => obj?.[key], data);

    }

}