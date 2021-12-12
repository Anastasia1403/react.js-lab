import format from 'date-fns/format';
import { RootState } from 'redux/store';

const freeTimeList = (state: RootState) => state.time.time.map((item) => ({ label: format(new Date(item), 'h:mm aaa'), value: item }));

export default freeTimeList;
