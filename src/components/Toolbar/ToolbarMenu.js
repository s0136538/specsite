import React from 'react';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';

const menuItems = [
  <ListItem primaryText="Settings" />,
  <ListItem primaryText="Help" />,
  <ListItem primaryText="Feedback" />,
];

const ToolbarMenu = props => (
  <MenuButton id="woop" buttonChildren="more_vert" menuItems={menuItems} icon {...props} />
);

export default ToolbarMenu;
