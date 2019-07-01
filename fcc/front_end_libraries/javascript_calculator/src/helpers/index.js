export default function cleanUpZeros(operation) {
  let opString = operation.join('');
  opString = opString.replace(/^0+(?!(\.))/, 0); // delete initial 0s if not followed by a dot
  opString = opString.replace(/^0+(?=[1-9])/, '');
  opString = opString.replace(/^0+(?=\.)/, 0);
  opString = opString.replace(/^\./, '0.');
  opString = opString.replace(/(?<=\..*[1-9])0+(?=[+/x-])/, ''); // delete trailling 0s in front of an operator
  opString = opString.replace(/(?<=[+/x-])0{2,}(?!\.)/, ''); // delete additional 0s after an operator
  opString = opString.replace(/(?<=[+/x-])0+(?=\.)/, 0); // replace multiple 0s by a single 0 before a dot and after operators
  opString = opString.replace(/(?<=[+/x-].*[1-9])0+$/, ''); // delete trailing 0s
  return opString;
}
