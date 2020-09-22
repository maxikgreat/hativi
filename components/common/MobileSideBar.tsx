import { Sidebar, Menu } from 'semantic-ui-react';

interface MobileSideBar {
  visible: boolean,
  setVisible: (isVisible: boolean) => void,
  routes: JSX.Element[],
}

export const MobileSideBar = ({ visible, setVisible, routes }: MobileSideBar) => {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      direction="right"
      inverted
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      width="thin"
    >
      {routes}
    </Sidebar>
  )
}