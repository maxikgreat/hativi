import {render} from '@testing-library/react';import {Stars} from '.';describe('Stars component', () => {  it('should render properly and match snapshot', () =>    expect(render(<Stars />)).toMatchSnapshot()  );});