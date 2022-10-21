export class Formatter {
  public static formatUpdateAndCreateQuery(obj: Object) {
    const valueQueryList = Object.keys(obj).reduce((query, key) => {    
      // @ts-ignore
      if (obj[key]) {
        // @ts-ignore
        if (typeof obj[key] == 'number')
          // @ts-ignore
          query.push(`${key} = ${obj[key]}`);
        else 
          // @ts-ignore
          query.push(`${key} = '${obj[key]}'`);
      }
      return query;
    }, [] as string[]);

    return valueQueryList.join(", ")

  }

}