import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add two numbers together', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonPlus = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract a number from another', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply two numbers together', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to multiply two numbers together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate consecutive number button clicks', () => {
    const button3 = container.find('#number3');
    const button6 = container.find('#number6');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    button6.simulate('click');
    expect(runningTotal.text()).toEqual('36');
  })

  it('should chain multiple operations together', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const button2 = container.find('#number2');
    const buttonPlus = container.find('#operator_add');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonPlus.simulate('click');
    button5.simulate('click');
    buttonMultiply.simulate('click');
    button2.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('16');
  })
    
  it('should be able to clear the calculator screen', () => {
    const button5 = container.find('#number5');
    const buttonC = container.find('#clear');
    const runningTotal = container.find('#running-total');
    button5.simulate('click');
    button5.simulate('click');
    buttonC.simulate('click');
    expect(runningTotal.text()).toEqual('0');
  })
})

