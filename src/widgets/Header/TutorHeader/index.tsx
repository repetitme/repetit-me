import AuthHeader from '../AuthHeader';
import useHeaderConfig from '../useHeaderConfig';

import { CommonHeaderProps } from '../types';

const TutorHeader = ({ role, onLogout }: CommonHeaderProps) => {
  const config = useHeaderConfig({ role, onLogout });
  return <AuthHeader {...config} />;
};

export default TutorHeader;

