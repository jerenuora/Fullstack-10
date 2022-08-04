import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SingInContainer } from '.';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        const onSubmit = jest.fn();
        const { getByPlaceholderText, getByText } = render(<SingInContainer onSubmit={onSubmit} />);

        fireEvent.changeText(getByPlaceholderText('Username'), 'jere');
        fireEvent.changeText(getByPlaceholderText('Password'), 'password');
        fireEvent.press(getByText('Sign in'));
    

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'jere',
            password: 'password',
          });
      
      });
    });
  });
});
