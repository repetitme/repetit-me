import type { JSX } from 'react';

import {
  acceptRequest,
  cancelRequest,
  formSaved,
  noTutorsFound,
  receivedRequest,
  rejectTutor,
  responded
} from './data';
import Popup from './popup';

type dataProps = {
  title?: string;
  description?: string;
  variant?: 'default' | 'small' | 'form';
};

type TPopups = {
  isOpen: boolean;
  close: () => void;
  buttonText?: string;
  secondaryButtonText?: string;
  buttonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
};

type TFactory = Record<string, (params: TPopups) => JSX.Element>;

function renderPopup(
  { title, description, variant }: dataProps,
  props: TPopups
): JSX.Element {
  return (
    <Popup title={title} children={description} variant={variant} {...props} />
  );
}

const Popups: TFactory = {
  noTutorsFound: (params) => renderPopup(noTutorsFound, params),
  responded: (params) => renderPopup(responded, params),
  cancelRequest: (params) => renderPopup(cancelRequest, params),
  receivedRequest: (params) => renderPopup(receivedRequest, params),
  rejectTutor: (params) => renderPopup(rejectTutor, params),
  acceptRequest: (params) => renderPopup(acceptRequest, params),
  formSaved: (params) => renderPopup(formSaved, params)
};

export default Popups;
