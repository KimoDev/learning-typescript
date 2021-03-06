// Type Aliases / Custom Types
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
 
// | symbolises union types. 'as-number' symbolises a literal type
const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  // convert after result has been calculated, compared to ^ checking at runtime.
  // if(resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("joseph", "kimo", "as-text");
console.log(combinedNames);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
