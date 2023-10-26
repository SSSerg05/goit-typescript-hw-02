let some:unknown;
some = 'Text';
let str: string;

str = String(some);
str = some as string;

if (typeof some === 'string') {
  str = some;
}

export {};