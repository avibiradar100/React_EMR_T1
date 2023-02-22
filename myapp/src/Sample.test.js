import {shallow} from 'enzyme'
import Sample from './Sample'

describe("Sample page",()=>{

    test("checking",()=>{
      let wrapper=shallow(<Sample/>);
    //   console.log(wrapper.debug());
      expect(wrapper.exists('.sampleClass')).toEqual(true);
    })
})