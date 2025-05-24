import * as LucideIcons from 'lucide-react';

const Icon = ({ name, size = 20, ...props }) => {
  const LucideIcon = LucideIcons[name ? toPascalCase(name) : 'Circle'];
  
  return <LucideIcon size={size} {...props} />;
};

// Helper function to convert kebab-case or snake_case to PascalCase
function toPascalCase(string) {
  return string
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

export default Icon;