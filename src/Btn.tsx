import React, { FC } from "react";

interface ButtonProps {
  /**
   * Simple click handler
   */
  onClick?: () => void;
}

interface ExtraProps {
  someNumber: number;
}

/**
 * The world's most _basic_ button
 * 
 * @param {string} name - This should be a string.
 * 
 * @param {ExtraProps} extraProps
 * 
 * @example <Button>Click me!</Button>
 * 
 */
export const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);