__shimport__.load('./import-named/input.js', ['./foo.js'], function(__import_0, __exports){ var foo = __import_0.foo; /*import { foo } from './foo.js'*/;

console.log(foo);
});