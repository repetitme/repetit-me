import AuthHeader from '../AuthHeader';
import useHeaderConfig from '../useHeaderConfig';

import { CommonHeaderProps } from '../types';

const StudentHeader = ({ role, onLogout }: CommonHeaderProps) => {
  const config = useHeaderConfig({ role, onLogout });
  return <AuthHeader {...config} />;
};

export default StudentHeader;
