type info = 'name' | 'role' | 'type' | 'alreadyExists' | 'championAdded' | 'championUpdated' | 'championDeleted' | 'notFound' | 'error';

type toastType = {
  title: string;
  description: string;
  status: 'warning' | 'success' | 'error';
  duration: number;
  isClosable: boolean;
}

const toastHelper = (info: info): toastType => {
  let finalToast: toastType = {
    title: 'Title',
    description: 'Description',
    status: 'success',
    duration: 5000,
    isClosable: true
  };

  switch (info) {
    case 'name':
      finalToast.title = 'Name field not filled';
      finalToast.description = 'Please, write the name and base name';
      finalToast.status = 'warning';
      break;
    case 'role':
      finalToast.title = 'Role not selected';
      finalToast.description = 'Please, select at least one role';
      finalToast.status = 'warning';
      break;
    case 'type':
      finalToast.title = 'Damage type not selected';
      finalToast.description = 'Please, select at least one damage type!';
      finalToast.status = 'warning';
      break;
    case 'alreadyExists':
      finalToast.title = 'Error!';
      finalToast.description = 'The champion already exists in the DB!';
      finalToast.status = 'error';
      break;
    case 'championAdded':
      finalToast.title = 'Sucess!';
      finalToast.description = 'Champion added with sucess';
      finalToast.status = 'success';
      break;
    case 'championUpdated':
      finalToast.title = 'Sucess!';
      finalToast.description = 'Champion updated with sucess';
      finalToast.status = 'success';
      break;
    case 'championDeleted':
      finalToast.title = 'Sucess!';
      finalToast.description = 'Champion deleted with sucess';
      finalToast.status = 'success';
      break;
    case 'notFound':
      finalToast.title = 'No champion found!';
      finalToast.description = 'Please, check your requirements';
      finalToast.status = 'error';
      break;
    case 'error':
      finalToast.title = 'Error!';
      finalToast.description = 'An error have ocurred';
      finalToast.status = 'error';
      break;
    default:
      finalToast.title = 'Error!';
      finalToast.description = 'An error have ocurred';
      finalToast.status = 'error';
      break;
  }

	return finalToast;
};

export default toastHelper;
