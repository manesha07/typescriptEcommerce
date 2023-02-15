import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const success = (param: string) => {
  toast.success(`Succesfully ${param}`, {
    position: toast.POSITION.TOP_CENTER
  });
};
export const error = (error:string) => {
    toast.error(error.toString(), {
        position: toast.POSITION.TOP_CENTER
      });
}