import React, { Component } from 'react';
import { expect } from 'chai';
import { configure, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Snippet from './index';

configure({ adapter: new Adapter() })

describe("Component: Snippet", () => {

  it("Has a h1, paragraph and button displying data.title and data.content and data.buttonText respectively", () => {
    const data = {
      title: 'This is my H1 title',
      content: 'Here is somme ipsum to test as content.'
    }

    const component = shallow( <Snippet { ...data } /> );
    expect(component.find('h1').text()).equal(data.title);
    expect(component.find('p').text()).equal(data.content);

  });

  it("Envokes a click callback if the button is clicked", () => {
    const data = {
      title: 'This is my H1 title',
      content: 'Here is somme ipsum to test as content.',
      buttonText: 'Click me!',
      clickCallback: sinon.spy()
    }

    const component = shallow( <Snippet { ...data } /> );
    component.find('button').simulate('click');
    expect(component.find('button').text()).equal(data.buttonText);
    expect(data.clickCallback).to.have.property('callCount', 1);


  });

});
