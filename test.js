import {Selector} from "testcafe";

const idSelector = Selector(id=>{
  return document.getElementById(id);
})

fixture("Factorial test")
  .page("https://qainterview.pythonanywhere.com/")

test("test-positive-small-integer", async t=>{
  await t
  .typeText(idSelector('number'),'3')
  .click(idSelector('getFactorial'))
  .expect(idSelector('resultDiv').innerText).contains('6')
});

test("test-positive-large-integer", async t=>{
  await t
  .typeText(idSelector('number'),'989')
  .click(idSelector('getFactorial'))
  .expect(idSelector('resultDiv').innerText).contains('Infinity')
});

test("test-error-text", async t=>{
  await t
  .typeText(idSelector('number'),'text')
  .click(idSelector('getFactorial'))
  .expect(idSelector('resultDiv').innerText).eql('Please enter an integer')
});

test("test-error-decimal", async t=>{
  await t
  .typeText(idSelector('number'),'0.2')
  .click(idSelector('getFactorial'))
  .expect(idSelector('resultDiv').innerText).eql('Please enter an integer')
});