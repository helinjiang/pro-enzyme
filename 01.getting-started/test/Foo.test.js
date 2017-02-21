import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Foo from '../src/Foo';

describe("Test enzyme.shallow", function () {
    it("contains spec with an expectation", function () {
        expect(shallow(<Foo />).contains(<div className="foo"/>)).to.equal(true);
    });
});
