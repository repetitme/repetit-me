import { ReactNode } from 'react';

export type AuthModalProps = {
  type: boolean;
<<<<<<< HEAD:src/widgets/ui/AuthModal/types.ts
=======
  onClose: () => void;
  onToggle: (e: React.MouseEvent<HTMLAnchorElement>) => void;
>>>>>>> ca7f4903ee37260cedafd88a4b4e9b1a9f733853:src/widgets/AuthModal/types.ts
  children: ReactNode;
  toLogin: () => void;
  onClose: () => void;
};
