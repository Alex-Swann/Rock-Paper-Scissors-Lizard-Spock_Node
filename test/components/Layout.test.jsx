// jshint esversion:6
import React from 'react';
import sinon from 'sinon';
import { expect }  from 'chai';
import { mount } from 'enzyme';

import Aside from '../../app/components/Aside.jsx';
import Choices from '../../app/components/Choices.jsx';
import Layout from '../../app/components/Layout.jsx';
import Legend from '../../app/components/Legend.jsx';
import Message from '../../app/components/Message.jsx';
import Score from '../../app/components/Score.jsx';

describe('<Layout/>', () => {
  var wrapper;

  before(()=>{
    sinon.stub(Math, 'random').returns(0);
    wrapper = mount(
      <Layout />
    );
  });

  it('renders five <Choices /> components (game buttons) by default', () => {
    expect(wrapper.find(Choices)).to.have.length(5);
  });


  it('renders with initial state', () => {
    expect(wrapper.state('computer')).to.eql('rock');
    expect(wrapper.state('games')).to.eql(['']);
  });


  // it('renders <Message /> when a move is selected', () => {
  //   wrapper.find('#rock').first().simulate('click');
  //   expect(wrapper.find(Message)).to.have.length(1);
  // });

  // it('play a new game when New Game is chosen', () => {
  //   wrapper.find('button#rock').first().simulate('click');
  //   wrapper.find('button.new-game').first().simulate('click');
  //   expect(wrapper.state('games')).to.eql(['']);
  // });
  //
  // it('should update the score on winning', () => {
  //   wrapper.find('button#rock').first().simulate('click');
  //   expect(wrapper.state('games').length).to.equal(1);
  //   expect(wrapper.state('result')).to.equal('Winner');
  // });

});
