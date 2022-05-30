import { parse } from 'yaml';

export function build(yamlFile: string, callback: (item: object, event?: object) => any) {
    let r = parse(yamlFile);

    if (r.on) {
        return callback(r, r.on)
    }

    return callback(r);
}