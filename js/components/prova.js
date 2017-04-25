import {model} from 'backbone';
import moment from 'moment';
import locale_en from 'moment/locale/en-gb';

moment.updateLocale("en", locale_en);

function prova() {
  console.log('sss', moment().format('MMMM Do YYYY, h:mm:ss a'));
  console.log(new Date());
}

export default prova;
