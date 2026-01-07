import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-yellow-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-yellow-500',
      },
      size: {
        small: 'text-xs px-3 py-1.5',
        medium: 'text-sm px-4 py-2',
        large: 'text-base px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Check our Stores",
  text_font_size = "13",
  text_font_family = "Inter",
  text_font_weight = "500",
  text_line_height = "17px",
  text_text_align = "center",
  text_color = "#000000",
  fill_background_color = "#fed31a",
  border_border_radius = "12px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Map style values to Tailwind classes where possible
  const getFontSize = () => {
    const sizeMap = {
      "12": "text-xs",
      "13": "text-sm", 
      "15": "text-base",
      "23": "text-lg",
      "25": "text-xl",
      "38": "text-2xl",
      "66": "text-3xl"
    };
    return sizeMap?.[text_font_size] || `text-[${text_font_size}px]`;
  };

  const getFontWeight = () => {
    const weightMap = {
      "300": "font-light",
      "400": "font-normal", 
      "500": "font-medium"
    };
    return weightMap?.[text_font_weight] || `font-[${text_font_weight}]`;
  };

  const getLineHeight = () => {
    const heightMap = {
      "17px": "leading-xs",
      "18px": "leading-sm",
      "20px": "leading-base", 
      "29px": "leading-lg",
      "37px": "leading-xl",
      "51px": "leading-2xl",
      "69px": "leading-3xl"
    };
    return heightMap?.[text_line_height] || `leading-[${text_line_height}]`;
  };

  const getTextColor = () => {
    const colorMap = {
      "#fed31a": "text-primary-background",
      "#000000": "text-primary-foreground",
      "#ffffff": "text-secondary-background"
    };
    return colorMap?.[text_color] || `text-[${text_color}]`;
  };

  const getBackgroundColor = () => {
    const bgMap = {
      "#fed31a": "bg-primary-background",
      "#000000": "bg-primary-foreground", 
      "#ffffff": "bg-secondary-background",
      "#f2f1f0": "bg-background-main",
      "#f4f5f5": "bg-background-secondary"
    };
    return bgMap?.[fill_background_color] || `bg-[${fill_background_color}]`;
  };

  const getBorderRadius = () => {
    const radiusMap = {
      "0px": "rounded-none",
      "12px": "rounded-sm",
      "16px": "rounded-base", 
      "40px": "rounded-lg"
    };
    return radiusMap?.[border_border_radius] || `rounded-[${border_border_radius}]`;
  };

  const getTextAlign = () => {
    const alignMap = {
      "left": "text-left",
      "center": "text-center",
      "right": "text-right",
      "justify": "text-justify"
    };
    return alignMap?.[text_text_align] || "text-center";
  };

  // Build component classes
  const componentClasses = [
    getFontSize(),
    getFontWeight(), 
    getLineHeight(),
    getTextAlign(),
    getTextColor(),
    getBackgroundColor(),
    getBorderRadius(),
    `font-[${text_font_family}]`
  ]?.join(' ');

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        componentClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;