// // Task 1 Accessor descriptors
let obj = {
    name: [],
    surname: `1`,
    get a() {
      return this.name;
    },
    set a(value) {
      this.name = [value.split(`, `) + `, ` + value.length];
    },
  };
  obj.a = `Sona Lusine`;
  console.log(obj);