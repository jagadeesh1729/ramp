import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import DropDown from '.';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'; 
import { MENU_ITEMS } from '../../../utils/constants';

test('renders label and menu items correctly', () => {
    const label = 'Test Label';
    const menuItems = MENU_ITEMS
  render(<DropDown label={label} menuItems={menuItems} width={''}  />);
  const labelElements = screen.getAllByText('Test Label');
  expect(labelElements.length).toBeGreaterThan(0);
  const labelElement = labelElements[0]; 
  expect(labelElement).toBeInTheDocument();
  
  });
  test('renders label and menu items correctly', () => {
    const label = 'Test Label';
    const menuItems = MENU_ITEMS
  render(<DropDown label={label} menuItems={menuItems} width={''} isPopover={true}  />);
  const labelElements = screen.getByTestId('dropdown').querySelector("input");
  fireEvent.change(labelElements!,{
    target:{
      value:"Travel"
    }
  })
  
  });